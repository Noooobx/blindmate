// Controller: Create a new post
// Method: POST /api/posts/create
// Expects: { content: string, tags?: array, isAnonymous?: boolean }
// Returns: Created post with status 201 or error with status 400/500

import { PostRepository } from "../../../infrastructure/database/PostRepository.js";

export const createPost = async (req, res) => {
  try {
    const {
      title = "",
      content = "",
      tags = [],
      isAnonymous = false,
      createdBy = null,
    } = req.body;

    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }

    // If using authentication, `createdBy` can come from req.user.id
    const newPost = await PostRepository.addPost({
      title,
      content,
      tags,
      isAnonymous,
      createdBy,
    });

    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error creating post:", {
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({ error: "Failed to create post" });
  }
};
