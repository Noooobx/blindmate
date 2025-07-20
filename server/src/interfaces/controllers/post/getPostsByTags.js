// Controller: Get posts filtered by tags
// Method: GET /api/posts/filter?tags=tag1,tag2
// Returns: Array of posts matching tags

import { PostRepository } from "../../../infrastructure/database/PostRepository.js";

export const getPostsByTags = async (req, res) => {
  try {
    const { tags } = req.query;

    if (!tags) {
      return res.status(400).json({ message: "Tags are required" });
    }

    const tagList = tags.split(",").map((tag) => tag.trim());
    const posts = await PostRepository.findPostsByTags(tagList);

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts by tags:", error);
    res.status(500).json({ message: "Failed to fetch posts by tags" });
  }
};
