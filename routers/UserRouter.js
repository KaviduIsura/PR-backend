import express from "express";
import { createUser, getUsers } from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);

export default userRouter;
