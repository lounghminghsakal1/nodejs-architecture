export const successResponse = (res, message = "Request successful", data, statusCode = 200) => {
  return res.status(statusCode).json({
    status: "success",
    data: data,
    message: message,
    error: null
  });
};

export const failureResponse = (res, message = "Request failed", error, statusCode = 500) => {
  return res.status(statusCode).json({
    status: "failure",
    data: null,
    message: message,
    error: error
  });
};
