import express from "express";
import dotenv from "dotenv";
import studentRouter from "./routes/student.router.js";
import globalErrorMiddleware from "./middlewares/globalError.middleware.js";
// import pool from "./configs/db.js";
import { prisma, connectDB } from "./configs/db.js";
import userRouter from "./routes/user.routes.js";
import employeeRouter from "./routes/employee.routes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

await connectDB();

app.use(express.json());


app.use("/api/users", userRouter);

app.use("/api/students", studentRouter);

app.use("/api/employee", employeeRouter);


app.use(globalErrorMiddleware);

app.listen(PORT, () => {
  console.log("Server running on port "+PORT);
});

