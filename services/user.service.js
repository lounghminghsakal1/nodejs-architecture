import prisma from "../configs/db.js";

const createUser = async (createUserRequestBody) => {
  const newUser = await prisma.user.create({data: createUserRequestBody});
  return newUser;
};

const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany();
  console.log(":wkbfkubdh3kbky",allUsers);
  return allUsers;
}

export default {
  createUser,
  getAllUsers
};

