import userService from "../services/user.service.js";
import { successResponse } from "../utils/responses.js";

const createUser = async (req, res, next) => {
  const createdUser = await userService.createUser(req.body);
  return successResponse(res, "user created successfully", createdUser, 201);
}

const getAllUsers = async (req, res, ext) => {
  const allusers = await userService.getAllUsers();
  console.log("sjdbf,jbxjbaskhbx,jdsfkhs dc,vhbdh c", allusers);
  return successResponse(res, "All users fetched successfully", allusers);
}


export default {
  createUser,
  getAllUsers
};