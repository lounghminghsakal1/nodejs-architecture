class AppError extends Error {
  constructor(message, statusCode = 500, errorDetail = null) {
    super(message);
    this.statusCode = statusCode ?? 500;
    this.isOperational = true;
    this.errorDetail = errorDetail;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;