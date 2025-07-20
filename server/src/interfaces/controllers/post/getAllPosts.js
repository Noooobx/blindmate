// Controller: Get all posts
// Method: GET /api/posts/all
// Returns: List of all posts sorted by creation date

import { PostRepository } from "../../../infrastructure/database/PostRepository.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostRepository.findAllPosts();

    if (!posts || posts.length === 0) {
      return res.status(200).json({ message: "No posts found", posts: [] });
    }

    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      data: posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
