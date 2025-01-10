const db = require("./../config/db");

exports.getCompanyInfo = async function (companyId) {
  return new Promise((resolve, reject) => {
    const query = `
    SELECT 
      c.companyId,
      c.companyName,
      c.activeAccount,
      c.carbonBalance,
      c.cashBalance,
      c.createdDatetime AS companyCreatedDatetime,
      c.updatedDatetime AS companyUpdatedDatetime,
      r.id AS outstandingRequestId,
      r.companyId AS requesteeCompanyId,
      r.requestorCompanyId,
      r.carbonUnitPrice,
      r.carbonQuantity,
      r.requestReason,
      r.requestStatus,
      r.requestType,
      r.createdDatetime AS requestCreatedDatetime,
      r.updatedDatetime AS requestUpdatedDatetime
    FROM 
      companyaccount c
    LEFT JOIN 
      outstandingrequest r ON c.companyId = r.requestorCompanyId
    WHERE 
      c.companyId = ?;
  `;

    db.query(query, [companyId], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

exports.findUserByName = async function (companyName) {
  return new Promise((resolve, reject) => {
    const query = `
    SELECT 
      * 
    FROM 
      useraccount u
    WHERE 
      u.companyName = ?;
  `;

    db.query(query, [companyName], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};
