"use client";
import Verification from "@/components/auth/Verification";
import AuthLayout from "@/layouts/AuthLayout";
import React from "react";

const page = () => {
  return (
    <AuthLayout isModal={true}>
      <Verification />
    </AuthLayout>
  );
};

export default page;
