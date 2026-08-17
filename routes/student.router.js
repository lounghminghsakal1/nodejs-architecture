import express from "express";
import StudentController from "../controllers/student.controller.js";
import validateRequestSchema from "../middlewares/validateRequests.middleware.js";
import { createStudentSchema, updateStudentSchema } from "../request-schemas/studentRequest.schema.js";

const studentRouter = express.Router();

studentRouter.get("/", StudentController.getAllStudents);

studentRouter.get("/:id", StudentController.getOneStudent);

studentRouter.post("/", validateRequestSchema(createStudentSchema), StudentController.createStudent);

studentRouter.patch("/:id", validateRequestSchema(updateStudentSchema) ,StudentController.updateStudent);

studentRouter.delete("/:id", StudentController.deleteStudent);

export default studentRouter;
