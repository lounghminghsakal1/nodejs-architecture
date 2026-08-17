import express from "express";
import EmployeeController from "../controllers/employee.controller.js";
import validateRequestSchema from "../middlewares/validateRequests.middleware.js";
import { createEmployeeRequestSchema } from "../request-schemas/employeeRequests.schema.js";

const employeeRouter = express.Router();

employeeRouter.get("/", EmployeeController.getAllEmployees);


employeeRouter.post("/", validateRequestSchema(createEmployeeRequestSchema) ,EmployeeController.createEmployee);

export default employeeRouter;