const { validationResult } = require("express-validator");

const Survey = require("../Model/survey_info");

exports.user = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed");
    error.stausCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const name = req.body.name;
  console.log(req.body, email, name);
  const survey = new Survey({
    email: email,
    name: name,
  });
  survey
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Entry Successful",
        userId: result._id,
      });
    })
    .catch((err) => {
      if (!err.stausCode) {
        err.stausCode = 500;
      }
      next(err);
    });
};
