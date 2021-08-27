const express = require("express");
const mongoose = require("mongoose");
const showRoutes = require("./Router/show");
const entryRoutes = require("./Router/entry");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // CORS access
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT"); // Method access
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // application/json access
  next();
});

app.use("/show", showRoutes);
app.use("/entry", entryRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  const status = err.statusCode || 500;
  const message = err.message;
  const data = err.data;
  res.status(status).json({
    message: message,
    data: data,
  });
});

mongoose
  .connect(
    "mongodb+srv://Dwivedis:Welcome123@cluster0.1ytog.mongodb.net/survey_info"
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
