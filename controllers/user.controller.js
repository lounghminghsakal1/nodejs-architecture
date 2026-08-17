import userService from "../services/user.service.js";
import { successResponse } from "../utils/responses.js";

const createUser = async (req, res, next) => {
  const createdUser = await userService.createUser(req.body);
  return successResponse(res, "user created successfully", createdUser, 201);
}

const getAllUsers = async (req, res, ext) => {
  const allusers = await userService.getAllUsers();
  return successResponse(res, "All users fetched successfully", allusers);
}

const getOneUser = async (req, res, next) => {
  const user = await userService.getOneUser(Number(req.params.id));
  return successResponse(res, "User fetched successfully", user);
}

const updateUser = async (req, res) => {
  const updatedUser = await userService.updateUser(Number(req.params.id), req.body);
  return successResponse(res, "User updated successfully", updatedUser);
}

const deleteUser = async (req, res) => {
  const deletedUser = await userService.deleteUser(Number(req.params.id));
  return successResponse(res, "User deleted successfully", deletedUser);
}



export default {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser
};