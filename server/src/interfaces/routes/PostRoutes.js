import express from "express";
import { isAuthenticated } from "../../utils/authMiddleware.js";
import { createPost } from "../controllers/post/createPost.js";
import { deletePost } from "../controllers/post/deletePost.js";
import { getAllPosts } from "../controllers/post/getAllPosts.js";
import { getPostsByTags } from "../controllers/post/getPostsByTags.js";
import { getCurrentUserPosts } from "../controllers/post/getCurrentUserPosts.js";
import { getPostById } from "../controllers/post/getPostById.js";

const postRouter = express.Router();

/**
 * @route   POST /api/posts/create
 * @desc    Create a new post
 */
postRouter.post("/create", createPost);

/**
 * @route   DELETE /api/posts/delete/:postId
 * @desc    Delete a post by ID
 * @access  Protected (requires authentication)
 */
postRouter.delete("/delete/:postId", isAuthenticated, deletePost);

/**
 * @route   GET /api/posts/all
 * @desc    Get all posts (sorted by latest first)
 * @access  Public
 */
postRouter.get("/all", getAllPosts);

/**
 * @route   GET /api/posts/filter?tags=tag1,tag2
 * @desc    Get posts filtered by one or more tags
 * @access  Public
 */
postRouter.get("/filter", getPostsByTags);

/**
 * @route   GET /api/posts/user/me
 * @desc    Get all posts created by the currently logged-in user
 * @access  Protected (requires authentication)
 */
postRouter.get("/user/me", isAuthenticated, getCurrentUserPosts);

/**
 * @route   GET /api/posts/:id
 * @desc    Get a single post by its ID
 * @access  Public
 * @note    This should be the last route to avoid conflicts with other GET routes
 */
postRouter.get("/:id", getPostById);

export default postRouter;
