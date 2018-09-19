require("dotenv").config();
const cloudinary = require("cloudinary");
const {
  REACT_APP_CLOUDINARY_API_KEY,
  REACT_APP_CLOUDINARY_API_SECRET,
  REACT_APP_CLOUDINARY_CLOUD_NAME
} = process.env;

cloudinary.config({
  cloud_name: REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key: REACT_APP_CLOUDINARY_API_KEY,
  api_secret: REACT_APP_CLOUDINARY_API_SECRET
});

module.exports = {
  uploadProfilePhotoToCloudinary: (req, res, next) => {
    let options = {
      resource_type: "auto",
      tags: ["profile_photo"]
    };
    cloudinary.v2.uploader.upload(req.body.payload, options, (err, result) => {
      if (err) {
        console.log("cloudinary upload profile photo error: ", err);
      } else {
        console.log("cloudinary upload profile photo result: ", result);
        req.app.get("db")
        //START BACK UP HERE--MAKE SAVE_PROFILE_PHOTO SQL FILE
          .save_profile_photo([result.public_id, req.body.id])
          .then( response => {
              res.status(200).send(response[0])
          })
          .catch( err => {
              console.log('save profile image to db error: ', err)
              res.sendStatus(500)
          })
      }
    });
  }
};
