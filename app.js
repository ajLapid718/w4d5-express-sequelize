// This is where our middleware and express app will live;
const express = require("express");
const app = express();
const apiRouter = require("./routes");

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!");
})