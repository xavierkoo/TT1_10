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
      }),
    };

    return res.status(200).json(companyInfo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
