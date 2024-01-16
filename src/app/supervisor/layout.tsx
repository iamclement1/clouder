"use client";
import React, { useEffect } from "react";
import BackToTop from "@/components/common/BackToTop";
import Seo from "@/components/common/SEO";
import "react-toastify/dist/ReactToastify.css";
import InactivityCheck from "@/components/common/IdleCheckModal";
import { getStorageAuthItems } from "@/utils/lib";
import { redirect } from "next/navigation";
import SupervisorSidebarWithHeader from "@/components/common/SupervisorSidebar";
import { toast } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const { token, role } = getStorageAuthItems();

    if (!token || role !== "supervisor") {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role");
      // Redirect to login
      toast.error("Unauthorized, retry with authorized credentials");
      return redirect("/auth/login");
    }
  }, []);

  return (
    <React.Fragment>
      <Seo templateTitle="Clouder" />

      <SupervisorSidebarWithHeader passedActive="/supervisor">
        <InactivityCheck />

        {children}
      </SupervisorSidebarWithHeader>

      {/* back top button */}
      <BackToTop />
    </React.Fragment>
  );
}
