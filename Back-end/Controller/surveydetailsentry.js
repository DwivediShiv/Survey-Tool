const Survey = require("../Model/survey_info");
const Surveyresult = require("../Model/result");

exports.surveyDetails = (req, res, next) => {
  const userId = req.params.userId;
  console.log("movuie i backend", req.body.dish);
  const movie = req.body.movie.toString().split("-")[1];
  const tvSeries = req.body.tvSeries.toString().split("-")[1];
  const dish = req.body.dish.toString().split("-")[1];
  const country = req.body.country.toString().split("-")[1];
  const car = req.body.car.toString().split("-")[1];

  Surveyresult.find().then((result) => {
    console.log("result in find", result);
    result.map((item) => {
      if (item["type"] == "Car") {
        console.log("entered here");
        item[req.body.car.toString().split("-")[0]].name = car;
        ++item[req.body.car.toString().split("-")[0]].value;
      }
      if (item["type"] == "Country") {
        console.log("entered here");
        item[req.body.country.toString().split("-")[0]].name = country;
        ++item[req.body.country.toString().split("-")[0]].value;
      }
      if (item["type"] == "Dish") {
        console.log("entered here");
        item[req.body.dish.toString().split("-")[0]].name = dish;
        ++item[req.body.dish.toString().split("-")[0]].value;
      }
      if (item["type"] == "Movie") {
        console.log("entered here");
        item[req.body.movie.toString().split("-")[0]].name = movie;
        ++item[req.body.movie.toString().split("-")[0]].value;
      }
      if (item["type"] == "TvSeries") {
        console.log("entered here");
        item[req.body.tvSeries.toString().split("-")[0]].name = tvSeries;
        ++item[req.body.tvSeries.toString().split("-")[0]].value;
      }
      item.save();
    });
  });

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

  // Count Save in survey Results
};
