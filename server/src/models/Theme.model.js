import mongoose from "mongoose";

const themeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mood: { type: String, enum: ["sad", "angry", "calm"], required: true },
  selectedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Theme", themeSchema);
