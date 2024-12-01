import User from "../models/User.js";
import bcrypt from "bcrypt";

export async function createUser(req, res) {
  try {
    const newUserData = req.body;
    newUserData.password = bcrypt.hashSync(newUserData.password, 10);
    const user = new User(newUserData);
    await user.save();
    res.json({
      message: "User Created",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export function getUsers(req, res) {
  User.find()
    .then((users) => {
      res.json({
        list: users,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error",
      });
    });
}
