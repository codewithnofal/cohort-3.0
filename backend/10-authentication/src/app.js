import express from "express";
import userRouter from "./routes/users.route.js";

const app = express();

app.use(express.json());

app.use("/api/auth", userRouter);

export default app;
