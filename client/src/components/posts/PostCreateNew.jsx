import React, { useState } from "react";
import AuthButton from "../auth/AuthButton";
import InputFeild from "../auth/InputFeild";

const CreateNewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your post creation logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full mx-auto p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-md border border-violet-100"
    >
      <h2 className="text-3xl font-bold text-center text-violet-700 mb-4 tracking-tight">
        ✨ Share Your Thoughts
      </h2>

      <InputFeild
        type="text"
        placeholder="Your post title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write something meaningful..."
        className="w-full rounded-xl border border-violet-100 bg-violet-50/40 focus:ring-2 focus:ring-violet-300 focus:outline-none px-4 py-3 text-gray-800 placeholder-gray-400 transition"
        rows={6}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>

      <AuthButton buttonText=" Share" />
    </form>
  );
};

export default CreateNewPost;
