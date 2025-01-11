function errorHandler(err, req, res, next) {
  const response = {
    message: err.message || "Internal Server Error",
    statusCode: err.statusCode || 500,
    timestamp: err.timestamp,
  };

  logger.error({
    message: response.message,
    statusCode: response.statusCode,
    timestamp: response.timestamp,
    stackTrace: err.stack || [],
  });

  // Send the response
  res.status(response.statusCode).json(response);
}

module.exports = errorHandler;
