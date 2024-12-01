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

export async function getBookings(req, res) {
  try {
    const bookings = await Booking.find();
    res.json({
      list: bookings,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
