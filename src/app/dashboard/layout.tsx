"use client";
import React from "react";

// import { usePathname } from "next/navigation";
import BackToTop from "@/components/common/BackToTop";

import Seo from "@/components/common/SEO";

import "react-toastify/dist/ReactToastify.css";
import SidebarWithHeader from "@/components/common/Sidebar";
import InactivityCheck from "@/components/common/IdleCheckModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
