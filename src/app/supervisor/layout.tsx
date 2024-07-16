import React from "react";
import BackToTop from "@/components/common/BackToTop";
import Seo from "@/components/common/SEO";
import InactivityCheck from "@/components/common/IdleCheckModal";
import SupervisorSidebarWithHeader from "@/components/common/SupervisorSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
