import { prisma } from "../configs/db.js";
import AppError from "../utils/AppError.js";
import { dataWithIdPresentInDBOrNot } from "../utils/generalHelperFunctions.js";

const createUser = async (createUserRequestBody) => {
  const newUser = await prisma.user.create({ data: createUserRequestBody });
  return newUser;
};

const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
}

const getOneUser = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  });
  if (!user) throw new AppError("Resource not found", 404, "User not found with " + id);
  return user;
}

const updateUser = async (id, updateUserRequestBody) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  });

  if (!user) throw new AppError("Resource not found", 404, "User not found with " + id);
  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: updateUserRequestBody
  },

  );
  return updatedUser;
}

const deleteUser = async (id) => {
  await dataWithIdPresentInDBOrNot(id, "user");
  const deletedUser = await prisma.user.delete({ where: {id: id } });
  return deletedUser;
}



export default {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser
};

