// src/models/Post.model.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    tags: [String],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isAnonymous: {
      type: Boolean,
      default: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
    collection: "posts",
  }
);

export const PostModel = mongoose.model("Post", postSchema);
