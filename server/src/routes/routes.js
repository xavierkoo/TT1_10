const express = require("express");
const routes = express.Router();
const controllers = require("../controllers/controllers");

// GET - GET 1 company's info and outstanding requests made
routes.get("/company-info/:id", controllers.getCompanyInfo);

module.exports = routes;
