import { z } from "zod";
import AppError from "../utils/AppError.js";

const validateRequestSchema = (schema) => {

  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = formatZodErrors(result.error.issues);
      throw new AppError("Invalid Request", 422, errors);
    }
    req.body = result.data;
    next();
  }

};

const formatZodErrors = (zodErrors) => {
  const formattedErrors = zodErrors.reduce((errorObject, issue) => {
    const errorKey = issue.path.join(".");
    errorObject[errorKey] = issue.message;
    return errorObject;
  }, {});
  return formattedErrors;
}

export default validateRequestSchema;