"use client";
import Login from "@/components/auth/Login";

import AuthLayout from "@/layouts/AuthLayout";

import React from "react";

const page = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export default page;
