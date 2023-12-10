"use client";
import React from "react";

// import { usePathname } from "next/navigation";
import BackToTop from "@/components/common/BackToTop";

import Seo from "@/components/common/SEO";

import "react-toastify/dist/ReactToastify.css";
import SidebarWithHeader from "@/components/common/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();

  // const showNavigation = [
  //     "/dashboard",
  //     "/about",
  //     "/contact",
  //     "/pricing",
  // ].includes(pathname);
  return (
    <>
      <Seo templateTitle="Clouder" />

      <SidebarWithHeader passedActive="/dashboard">
        {children}
      </SidebarWithHeader>

      {/* back top button */}
      <BackToTop />
    </>
  );
}
