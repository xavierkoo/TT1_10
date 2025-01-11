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

// outstanding requests for others (other companies are the requestees)
exports.getOutstandingByOther = async function (companyId) {
  try {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT 
	T1.companyName as requestorCompanyName,
    T1.createdDatetime as requestDate, 
    T2.carbonUnitPrice,
    T2.carbonQuantity,
    T2.requestReason,
    T2.requestType
FROM techtrek2025.outstandingRequest AS T2 
LEFT JOIN techtrek2025.companyaccount AS T1
ON T1.companyId = T2.requestorCompanyId
WHERE T2.companyId = ?;
    `;

      db.query(query, [companyId], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  } catch (err) {
    // handle errors
    console.error(err);
  }
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
