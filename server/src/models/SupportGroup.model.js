import mongoose from "mongoose";

const supportGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  tags: [{ type: String }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

export default mongoose.model("SupportGroup", supportGroupSchema);

