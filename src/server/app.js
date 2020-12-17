var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var loginRouter = require("./routes/login");

var app = express();

const BUILD_PATH = path.join(__dirname, "../..", "build");
app.use(express.static(BUILD_PATH));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);

app.get("/login", (req, res) => {
  res.render("src/client/container/login.js");
});

app.get("/register", (req, res) => {
  res.render("src/client/container/register.js");
});

module.exports = app;
