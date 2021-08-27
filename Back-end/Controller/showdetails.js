const Survey = require("../Model/survey_info");

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
