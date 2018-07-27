require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const projectCreationController = require("./projectCreationController");
const massive = require("massive");
const session = require("express-session");
const axios = require("axios");
const app = express();
const {
  SERVER_PORT,
  DATABASE_CONNECTION,
  SESSION_SECRET,
  REACT_APP_AUTH0_CLIENT_ID,
  REACT_APP_AUTH0_CLIENT_SECRET,
  REACT_APP_AUTH0_DOMAIN,
  REDIRECT_PROTOCOL,
  FRONTEND_URL
} = process.env;

app.use(bodyParser.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
  })
);
massive(DATABASE_CONNECTION).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.get("/auth/callback", (req, res, next) => {
  let payload = {
    client_id: REACT_APP_AUTH0_CLIENT_ID,
    client_secret: REACT_APP_AUTH0_CLIENT_SECRET,
    code: req.query.code,
    grant_type: "authorization_code",
    redirect_uri: `${REDIRECT_PROTOCOL}://${req.headers.host}/auth/callback`
  };
  function tradeCodeForAccessToken() {
    return axios.post(`https://${REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload);
  }
  function tradeAccessTokenForUserInfo(accessTokenResponse) {
    const accessToken = accessTokenResponse.data.access_token;
    return axios.get(
      `https://${REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessToken}`
    );
  }
  function storeUserInfoInDatabase(userInfoResponse) {
    console.log("hit store info");
    const { sub, email, name, picture } = userInfoResponse.data;
    app
      .get("db")
      .find_user_by_auth_id([sub])
      .then(response => {
        if (response.length) {
          req.session.user = response[0];
          res.redirect(FRONTEND_URL);
        } else {
          app
            .get("db")
            .create_user([sub, email, name, picture])
            .then(newUserResponse => {
              req.session.user = newUserResponse[0];
              res.redirect(FRONTEND_URL);
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  }
  tradeCodeForAccessToken()
    .then(accessToken => tradeAccessTokenForUserInfo(accessToken))
    .then(userInfo => storeUserInfoInDatabase(userInfo));
});
app.get("/auth/me", (req, res, next) => {
  if (req.session.user) {
    console.log("hit user");
    res.status(200).send(req.session.user);
  } else {
    console.log("hit redirect");
    res.status(200).send("redirect");
  }
});

app.post("/api/addProject", projectCreationController.addProject);
app.get("/api/getAllProjects", projectCreationController.getAllProjects);
app.get("/api/getProject/:projectId", projectCreationController.getProject);
app.put("/api/saveProject/:projectId", projectCreationController.saveProject);

app.listen(SERVER_PORT, () =>
  console.log(`Kicking things off on port ${SERVER_PORT}`)
);
