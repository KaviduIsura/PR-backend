import express from "express";
import { createMaintainReq } from "../controllers/MaintainceController.js";

const maintainRouter = express.Router();

maintainRouter.post("/", createMaintainReq);

export default maintainRouter;
