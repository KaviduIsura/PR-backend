import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/UserRouter.js";
import hostelRouter from "./routers/HostelRouter.js";
import roomRouter from "./routers/RoomRouter.js";
import bookingRouter from "./routers/BookingRouter.js";
import maintainRouter from "./routers/MaintainRouter.js";
import jwt, { decode } from 'jsonwebtoken'

dotenv.config();

const app = express();

app.use(bodyParser.json());

//database connetion
const mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl, {});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database connected");
});

// middleware to handle token
app.use((req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log(token);

  if (token != null) {
    jwt.verify(token, process.env.SECRETE, (error, decoded) => {
      if (!error) {
        req.user = decoded;
      }
    });
  }
  next();
});

app.use("/api/users", userRouter);
app.use("/api/hostels", hostelRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/maintainces", maintainRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
