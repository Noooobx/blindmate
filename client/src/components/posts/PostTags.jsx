import React from "react";

const PostTags = ({ tags = [] }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-pink-100 text-pink-700 text-xs font-medium px-2 py-1 rounded-full"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default PostTags;
