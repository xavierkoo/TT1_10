class AppError extends Error {
  constructor(message, statusCode, originalError) {
    super(message);
    this.statusCode = statusCode || 500;
    this.timestamp = new Date().toISOString();
    if (originalError) {
      this.stack = originalError.stack;
    }
  }
}

module.exports = AppError;
