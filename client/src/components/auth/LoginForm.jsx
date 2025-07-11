import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Call login API here
  };

  const handleGoogleLogin = () => {
    console.log("Google Sign-In");
    // Trigger your Google Auth logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        Login
      </button>

      {/* Forgot password moved below */}
      <div className="text-center text-sm">
        <Link to="/forgot-password" className="text-blue-600 hover:underline">
          Forgot your password? Reset it here
        </Link>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-2 my-4">
        <hr className="flex-grow border-blue-100" />
        <span className="text-gray-400 text-sm">or</span>
        <hr className="flex-grow border-blue-100" />
      </div>

      {/* Google Sign-In Button */}
      <button
        type="button"
        onClick={handleGoogleLogin}
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
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
