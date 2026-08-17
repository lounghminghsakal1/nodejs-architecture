import express from "express";
import validateRequestSchema from "../middlewares/validateRequests.middleware.js";
import { createUserRequestSchema, updateUserRequestSchema } from "../request-schemas/userRequest.schema.js";
import AppError from "../utils/AppError.js";
import userController from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", userController.getAllUsers);

userRouter.post("/", validateRequestSchema(createUserRequestSchema), userController.createUser);

userRouter.get("/:id", userController.getOneUser);

userRouter.patch("/:id",validateRequestSchema(updateUserRequestSchema), userController.updateUser);

userRouter.delete("/:id", userController.deleteUser);

export default userRouter;