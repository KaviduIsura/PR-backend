import User from "../models/User.js";

export function createUser(req, res) {
  const newUserData = req.body;
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
