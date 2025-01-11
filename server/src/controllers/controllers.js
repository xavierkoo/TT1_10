const { hashPassword } = require("../utils/bcryptFunctions");
const service = require("./../service/service");

exports.getCompanyInfo = async function (req, res, next) {
  try {
    const companyId = req.params.id;
    if (!companyId) {
      return res.status(400).json({ message: "Company ID is required" });
    }
    const dbResponse = await service.getCompanyInfo(companyId);
    const companyInfo = {
      companyId: dbResponse[0].companyId,
      companyName: dbResponse[0].companyName,
      activeAccount: dbResponse[0].activeAccount,
      carbonBalance: dbResponse[0].carbonBalance,
      cashBalance: dbResponse[0].cashBalance,
      companyCreatedDatetime: dbResponse[0].companyCreatedDatetime,
      companyUpdatedDatetime: dbResponse[0].companyUpdatedDatetime,
      outstandingRequest: dbResponse.map((request) => {
        if (request.outstandingRequestId) {
          return {
            outstandingRequestId: request.outstandingRequestId,
            requesteeCompanyId: request.requesteeCompanyId,
            requestorCompanyId: request.requestorCompanyId,
            carbonUnitPrice: request.carbonUnitPrice,
            carbonQuantity: request.carbonQuantity,
            requestReason: request.requestReason,
            requestStatus: request.requestStatus,
            requestType: request.requestType,
            requestCreatedDatetime: request.requestCreatedDatetime,
            requestUpdatedDatetime: request.requestUpdatedDatetime,
          };
        }
      }),
    };

    return res.status(200).json(companyInfo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.acceptRejectRequests = async function (req, res, next) {
  try {
    const idArray = req.body.idArray;
    const action = req.body.action;
    const requesteeCompanyId = req.body.requesteeCompanyId;
    if (idArray.length == 0 || !action || !requesteeCompanyId) {
      return res.status(400).json({ message: "Invalid JSON Body" });
    }

    // Assuming everyone request to company A
    // companyId = Company A's ID
    // requestorCompanyId = Company X's ID
    // 1) Accept:
    // For each transaction:
    // Company A's carbonBalance decrease
    // Company A's cashBalance increase
    // Change the status to Accepted
    // Company X's carbonBalance increase
    // Company X's cashBalance decrease

    // 2) Reject:
    // For each transaction:
    // Change the status to Rejected

    let requesteeCompanyNetCarbonBalance = 0;
    let requesteeCompanyNetCashBalance = 0;

    // 1) bulk accept
    if (action == "accept") {
      for (let i = 0; i < idArray.length; i++) {
        const requestorCompanyId = idArray[i];
        // call db to get info
      }
    }

    return res.status(200).json(companyInfo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.loginUser = async function loginUser(req, res, next) {
  try {
    const companyName = req.body.username;
    const password = req.body.password;
    if (!companyName || !password) {
      return res.status(400).json({ message: "Invalid JSON Body" });
    }
    const temp = "password";
    const hashedPassword = await hashPassword(temp);

    return res.status(200).json(hashedPassword);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
