import React, { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import GoogleButton from "./GoogleButton";
import AuthButton from "./AuthButton";
import InputFeild from "./InputFeild";

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
      <InputFeild
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <InputFeild
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <AuthButton buttonText="Login" />

      {/* Forgot password moved below */}
      <div className="text-center text-sm">
        <Link to="/forgot-password" className="text-blue-600 hover:underline">
          Forgot your password? Reset it here
        </Link>
      </div>

      {/* Divider */}
      <Divider />
      {/* Google Sign-In Button */}
      <GoogleButton handleGoogleLogin={handleGoogleLogin} />

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
