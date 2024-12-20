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
  try{
    if(!isAdmin){
      res.json({
        message :"Please login as administrator to add Hostel!"
      })
      return
    }
    const hostelId = req.params.id
    const hostel = await Hostel.findById(hostelId)
    if(!hostel){
      res.status(404).json({
        message :"Hostel Not found"
      })
    }
    await Hostel.deleteOne({_id:hostelId})

    res.json({
      message:"Hostel delete Successfully!"
    })
  }catch(error){
    res.status(500).json({
      message : error.message
    })
  }
}
