const Questions = require("../Model/questions");

exports.questions = (req, res, next) => {
  Questions.find()
    .then((result) => {
      console.log("result", result);
      res.status(200).json({
        data: result,
      });
    })
    .catch((err) => {
      if (!err.stausCode) {
        err.stausCode = 500;
      }
      next(err);
    });
};
