"use client";
import React, { useEffect } from "react";
import BackToTop from "@/components/common/BackToTop";
import Seo from "@/components/common/SEO";
import SidebarWithHeader from "@/components/common/Sidebar";
import InactivityCheck from "@/components/common/IdleCheckModal";
import { deleteCookie, getCookie } from "cookies-next";
import { toast } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const message = getCookie("message");
    if (message) {
      toast.error(message);
      deleteCookie("message"); // Remove the message cookie after displaying it
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
