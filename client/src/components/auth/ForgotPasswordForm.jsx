import React, { useState } from "react";
import AuthButton from "./AuthButton";
import InputFeild from "./InputFeild";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Reset email sent to:", email);
    // Trigger forgot password API
  };

  return (
    <form onSubmit={handleReset} className="space-y-4">
      <InputFeild
        value={email}
        placeholder="Please enter your Email."
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <AuthButton buttonText="Verify Email" />
    </form>
  );
};

export default ForgotPasswordForm;
