"use client";
import ForgetPasword from "@/components/auth/ForgetPasword";
import AuthLayout from "@/layouts/AuthLayout";

import React from "react";

const page = () => {
  return (
    <AuthLayout isModal={true}>
      <ForgetPasword />
    </AuthLayout>
  );
};
export default page;
