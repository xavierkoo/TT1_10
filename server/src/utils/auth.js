const {verify} = require('jsonwebtoken');

class NotAuthError {
    message;
    status;
	constructor(message) {
		this.message = message;
		this.status = 401;
	}
}

const KEY = process.env.JWT_SECRET_KEY || "supersecret";

const validateJSONToken = (token) => {
	return verify(token, KEY);
};

exports.checkAuthMiddleware = (req, res, next) => {
	if (req.method === "OPTIONS") {
		return next();
	}
    // missing authorization header
	if (!req.headers.authorization) {
		console.log("NOT AUTH. AUTH HEADER MISSING.");
		return next(new NotAuthError("Not authenticated."));
	}

    // e.g. format: bearer <token>
	const authFragments = req.headers.authorization.split(" ");
	if (authFragments.length !== 2) {
		console.log("NOT AUTH. AUTH HEADER INVALID.");
		return next(new NotAuthError("Not authenticated."));
	}
	const authToken = authFragments[1]; // <token>
	try {
		const validatedToken = validateJSONToken(authToken);
		console.log("[checkAuthMiddleware]: Validated token = " + validatedToken);
		// req.token = validatedToken;
	} catch (error) {
		console.log("NOT AUTH. TOKEN INVALID.");
		return next(new NotAuthError("Not authenticated."));
	}
	next();
};
