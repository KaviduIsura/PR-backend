import express from "express";
import { createRoom, getRooms } from "../controllers/RoomController.js";

const roomRouter = express.Router();

roomRouter.post("/", createRoom);
roomRouter.get("/", getRooms);

export default roomRouter;
