const express = require("express");
const db = require("../config/db");
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
db.connect();

// GET - testing get all outstanding requests
routes.get("/testing", controllers.testing);

// PUT - Update request in outstanding requests
routes.put("/updateRequest", controllers.updateRequest);

// DELETE - Delete request in outstanding requests
routes.delete("/updateRequest", controllers.deleteRequest);

// POST - Add request to outstanding requests
routes.post("/updateRequest", controllers.addRequest);


module.exports = routes;
