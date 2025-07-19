import React from "react";

const PostTimestamp = ({ post }) => {
  const { author, createdAt } = post;
  const formattedDate = new Date(createdAt).toLocaleString("en-IN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold text-gray-800">{author}</h3>
      <span className="text-sm text-gray-500">{formattedDate}</span>
    </div>
  );
};

export default PostTimestamp;
