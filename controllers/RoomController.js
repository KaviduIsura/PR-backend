import Room from "../models/Room.js";

export async function createRoom(req, res) {
  try {
    const newRoomData = req.body;
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
