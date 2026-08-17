import { prisma } from "../configs/db.js";
import AppError from "./AppError.js";

export const dataWithIdPresentInDBOrNot = async (id, entity) => {
  const dataFromDB = await prisma[entity].findUnique({
    where: {id: id}
  });
  if(!dataFromDB) throw new AppError("Resource not found", 404, `${entity} with ${id} not found`);
  return true;
}