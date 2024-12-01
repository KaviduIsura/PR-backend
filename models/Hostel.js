import mongoose from "mongoose";

const hostelSchema = mongoose.Schema({
  hostelId: {
    type: String,
    required: true,
    unique: true,
  },
  hostelName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  wardenId: {
    type: String,
    required: true,
  },
});
const Hostel = mongoose.model("hostels", hostelSchema);
export default Hostel;
