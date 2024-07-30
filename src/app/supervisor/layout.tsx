import React from "react";
import BackToTop from "@/components/common/BackToTop";
import InactivityCheck from "@/components/common/IdleCheckModal";
import SupervisorSidebarWithHeader from "@/components/common/SupervisorSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Clouder",
    default: "Supervisor || Clouder",
  },
  description: "A medical portfolio",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "./icon.png",
    },
    {
      rel: "apple",
      url: "./icon.png",
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <SupervisorSidebarWithHeader passedActive="/supervisor">
        <InactivityCheck />

        {children}
      </SupervisorSidebarWithHeader>

      {/* back top button */}
      <BackToTop />
    </React.Fragment>
  );
}
