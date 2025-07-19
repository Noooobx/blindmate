import { PostModel } from "../../models/Post.model.js";

const addPost = async ({ content, tags = [], isAnonymous = false, createdBy }) => {
  const post = new PostModel({
    content: content.trim(),
    tags,
    isAnonymous,
    createdBy,
  });

  return await post.save();
};

export const PostRepository = {
  addPost,
};
