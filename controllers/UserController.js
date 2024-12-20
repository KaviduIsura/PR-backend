import User from "../models/User.js";
import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

export async function createUser(req, res) {
  try {
    const newUserData = req.body;

    if (newUserData.role == "admin") {
      if (req.user == null) {
        res.json({
          message: "Please login as administrator to create admin account",
        });
        return;
      }
      if (req.user.role != "admin") {
        res.json({
          message: "Please login as administrator to create admin account",
        });
        return;
      }
    }
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
export function login(req, res) {
  User.find({ email: req.body.email }).then((users) => {
    if (users.length == 0) {
      res.json({
        message: "User Not found",
      });
    } else {
      const user = users[0];
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );
    }
    if (isPasswordCorrect) {
      const token = jwt.sign({
        email: User.email,
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
      });
    }
  });
}

export async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.json({
      list: users,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
