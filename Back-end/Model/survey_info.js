const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
  },
  tvSeries: {
    type: String,
  },
  dish: {
    type: String,
  },
  country: {
    type: String,
  },
  car: {
    type: String,
  },
});

module.exports = mongoose.model("Survey", surveySchema);
