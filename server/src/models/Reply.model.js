import mongoose from "mongoose";

const replySchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    aliasUsed: { type: String, required: true },
    content: { type: String, required: true },
    reactions: {
      helpful: { type: Number, default: 0 },
      report: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reply", replySchema);
