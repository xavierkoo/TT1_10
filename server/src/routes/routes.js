const express = require("express");
const routes = express.Router();
const controllers = require("../controllers/controllers");

// sanity check
routes.get("/health", (req, res) => {
    console.log("[routes.js] Sanity check!");

    res.status(200).json({message: "health check!"})
})

// GET - GET 1 company's info and outstanding requests made
routes.get("/company-info/:id", controllers.getCompanyInfo);

routes.get('/requests-by-other/:id', controllers.getOutstandingRequestsByOther);

// POST - Posting a list of ID to bulk accept/reject requests made from OTHER companies
routes.post("accept-reject-requests", controllers.acceptRejectRequests);

// POST - login user:
routes.post("/login", controllers.loginUser);

module.exports = routes;
