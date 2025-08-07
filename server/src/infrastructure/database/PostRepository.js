import { PostModel } from "../../models/Post.model.js";

const addPost = async ({
  title,
  content,
  tags = [],
  isAnonymous = false,
  createdBy,
}) => {
  const post = new PostModel({
    title,
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


export const findAllPosts = async () => {
  return await PostModel.find().sort({ createdAt: -1 });
};

export const findPostById = async (id) => {
  return await PostModel.findById(id);
};

export const findPostsByUser = async (userId) => {
  return await PostModel.find({ createdBy: userId }).sort({ createdAt: -1 });
};

export const findPostsByTags = async (tagList) => {
  return await PostModel.find({ tags: { $in: tagList } }).sort({ createdAt: -1 });
};


export const PostRepository = {
  addPost,
  deletePost,
  findAllPosts,
  findPostById,
  findPostsByUser,
  findPostsByTags
};
