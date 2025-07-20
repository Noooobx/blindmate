import { PostRepository } from "../../infrastructure/database/PostRepository.js";

export const createPost = async (req, res) => {
  try {
    const {
      content = "",
      tags = [],
      isAnonymous = false,
      createdBy = null,
    } = req.body;

    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }

    // You can use req.user.id if using auth middleware
    //const createdBy = req.user?.id || null;

    const newPost = await PostRepository.addPost({
      content,
      tags,
      isAnonymous,
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

export const deletePost = async (req, res) => {
  const { postId } = req.params;
  //const userId = req.user._id; use it when testing on frontend

  try {
    await PostRepository.deletePost({ postId });
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
