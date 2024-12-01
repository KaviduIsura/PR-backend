import User from "../models/User.js";
import bcrypt from "bcrypt";

export function createUser(req, res) {
  const newUserData = req.body;
  newUserData.password = bcrypt.hashSync(newUserData.password, 10);
  const user = new User(newUserData);

  user
    .save()
    .then(() => {
      res.json({
        message: "User Created",
      });
    })
    .catch(() => {
      res.json({
        message: "User not created",
      });
    });
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
