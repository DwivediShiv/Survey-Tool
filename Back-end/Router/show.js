const express = require("express");
const router = express.Router();

const showdetailsController = require("../Controller/showdetails");

router.get("/surveyDetails", showdetailsController.getSurveyDetails);

module.exports = router;
