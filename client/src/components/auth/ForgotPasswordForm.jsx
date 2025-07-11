import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Reset email sent to:", email);
    // Trigger forgot password API
  };

  return (
    <form onSubmit={handleReset} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded px-4 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
