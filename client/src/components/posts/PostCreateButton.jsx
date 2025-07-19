import React from "react";
import { Plus } from "lucide-react";

const PostCreateButton = ({ setShowForm }) => {
  return (
    <button
      onClick={() => setShowForm(true)}
      className="flex items-center justify-center gap-3 bg-violet-600 hover:bg-violet-700 text-white text-2xl font-semibold px-8 py-5 rounded-full shadow-xl transition"
    >
      <Plus className="w-7 h-7" />
      Create a Post
    </button>
  );
};

export default PostCreateButton;
