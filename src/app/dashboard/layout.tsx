"use client";
import React, { useEffect } from "react";

import BackToTop from "@/components/common/BackToTop";

import Seo from "@/components/common/SEO";

import "react-toastify/dist/ReactToastify.css";
import SidebarWithHeader from "@/components/common/Sidebar";
import InactivityCheck from "@/components/common/IdleCheckModal";
import { getStorageAuthItems } from "@/utils/lib";
import { redirect } from "next/navigation";
import useProfile from "@/hooks/useProfile";
import { toast } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: profileData } = useProfile();
  const userRole = profileData?.data;
  useEffect(() => {
    const { token } = getStorageAuthItems();
    // || (userRole && userRole.role === "supervisor")
    if (!token) {
      // Remove token from sessionStorage
      sessionStorage.removeItem("token");
      // Redirect to login
      toast.error("Unauthorized, retry with an authorized credentials", {
        position: "top-right",
        theme: "dark",
      });
      return redirect("/auth/login");
    }
  }, [userRole]);
  return (
    <React.Fragment>
      <Seo templateTitle="Clouder" />

      <SidebarWithHeader passedActive="/dashboard">
        <InactivityCheck />

        {children}
      </SidebarWithHeader>

      {/* back top button */}
      <BackToTop />
    </React.Fragment>
  );
}
