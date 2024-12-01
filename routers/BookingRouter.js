import express from "express";
import {
  createBooking,
  getBookings,
} from "../controllers/BookingController.js";

const bookingRouter = express.Router();

bookingRouter.post("/", createBooking);
bookingRouter.get("/", getBookings);

export default bookingRouter;
