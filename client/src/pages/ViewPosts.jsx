import React from "react";
import PostCard from "../components/posts/PostCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/posts/all`);
      const posts = response.data.data;

      setPosts(posts);
    } catch (error) {
      console.error(
        "Error fetching posts:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          💙 Blindmate Posts
        </h1>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ViewPosts;
