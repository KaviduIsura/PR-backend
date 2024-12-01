import express from "express";
import { createHostel, getHostals } from "../controllers/HostelController.js";

const hostelRouter = express.Router();

hostelRouter.post("/", createHostel);
hostelRouter.get("/", getHostals);

export default hostelRouter;
