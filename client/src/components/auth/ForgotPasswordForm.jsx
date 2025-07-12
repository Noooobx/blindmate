import React, { useState } from "react";
import EmailInput from "../ui/EmailInput";
import AuthButton from "../ui/AuthButton";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Reset email sent to:", email);
    // Trigger forgot password API
  };

  return (
    <form onSubmit={handleReset} className="space-y-4">
      <EmailInput
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <AuthButton buttonText="Verify Email" />
    </form>
  );
};

export default ForgotPasswordForm;
