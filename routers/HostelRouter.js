import express from "express";
import { createHostel, getHostals,deleteHostel, updateHostel } from "../controllers/HostelController.js";

const hostelRouter = express.Router();

hostelRouter.post("/", createHostel);
hostelRouter.get("/", getHostals);
hostelRouter.delete("/:id", deleteHostel);
hostelRouter.put("/:id", updateHostel);
export default hostelRouter;
