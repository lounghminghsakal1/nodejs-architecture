import { includes } from "zod";
import { prisma } from "../configs/db.js";
import AppError from "../utils/AppError.js";

const getAllEmployees = () => {
  return prisma.employee.findMany({
    include: {
      department: true
    }
  });

  // prisma.employee.findMany({
  //   select: {
  //     id:true,
  //     name: true,
  //     department: true
  //   }
  // })
}

const createEmployee = async (createEmployeeRequestBody) => {
  const departmentId = createEmployeeRequestBody.departmentId;
  const department = await prisma.department.findUnique({
    where: {
      id: departmentId
    }
  });
  if(!department) throw new AppError("Invalid request", 422, "Invalid department id");
  const newEmployee = await prisma.employee.create({
    data: createEmployeeRequestBody
  });
  return newEmployee;
}

const EmployeeService = {
  getAllEmployees,
  createEmployee
};

export default EmployeeService;