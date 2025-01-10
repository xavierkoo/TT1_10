const express = require("express");
const routes = express.Router();
const controllers = require("../controllers/controllers");

// GET - GET 1 company's info and outstanding requests made
routes.get("/company-info/:id", controllers.getCompanyInfo);

// POST - Posting a list of ID to bulk accept/reject requests made from OTHER companies
routes.post("accept-reject-requests", controllers.acceptRejectRequests);

// POST - login user:
routes.post("/login", controllers.loginUser);

module.exports = routes;
