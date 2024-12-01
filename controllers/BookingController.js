import Booking from "../models/Booking.js";

export async function createBooking(req, res) {
  try {
    const newBookingData = req.body;
    const booking = new Booking(newBookingData);
    await booking.save();
    res.json({
      message: "Booking Create Successfully!",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
