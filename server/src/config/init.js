const express = require("express");
const httpLogger = require("./../middlewares/httpLogger");
const errorHandler = require("./../middlewares/errorHandler");
const routes = require("./../routes/routes");
module.exports = function (app) {
  app.use(express.json());
  app.use(httpLogger);
  app.use("", routes);
  app.use(errorHandler);
};
