import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

const Login = () => (
  <AuthLayout
    title="Hey, welcome back 🌿"
  >
    <LoginForm />
  </AuthLayout>
);

export default Login;
