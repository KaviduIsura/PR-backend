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
/*
- `user_id`: Unique identifier (auto-generated)
- `name`: User's full name
- `email`: User's email address (unique)
- `password`: Hashed password
- `role`: Enum (`admin`, `warden`, `student`)
- `phone_number`: Contact number */
