"use client";
import Register from "@/components/auth/Register";
import AuthLayout from "@/layouts/AuthLayout";
import React from "react";

const register = () => {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
};

export default register;
