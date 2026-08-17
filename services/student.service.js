import AppError from "../utils/AppError.js";

let ALL_STUDENTS = [
  {id: 1, name: "Sakal", age:22},
  {id: 2, name: "Loungh", age:23},
  {id: 3, name: "Mingh", age:21},
  {id: 4, name: "Leo", age:20},
];

const getAllStudents = () => {
  return ALL_STUDENTS;
}

const getOneStudent = (id) => {
  const student = ALL_STUDENTS.find(student => student.id === id);
  if(!student) throw new AppError("Student with id "+id+" not found", 404);
  return student;
};

const createStudent = (createStudentRequestBody) => {
  ALL_STUDENTS.push(createStudentRequestBody);
  return createStudentRequestBody;
}

const updateStudent = (id, updateStudentRequestBody) => {
  const studentIndex = ALL_STUDENTS.findIndex(student => student.id === id);
  if(studentIndex === -1) throw new AppError("Student with id "+id+" not found");
  ALL_STUDENTS[studentIndex] = updateStudentRequestBody;
  return updateStudentRequestBody;
};

const deleteStudent = (id) => {
  const student = ALL_STUDENTS.find(student => student.id === id);
  if(!student) throw new AppError("Student with id "+id+" not found");
  ALL_STUDENTS = ALL_STUDENTS.filter(student => student.id !== id);
  return student;
}

const StudentService = {
  getAllStudents,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteStudent
};

export default StudentService;