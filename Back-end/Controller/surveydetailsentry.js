const Survey = require("../Model/survey_info");

exports.surveyDetails = (req, res, next) => {
  const userId = req.params.userId;
  const movie = req.body.movie;
  const tvSeries = req.body.tvSeries;
  const dish = req.body.dish;
  const country = req.body.country;
  const car = req.body.car;

  Survey.findById(userId)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
      }
      user.movie = movie;
      user.tvSeries = tvSeries;
      user.dish = dish;
      user.country = country;
      user.car = car;

      return user.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Survey Updated",
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
