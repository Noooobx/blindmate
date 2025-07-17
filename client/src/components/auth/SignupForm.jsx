import React, { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import GoogleButton from "./GoogleButton";
import AuthButton from "./AuthButton";
import InteractionStyleSelect from "./InteractionStyleSelect";
import InputFeild from "./InputFeild";
import { handleGoogleAuth } from "../../services/authService";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const SignupForm = () => {
  const [name, setName] = useState("");
  const [interactionStyle, setInteractionStyle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({
      name,
      interactionStyle,
      email,
      password,
    });
  };

  

  return (
    <form onSubmit={handleSignup} className="space-y-6">
      {/* Name or Nickname */}
      <div>
        <InputFeild
          type="text"
          placeholder="Your name or nickname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Preferred Interaction Style */}
      <InteractionStyleSelect
        value={interactionStyle}
        onChange={(e) => setInteractionStyle(e.target.value)}
      />

      <InputFeild
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputFeild
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Submit Button */}
      <AuthButton buttonText="Sign Up" />

      {/* Divider */}
      <Divider />

      {/* Google Sign-Up Button */}
      <GoogleButton handleGoogleLogin={handleGoogleAuth} />

      {/* Redirect to login */}
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
