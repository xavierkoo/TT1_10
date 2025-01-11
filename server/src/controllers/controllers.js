const { hashPassword, comparePassword } = require("../utils/bcryptFunctions");
const { signToken } = require("../utils/jwtFunctions");
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

exports.getOutstandingRequestsByOther = async (req, res) => {
  try {
    const companyId = req.params.id;
    if (!companyId) {
      return res.status(400).json({ message: "Company ID is required" });
    }
    // fetch outstanding requests FROM other companies TO the current company
    const data = await service.getOutstandingByOther(companyId);

    // format if needed
    return res.status(200).json(data);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

exports.testing = async function (req, res, next) {
  try {
    const dbResponse = await service.testing();
    return res.status(200).json(dbResponse);
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
    
exports.updateRequest = async function (req, res, next) {
  try {
    const { requestId, companyId, requestorCompanyId, carbonUnitPrice, carbonQuantity, requestReason, requestType } = req.body;

    if (!requestId) {
      return res.status(400).json({ message: "Request ID is required" });
    }

    const dbResponse = await service.updateRequest(requestId, companyId, requestorCompanyId, carbonUnitPrice, carbonQuantity, requestReason, requestType);
    return res.status(200).json({ message: "Request updated successfully" });
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

    // checking if username exists:
    const dbResp = await service.findUserByName(companyName);
    if (dbResp.length == 0) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const userAccount = dbResp[0];

    // checking if password is correct:
    const isPasswordCorrect = await comparePassword(
      password,
      userAccount.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Login successful:
    const jwt = signToken(userAccount);
    return res.header({ "x-auth-token": jwt }).status(201).send({
      companyName: userAccount.companyName,
      companyId: userAccount.companyId,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
    
exports.deleteRequest = async function (req, res, next) {
  try {
    const { requestId } = req.body;
    if (!requestId) {
      return res.status(400).json({ message: "Request ID is required" });
    }
    const dbResponse = await service.deleteRequest(requestId);
    return res.status(200).json({ message: "Request deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.addRequest = async function (req, res, next) {
  try {
    const { companyId, requestorCompanyId, carbonUnitPrice, carbonQuantity, requestReason, requestType } = req.body;
    if (!companyId || !requestorCompanyId || !carbonUnitPrice || !carbonQuantity || !requestReason || !requestType) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const dbResponse = await service.addRequest(companyId, requestorCompanyId, carbonUnitPrice, carbonQuantity, requestReason, requestType);
    return res.status(200).json({ message: "Request added successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  };
};
