import Hostel from "../models/Hostel.js";
import { isAdmin } from "./UserController.js";

export async function createHostel(req, res) {
  try {
    if(!isAdmin(req)){
      res.json({
        message :"Please login as administrator to add Hostel!"
      })
      return
    }
    const newHostelData = req.body;
    const hostel = new Hostel(newHostelData);
    await hostel.save();
    res.json({
      message: "hostel is created",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export async function getHostals(req, res) {
  try {
    const hostel = await Hostel.find();
    res.json({
      list: hostel,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export async function deleteHostel(req,res){
  
}
