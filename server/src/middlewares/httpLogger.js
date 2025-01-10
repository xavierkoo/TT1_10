function httpLogger(req, res, next) {
  const start = Date.now();
  const startDate = new Date(start).toISOString();
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info(
      `Request processed: ${req.method} ${req.url} - Status: ${res.statusCode} - Time: ${startDate} - Time Taken: ${duration}ms`
    );
  });

  next();
}

module.exports = httpLogger;
