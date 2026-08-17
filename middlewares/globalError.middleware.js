const globalErrorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? "Something went wrong";
  const errorMessage = err.isOperational ? err.message : "Something went wrong";
  return res.status(statusCode).json({
    status: "failure",
    message: message,
    data: null,
    error: err.errorDetail ?? errorMessage
  });
};

export default globalErrorMiddleware;
