// This is where the api endpoints for campuses will be at;
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("Campuses!!!");
})

module.exports = router;