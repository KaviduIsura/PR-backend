import express from "express";
import { createHostel, getHostals,deleteHostel } from "../controllers/HostelController.js";

const hostelRouter = express.Router();

hostelRouter.post("/", createHostel);
hostelRouter.get("/", getHostals);
hostelRouter.delete("/:id", deleteHostel);

export default hostelRouter;
