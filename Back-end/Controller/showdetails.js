const Survey = require("../Model/survey_info");
const Surveyresult = require("../Model/result");

exports.getSurveyDetails = (req, res, next) => {
  Survey.find()
    .then((result) => {
      res.status(200).json({
        message: "Survey details fetched",
        surveyDetails: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getSurveyResults = (re, res, next) => {
  Surveyresult.find()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Survey details fetched",
        surveyResults: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
