"use client";

import Verified from "@/components/auth/Verified";
import AuthLayout from "@/layouts/AuthLayout";
import React from "react";

const page = () => {
  return (
    <AuthLayout isModal={true}>
      <Verified />
    </AuthLayout>
  );
};

export default page;
