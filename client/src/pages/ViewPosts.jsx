import React from "react";
import PostCard from "../components/posts/PostCard";
import { dummyPosts } from "../constants/dummyPosts";

const ViewPosts = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">💙 Blindmate Posts</h1>
        {dummyPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ViewPosts;
