import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORSS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Parse URL-encoded bodies
app.use(express.static("public"));
app.use(cookieParser());

// routes
import userRouter from './routes/user.routes.js'

// routes decalaration
app.use("/api/v1/users",userRouter)

export { app };
