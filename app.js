import express from "express";
import dotenv from "dotenv";
import studentRouter from "./routes/student.router.js";
import globalErrorMiddleware from "./middlewares/globalError.middleware.js";
import pool from "./configs/db.js";
import prisma from "./configs/db.js";
import userRouter from "./routes/user.routes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

async function startServer() {
  try {
    await prisma.$connect();
    console.log("DB CONNECTED");
    const users = await prisma.user.findMany();
  } catch(err) {
    console.error(err);
  }
};

startServer();

app.use("/api/users", userRouter);

app.use("/api/students", studentRouter);

app.get("/db-test", async (req, res) => {
    const result = await pool.query("SELECT * FROM student");
    res.send("Success"); 
})



app.use(globalErrorMiddleware);

app.listen(PORT, () => {
  console.log("Server running on port "+PORT);
});

