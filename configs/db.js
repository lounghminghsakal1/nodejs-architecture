// import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
// const { Pool } = pg;

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD
// });

// export default pool;

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import AppError from "../utils/AppError.js";


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});


export const prisma = new PrismaClient({
  adapter
});

export async function connectDB() {
  try {
    const connection = await prisma.$connect();
  } catch(err) {
    console.log(err);
    throw new AppError(err.message, 500);
  }
}


