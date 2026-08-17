import StudentService from "../services/student.service.js";
import { successResponse } from "../utils/responses.js";

const getAllStudents = (req, res) => {
  const allStudents = StudentService.getAllStudents();
  return successResponse(res, "All students list fetched successfully", allStudents);
};

const getOneStudent = (req, res) => {
  const student = StudentService.getOneStudent(Number(req.params.id));
  return successResponse(res, "Student data fetched successfully", student);
};

const createStudent = (req, res) => {
  const createdStudent = StudentService.createStudent(req.body);
  return successResponse(res, "Student created successfully", createdStudent, 201);
};

const updateStudent = (req, res) => {
  const updatedStudent = StudentService.updateStudent(Number(req.params.id), req.body);
  return successResponse(res, "Student updated successfully", updatedStudent);
}

const deleteStudent = (req, res) => {
  const deletedStudent = StudentService.deleteStudent(Number(req.params.id));
  console.log(deleteStudent);
  return successResponse(res, "Student deleted successfully", deletedStudent);
}

const StudentController = {
  getAllStudents,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteStudent
};

export default StudentController;
