import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Call signup API here
  };

  const handleGoogleSignup = () => {
    console.log("Google Sign-Up");
    // Trigger your Google Signup logic here
  };

  return (
    <form onSubmit={handleSignup} className="space-y-6">
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border border-blue-100 bg-blue-50 focus:ring-2 focus:ring-blue-200 focus:outline-none px-4 py-3 text-gray-700 placeholder-gray-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border border-blue-100 bg-blue-50 focus:ring-2 focus:ring-blue-200 focus:outline-none px-4 py-3 text-gray-700 placeholder-gray-400 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-3xl font-medium hover:bg-blue-700 transition"
      >
        Sign Up
      </button>

      {/* Divider */}
      <div className="flex items-center gap-2 my-4">
        <hr className="flex-grow border-blue-100" />
        <span className="text-gray-400 text-sm">or</span>
        <hr className="flex-grow border-blue-100" />
      </div>

      {/* Google Sign-Up Button */}
      <button
        type="button"
        onClick={handleGoogleSignup}
        className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-300 rounded-3xl py-3 hover:bg-gray-50 transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span>Continue with Google</span>
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
