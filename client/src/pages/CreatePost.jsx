import React, { useState } from "react";
import CreateNewPost from "../components/posts/PostCreateNew";
import { Plus } from "lucide-react";
import AuthButton from "../components/auth/AuthButton";
import PostCreateButton from "../components/posts/PostCreateButton";

const CreatePost = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      {!showForm ? (
        <div className="text-center flex flex-col">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
            Want to share something?
          </h1>
          <PostCreateButton  setShowForm={setShowForm} />
        </div>
      ) : (
        <div className="w-full max-w-2xl p-4">
          <CreateNewPost />
        </div>
      )}
    </div>
  );
};

export default CreatePost;
