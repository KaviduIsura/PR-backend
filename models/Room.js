import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    unique: true,
  },
  hostelId: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: Number,
    require: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
  price: {
    type: Number,
    required: true,
  },
  lastPrice: {
    type: Number,
    required: true,
  },
});
const Room = mongoose.model("rooms", roomSchema);
export default Room;
