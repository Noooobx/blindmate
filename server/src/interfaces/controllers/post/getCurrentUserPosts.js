// Controller: Get posts created by the current authenticated user
// Method: GET /api/posts/user/me
// Requires: req.user.id (via auth middleware)
// Returns: List of user's posts

import { PostRepository } from "../../../infrastructure/database/PostRepository.js";

export const getCurrentUserPosts = async (req, res) => {
  try {
    const userId = req.user.id;
    const posts = await PostRepository.findPostsByUser(userId);

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching user's posts:", error);
    res.status(500).json({ message: "Failed to fetch user's posts" });
  }
};


