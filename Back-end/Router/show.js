const express = require("express");
const router = express.Router();

const showdetailsController = require("../Controller/showdetails");

router.get("/surveyDetails", showdetailsController.getSurveyDetails);
router.get("/surveyResults", showdetailsController.getSurveyResults);

module.exports = router;
