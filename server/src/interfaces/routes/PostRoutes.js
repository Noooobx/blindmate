import express from "express";
import { createPost } from "../controllers/PostController.js";
import { isAuthenticated } from "../../utils/authMiddleware.js";

const postRouter = express.Router();

// POST /api/posts → Create a new post
postRouter.post("/create", createPost);

export default postRouter;
