const jwt = require("jsonwebtoken");

function signToken(userObj) {
  const secretKey = process.env.JWT_SECRET_KEY;
  return jwt.sign(
    {
      companyId: userObj.companyId,
      companyName: userObj.companyName,
    },
    secretKey
  );
}

module.exports.signToken = signToken;
