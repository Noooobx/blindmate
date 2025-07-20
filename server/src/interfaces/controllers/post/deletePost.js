// Controller: Delete a post by ID
// Method: DELETE /api/posts/delete/:postId
// Requires: postId as URL param
// Returns: Success message or error

import { PostRepository } from "../../../infrastructure/database/PostRepository.js";

export const deletePost = async (req, res) => {
  const { postId } = req.params;

  try {
    await PostRepository.deletePost({ postId });
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
