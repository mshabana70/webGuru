var express = require("express");
var router = express.Router();
var usersRouter = require('./users');

/* GET home page. */
router.get("/", function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("HELLO :)");
});

router.use('/users', usersRouter);

module.exports = router;
