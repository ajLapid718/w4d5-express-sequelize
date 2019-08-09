// This is where our middleware and express app will live;
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello world!");
})

app.listen(3000, () => {
  console.log("Listening on port 3000!!!");
})