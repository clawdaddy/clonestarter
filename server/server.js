require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const projectCreationController = require("./projectCreationController");
const massive = require("massive");
const session = require("express-session");
const axios = require("axios");
const authBypass = require("auth-bypass");
const app = express();
const cloudinary = require("cloudinary")


const {
  SERVER_PORT,
  DATABASE_CONNECTION,
  SESSION_SECRET,
  REACT_APP_AUTH0_CLIENT_ID,
  REACT_APP_AUTH0_CLIENT_SECRET,
  REACT_APP_AUTH0_DOMAIN,
  REDIRECT_PROTOCOL,
  FRONTEND_URL,
  REACT_APP_CLOUDINARY_API_KEY,
  REACT_APP_CLOUDINARY_API_SECRET,
  REACT_APP_CLOUDINARY_CLOUD_NAME,
  REACT_APP_CLOUDINARY_URL
} = process.env;

cloudinary.config({
  cloud_name:REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key:REACT_APP_CLOUDINARY_API_KEY,
  api_secret:REACT_APP_CLOUDINARY_API_SECRET
})

app.use(bodyParser.json({limit: '50mb'}))
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
//auth bypass for testing
app.use(
  authBypass.withObject({
    id: 4,
    profile_photo:
      "https://lh5.googleusercontent.com/-8xZLDWSSzwU/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7qRnH2TDSlMdx-yYYD1ahhE4kiE5A/mo/photo.jpg",
    name: "Kyle Clawson",
    biography: null,
    your_location: null,
    contact_email: "kylesclawson@gmail.com",
    auth0_id: "google-oauth2|105434551629448689709"
  }),
  (req, res, next) => {
    if(!req.session.user.projectsArray){
      app
      .get("db")
      .get_creator_projects([req.session.user.id])
      .then(dbResponse => {
        dbResponse[0].projectsArray = dbResponse.map(userWithProject => {
          return {
            projectId: userWithProject.project_id,
            projectImage: userWithProject.image,
            projectTitle: userWithProject.title
          };
        });
        req.session.user = dbResponse[0];
        next();
      });
    }
    else next();
  }
);

app.post("/api/redirect", (req, res, next) => {
  req.session.redirect = req.body.redirect;
  res.sendStatus(200);
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
          app
            .get("db")
            .get_creator_projects([user[0].id])
            .then(userWithProjects => {
              if (!userWithProjects.length) {
                user[0].projectsArray = [];
                req.session.user = user[0];
                console.log("no projects on session", req.session.user);
                res.redirect(
                  req.session.redirect
                    ? FRONTEND_URL + req.session.redirect
                    : FRONTEND_URL
                );
              } else {
                userWithProjects[0].projectsArray = userWithProjects.map(
                  userWithProject => {
                    return {
                      projectId: userWithProject.project_id,
                      projectImage: userWithProject.image,
                      projectTitle: userWithProject.title
                    };
                  }
                );
                req.session.user = userWithProjects[0];
                console.log("returning user on session", req.session.user);
                res.redirect(
                  req.session.redirect
                    ? FRONTEND_URL + req.session.redirect
                    : FRONTEND_URL
                );
              }
            });
        } else {
          //create user in db
          app
            .get("db")
            .create_user([sub, email, name, picture])
            .then(newUserResponse => {
              req.session.user = newUserResponse[0];
              res.redirect(
                req.session.redirect
                  ? FRONTEND_URL + req.session.redirect
                  : FRONTEND_URL
              );
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
  console.log("user is on session", req.session.user);
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(200).send("redirect");
  }
});
app.get("/auth/logout", (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      return next(err);
    } else {
      return res.redirect(FRONTEND_URL);
    }
  });
});

//project endpoints

app.post("/api/addProject", projectCreationController.addProject);
app.get("/api/getAllProjects", projectCreationController.getAllProjects);
app.get("/api/myProjects", projectCreationController.getMyProjects)
app.get("/api/getProject/:projectId", projectCreationController.getProject);
app.put("/api/saveProject/:projectId", projectCreationController.saveProject);
app.get('/api/getCurrentProject', (req, res, next) => res.status(200).send(req.session.currentProject))

//reward endpoints

app.get(`/api/reward/:projectId`,projectCreationController.getRewardsByProject)
app.post(`/api/reward/newReward`, projectCreationController.createNewReward)
app.get(`/api/reward/getOneReward/:rewardId`, projectCreationController.getOneReward)
app.put(`/api/reward/editReward`, projectCreationController.editReward)
app.delete(`/api/reward/deleteReward/:rewardId`, projectCreationController.deleteReward)

//reward item endpoints

app.post(`/api/reward/item`,projectCreationController.createNewRewardItem)
app.get(`/api/reward/item/getItems/:creatorId`, projectCreationController.getRewardItems)
app.put(`/api/reward/item/editItem`, projectCreationController.editRewardItem)
app.get(`/api/reward/item/getItem/:itemId`, projectCreationController.getOneRewardItem)

//reward item linker endpoints

app.post(`/api/reward/item/addItemsToReward`, projectCreationController.addItemsToReward)
app.put(`/api/reward/item/editItemOnReward`, projectCreationController.editItemOnReward)
app.get(`/api/reward/item/getItemOnReward`, projectCreationController.getItemOnReward)
app.delete(`/api/reward/item/deleteItemOnReward/:itemLinkerId`, projectCreationController.deleteItemOnReward)

//cloudinary save picture

app.post("/api/savePicture", (req, res, next) => {
  let options = {
    resource_type:"auto",
    tags:['main_pic']
  }
  cloudinary.v2.uploader.upload(req.body.payload, options, (err,result) => {
    if(err) {
      console.log('cloudinary upload error: ', err)
      res.sendStatus(500)
    }
    else{
      console.log('result:', result)
      req.app.get('db')
        .save_picture([result.public_id, req.body.id])
        .then( response => {
          res.status(200).send(response[0])
        })
        .catch((err) => {
          console.log('save image to db error: ', err)
          res.sendStatus(500)
        })
    }
    
  } 
)

  
})
app.listen(SERVER_PORT, () =>
  console.log(`Kicking things off on port ${SERVER_PORT}`)
);
