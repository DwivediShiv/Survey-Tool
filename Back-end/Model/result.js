const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
  type: {
    type: String,
  },
  option1: {
    name: {
      type: String,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  option2: {
    name: {
      type: String,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  option3: {
    name: {
      type: String,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  option4: {
    name: {
      type: String,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
});
module.exports = mongoose.model("Surveyresult", resultsSchema);
