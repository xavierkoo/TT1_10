const express = require("express");
const db = require("../config/db");
const routes = express.Router();
const controllers = require("../controllers/controllers");

// GET - GET 1 company's info and outstanding requests made
routes.get("/company-info/:id", controllers.getCompanyInfo);
db.connect();

//requestingCompany get from session, how to handle ID?
routes.post("/updateRequest", (req, res) => {
const { requestId, requestDate, companyName, requestingCompany, carbonPrice, carbonQuantity, requestingReason, requestType } = req.body;

const query = `
    UPDATE outstandingRequests 
    SET requestDate = ?, companyName = ?, requestingCompany = ?, carbonPrice = ?, carbonQuantity = ?, requestingReason = ?, requestType = ?
    WHERE requestId = ?
`;
const values = [requestDate, companyName, requestingCompany, carbonPrice, carbonQuantity, requestingReason, requestType, requestId];

db.query(query, values, (error, results) => {
    if (error) {
        console.error("An error occurred while updating the request:", error);
        res.status(500).send("An error occurred while updating the request");
        return;
    }
    res.status(200).send("Request updated successfully");
});
});
module.exports = routes;
