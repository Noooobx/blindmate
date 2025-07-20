import { PostModel } from "../../models/Post.model.js";
import mongoose from "mongoose";

const addPost = async ({
  content,
  tags = [],
  isAnonymous = false,
  createdBy,
}) => {
  const post = new PostModel({
    content: content.trim(),
    tags,
    isAnonymous,
    createdBy,
  });

  return await post.save();
};

export const deletePost = async ({ postId }) => {
  const post = await PostModel.findById(postId);

  if (!post) {
    const error = new Error("Post not found");
    error.statusCode = 404;
    throw error;
  }


  if (post.isAnonymous) {

    const error = new Error("Cannot delete anonymous post");
    error.statusCode = 400;
    throw error;
  }

//   if (post.createdBy.toString() !== userId.toString()) {
//     const error = new Error("Unauthorized");
//     error.statusCode = 403;
//     throw error;
//   }
  await PostModel.findByIdAndDelete(postId);
};

export const PostRepository = {
  addPost,
  deletePost,
};
