import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: function(){
        return !this.googleId;
      },
    },
    displayName: {
      type: String,
      required: true,
    },
    googleId: { 
      type: String,
      default: null,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

export const UserModel = mongoose.model("User", userSchema);
