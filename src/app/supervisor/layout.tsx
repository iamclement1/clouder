"use client";
import React, { useEffect } from "react";
import BackToTop from "@/components/common/BackToTop";
import Seo from "@/components/common/SEO";
import "react-toastify/dist/ReactToastify.css";
import InactivityCheck from "@/components/common/IdleCheckModal";
import { getStorageAuthItems } from "@/utils/lib";
import { redirect } from "next/navigation";
import SupervisorSidebarWithHeader from "@/components/common/SupervisorSidebar";
import useProfile from "@/hooks/useProfile";
import { toast } from "react-toastify";
import PageLoader from "@/components/common/PageLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: profileData, isLoading } = useProfile();
  if (isLoading) return <PageLoader />;
  console.log(profileData);
  const userRole = profileData?.data;
  useEffect(() => {
    const { token } = getStorageAuthItems();
    console.log("Token:", token);
    console.log("User Role:", userRole);

    if (!token || userRole?.role !== "supervisor") {
      // Redirect to login
      toast.error("Unauthorized, retry with authorized credentials");
      return redirect("/auth/login");
    }
  }, [profileData]);

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
