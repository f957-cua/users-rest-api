const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const exphbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const app = express();

// view engine setup

// middleware connection
app.use(logger("dev"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors());

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

//create engine 'hbs'
app.engine("hbs", hbs.engine);

//set engine as 'hbs' in server
app.set("view engine", "hbs");

//setup folder for hbs files
app.set("views", "views");

// handling static resources
app.use(express.static("public"));

// routes connection
const {
  userRouter,
  ticketRouter,
} = require("./api");
app.use("/", userRouter);
app.use("/", ticketRouter);

// catch 404 and forward to error handler
app.use((_, res) => {
  res
    .status(404)
    .json({
      status: "error",
      code: 404,
      message: "Not found",
    });
});

// error handler
app.use((err, _, res, __) => {
  const status = err.status || 500;

  // render the error page
  res.status(status).json({
    status: "fail",
    code: status,
    message: err.message,
  });
});

module.exports = app;