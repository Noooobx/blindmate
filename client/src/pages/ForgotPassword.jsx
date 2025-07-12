import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

const ForgotPassword = () => (
  <AuthLayout title="Forgot Password?" subtitle="We’ll help you reset it">
    <ForgotPasswordForm />
  </AuthLayout>
);

export default ForgotPassword;
   