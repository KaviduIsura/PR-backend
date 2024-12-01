import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "student",
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    dafalut: "None",
  },
});
const User = mongoose.model("users", userSchema);
export default User;
