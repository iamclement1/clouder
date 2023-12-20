import Register from "@/components/auth/Register";
import AuthLayout from "@/layouts/AuthLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register",
};
const register = () => {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
};

export default register;
