import Login from "@/components/auth/Login";

import AuthLayout from "@/layouts/AuthLayout";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

const page = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export default page;
