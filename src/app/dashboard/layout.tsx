"use client";
import React, { useEffect } from "react";

import BackToTop from "@/components/common/BackToTop";

import Seo from "@/components/common/SEO";

import "react-toastify/dist/ReactToastify.css";
import SidebarWithHeader from "@/components/common/Sidebar";
import InactivityCheck from "@/components/common/IdleCheckModal";
import { getStorageAuthItems } from "@/utils/lib";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const { token, role } = getStorageAuthItems();

    if (!token || role === "supervisor") {
      // Remove token from sessionStorage
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role");
      // Redirect to login
      toast.error("Unauthorized, retry with an authorized credentials", {
        position: "top-right",
        theme: "dark",
      });
      return redirect("/auth/login");
    }
  }, []);
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
