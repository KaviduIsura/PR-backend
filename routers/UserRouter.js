import express from "express";
import { createUser, getUsers, login } from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.post("/login",login)

export default userRouter;
