import mongoose from "mongoose";

const maintainReqSchema = mongoose.Schema({
  request_id: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  request_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  completion_date: {
    type: Date,
    default: null,
  },
});

const MaintainReq = mongoose.model("maintainReqs", maintainReqSchema);
export default MaintainReq;
