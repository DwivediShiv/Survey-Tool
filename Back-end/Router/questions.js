const express = require("express");
const router = express.Router();
const questionsController = require("../Controller/questions");

router.get("/", questionsController.questions);

module.exports = router;
