var express = require("express");
var router = express.Router();
var loginRouter = require("./login");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
  res.send("HELLO :)");
});

router.use("/login", loginRouter);

module.exports = router;
