import express from "express";
import validateRequestSchema from "../middlewares/validateRequests.middleware.js";
import { createUserRequestSchema } from "../request-schemas/userRequest.schema.js";
import AppError from "../utils/AppError.js";
import userController from "../controllers/user.controller.js";

const userRouter = express.Router();


const formattedZodErrors = (errors) => {
  return errors.reduce((finalErrorObject, error) => {
    const errorKey = error.path;
    finalErrorObject[errorKey] = error.message;
    return finalErrorObject;
  },{});
};


const summaValidateAgain = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if(!result.success) {
      console.error(result.error.issues);
      const errorDetails = formattedZodErrors(result.error.issues);
      throw new AppError("Invalid request", 422, errorDetails);
    }
    req.body = result.data;
    next();
  }
}


userRouter.post("/", summaValidateAgain(createUserRequestSchema), userController.createUser);

userRouter.get("/", userController.getAllUsers);

export default userRouter;