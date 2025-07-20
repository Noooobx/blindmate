// Controller: Get single post by ID
// Method: GET /api/posts/:id
// Returns: The post object or 404 if not found

import { PostRepository } from "../../../infrastructure/database/PostRepository.js";

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostRepository.findPostById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ post });
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
