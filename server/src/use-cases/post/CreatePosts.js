import { PostRepository } from "../../infrastructure/database/PostRepository.js";

export const createPostUseCase = async ({
  content,
  tags = [],
  isAnonymous = false,
  createdBy,
}) => {
  // Validate content
  if (!content || typeof content !== "string" || content.trim() === "") {
    throw new Error("Post content is required and must be a non-empty string");
  }

  // Validate tags
  if (!Array.isArray(tags)) {
    throw new Error("Tags must be an array");
  }

  // Validate createdBy (optional but useful in most real-world cases)
  if (!createdBy) {
    throw new Error("Author (createdBy) is required");
  }

  // Save post
  return await PostRepository.addPost({
    content: content.trim(),
    tags,
    isAnonymous,
    createdBy,
  });
};
