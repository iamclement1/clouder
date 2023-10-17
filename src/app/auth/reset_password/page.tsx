"use client";
import ResetPassword from "@/components/auth/ResetPassword";
import AuthLayout from "@/layouts/AuthLayout";
import React from "react";

const page = () => {
  return (
    <AuthLayout isModal={true}>
      <ResetPassword />
    </AuthLayout>
  );
};

export default page;
