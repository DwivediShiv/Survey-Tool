const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const Survey = require("../Model/survey_info");
const userEntryControlller = require("../Controller/userentry");
const surveyDetailsEntryController = require("../Controller/surveydetailsentry");

router.post(
  "/user-details",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom((value, { req }) => {
        return Survey.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject("Email address is already exists");
          }
        });
      })
      .normalizeEmail(),
    body("name").trim().not().isEmpty(),
  ],
  userEntryControlller.user
);

router.put("/survey-entry/:userId", surveyDetailsEntryController.surveyDetails);

module.exports = router;
