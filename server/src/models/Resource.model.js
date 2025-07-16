import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  phone: { type: String },
  email: { type: String },
  website: { type: String },
  tags: [{ type: String }],
});

export default mongoose.model("Resource", resourceSchema);
