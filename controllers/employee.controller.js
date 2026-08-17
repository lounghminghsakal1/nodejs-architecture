import { successResponse } from "../utils/responses.js";
import EmployeeService from "../services/employee.service.js";

const getAllEmployees = async (req, res, next) => {
  const allEmps = await EmployeeService.getAllEmployees();
  return successResponse(res, "All emps fetched successfully", allEmps);
};

const createEmployee = async (req, res, next) => {
  const createdEmployee = await EmployeeService.createEmployee(req.body);
  return successResponse(res, "Employee created successfully", createdEmployee, 201);
}


const EmployeeController = {
  getAllEmployees,
  createEmployee
};

export default EmployeeController;