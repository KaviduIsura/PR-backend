import User from "../models/User.js";
import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

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

      if (isPasswordCorrect) {
        const token = jwt.sign(
          {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            phoneNumber: user.phoneNumber,
            address: user.address,
          },
        process.env.SECRETE
        );
        
        res.json({
          message: "User Loged in",
          token: token,
        });
      } else {
        res.json({
          message: "User not Logged in ,Invalid Password ",
        });
      }
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

export function isAdmin(req){
  if(req.user == null){
    return false
  }
  if(req.user.role != "admin"){
    return false
  }
  return true
}

export function isStudent(req){
  if(req.user == null ){
    return false
  }
  if(req.user.role != "student"){
    return false
  }
  return true
}

export function isWarden(req){
  if(req.user == null){
    return false
  }
  if(req.user.role){
    return false
  }
  return true
}
//kaviduisura@example.com : 1234 -admin
//jane.doe@example.com : securepassword456 : user
