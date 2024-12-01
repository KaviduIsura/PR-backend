import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
  bookingData: {
    type: Date,
    required: true,
    default: Date.now,
  },
  paymentStatus: {
    type: String,
    required: true,
    default: "Pending",
  },
});

const Booking = mongoose.model("bookings", bookingSchema);
export default Booking;
