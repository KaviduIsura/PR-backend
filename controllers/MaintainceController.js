import MaintainReq from "../models/MaintainceReq.js";

export async function createMaintainReq(req, res) {
  try {
    const newMaintainReqData = req.body;
    const maintainReq = new MaintainReq(newMaintainReqData);
    await maintainReq.save();
    res.json({
      message: "Maintain request create successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
export async function getMaintainces(req, res) {
  try {
    const maintanceReqs = await MaintainReq.find();
    res.json({
      list: maintanceReqs,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
