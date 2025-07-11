import React, { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "../ui/Divider";
import GoogleButton from "../ui/GoogleButton";
import AuthButton from "../ui/AuthButton";
import InteractionStyleSelect from "../ui/InteractionStyleSelect";
import InputFeild from "../ui/InputFeild";

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
    // Call signup API here
  };

  const handleGoogleSignup = () => {
    console.log("Google Sign-Up");
    // Trigger your Google Signup logic here
  };

  return (
    <form onSubmit={handleSignup} className="space-y-6">
      {/* Name or Nickname */}
      <div>
        <InputFeild
          type="text"
          placeholder="Your name or nickname"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
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
      {/* Submit Button */}
      <AuthButton buttonText="Sign Up" />

      {/* Divider */}
      <Divider />

      {/* Google Sign-Up Button */}
      <GoogleButton handleGoogleLogin={handleGoogleSignup} />

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
