import express from "express";
import { createPost, deletePost } from "../controllers/PostController.js";
import { isAuthenticated } from "../../utils/authMiddleware.js";

const postRouter = express.Router();

// POST /api/posts → Create a new post
postRouter.post("/create", createPost);
postRouter.delete("/delete/:postId",deletePost);

export default postRouter;
