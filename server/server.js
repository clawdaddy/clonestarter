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
    const { sub, email, name, picture } = userInfoResponse.data;
    //find user in db
    app
      .get("db")
      .find_user_by_auth_id([sub])
      .then(user => {
        if (user.length) {
          //if there is a user in the database, get projects from db. If there is no results, that means there are no projects, so assign the user an empty array for projects, and send it back. Otherwise, append the array of projects to the user object and send that back.
          app.get('db')
          .get_creator_projects([user[0].id])
          .then( userWithProjects => {
            if(!userWithProjects.length){
              user[0].projectsArray = []
              req.session.user = user[0]
              console.log('no projects on session', req.session.user)
              res.redirect(FRONTEND_URL)
            } else {
              userWithProjects[0].projectsArray = userWithProjects.map( userWithProject => {
                return {
                  projectId: userWithProject.project_id,
                  projectImage:userWithProject.image,
                  projectTitle:userWithProject.title
                }
              })
              req.session.user = userWithProjects[0]
              console.log('returning user on session', req.session.user)
              res.redirect(FRONTEND_URL)
            }
            
          })
          
        } else {
          //create user in db
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
    res.status(200).send(req.session.user);
  } else {
    res.status(200).send("redirect");
  }
});
app.delete("/auth/logout", (req, res, next) => req.session.destroy(err => console.log(err)))

app.post("/api/addProject", projectCreationController.addProject);
app.get("/api/getAllProjects", projectCreationController.getAllProjects);
app.get("/api/getProject/:projectId", projectCreationController.getProject);
app.put("/api/saveProject/:projectId", projectCreationController.saveProject);


app.listen(SERVER_PORT, () =>
  console.log(`Kicking things off on port ${SERVER_PORT}`)
);
