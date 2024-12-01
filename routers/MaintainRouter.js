import express from "express";
import {
  createMaintainReq,
  getMaintainces,
} from "../controllers/MaintainceController.js";

const maintainRouter = express.Router();

maintainRouter.post("/", createMaintainReq);
maintainRouter.get("/", getMaintainces);

export default maintainRouter;
