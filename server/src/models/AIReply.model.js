import mongoose from "mongoose";

const aiReplySchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  content: { type: String, required: true },
  generatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("AIReply", aiReplySchema);
