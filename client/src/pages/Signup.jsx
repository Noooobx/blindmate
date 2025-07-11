import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import SignupForm from "../components/auth/SignupForm";

const Signup = () => (
  <AuthLayout
    title="Join blindMate"
    subtitle="Your safe space to begin sharing freely"
  >
    <SignupForm />
  </AuthLayout>
);

export default Signup;
