import Hostel from "../models/Hostel.js";

export async function createHostel(req, res) {
  try {
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
