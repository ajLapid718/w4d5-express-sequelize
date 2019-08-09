// This is where the api endpoints for students will be at;
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("Students!!!");
})

module.exports = router;