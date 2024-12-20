import Hostel from "../models/Hostel.js";
import Room from "../models/Room.js";
import { isAdmin } from "./UserController.js";

export async function createRoom(req, res) {
  try {
   
    if (!isAdmin(req)) {
      res.status(403).json({
        message: "Please login as an administrator to add a Room!",
      });
      return;
    }
    const newRoomData = req.body;
    const hostel = await Hostel.findOne({ hostelId: newRoomData.hostelId})
    if(!hostel){
      res.json({
        message:"Hostel with id "+newRoomData.hostelId+"not found"
      })
      return
    }
    const room = new Room(newRoomData);
    await room.save();
    res.json({
      message: "Room is created successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}


export async function getRooms(req, res) {
  try {
    const rooms = await Room.find();
    res.json({
      list: rooms,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
