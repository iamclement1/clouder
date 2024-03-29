"use client";
import React, { useEffect } from "react";
import BackToTop from "@/components/common/BackToTop";
import Seo from "@/components/common/SEO";
import "react-toastify/dist/ReactToastify.css";
import SidebarWithHeader from "@/components/common/Sidebar";
import InactivityCheck from "@/components/common/IdleCheckModal";
import { getStorageAuthItems } from "@/utils/lib";
import { redirect, useParams, usePathname } from "next/navigation";
import { toast } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  let pageAlreadyRendered = false;
  let authErrorShown = false;
  const { id } = useParams();

  useEffect(() => {
    const { token, role, plan } = getStorageAuthItems();

    if (!token || (role === "supervisor" && authErrorShown)) {
      // Remove token from sessionStorage
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("plan");
      sessionStorage.removeItem("refreshToken");
      // Redirect to login
      if (!authErrorShown) {
        // Show auth error toast only if it hasn't been shown already
        toast.error("Unauthorized, retry with an authorized credentials");
        authErrorShown = true;
      }
      return redirect("/auth/login");
    }

    // Check if user has the role of "client"
    const isClient = role === "client";

    // Define the allowed routes based on the user's plan if the user has the role of "client"
    let allowedRoutes: string[] = [];

    if (isClient) {
      // Check user's plan and define allowed routes accordingly
      switch (plan) {
        case "trial":
          allowedRoutes = [
            "/dashboard",
            "/dashboard/qualification",
            "/dashboard/logbook/medical_logbook",
            "/dashboard/logbook/surgical_logbook",
            `/dashboard/logbook/logbook_aquired/${id}`,
          ];
          break;
        case "basic":
          allowedRoutes = [
            "/dashboard",
            "/dashboard/qualifications",
            "/dashboard/logbook/medical_logbook",
            "/dashboard/logbook/surgical_logbook",
            `/dashboard/logbook/logbook_aquired/${id}`,
          ];
          break;
        case "premium":
          allowedRoutes = [
            "/dashboard",
            "/dashboard/courses",
            "/dashboard/qualifications",
            "/dashboard/logbook/medical_logbook",
            "/dashboard/logbook/surgical_logbook",
            `/dashboard/logbook/logbook_aquired/${id}`,
            "/dashboard/research",
            "/dashboard/teaching",
            `/dashboard/teaching/teaching_aquired/${id}`,
          ];
          break;
        case "infinite":
          allowedRoutes = [
            "/dashboard",
            "/dashboard/qualifications",
            "/dashboard/courses",
            "/dashboard/quality_improvement/mobility",
            "/dashboard/quality_improvement/clinical_audit",
            "/dashboard/quality_improvement/case_review",
            "/dashboard/leadership",
            "/dashboard/research",
            `/dashboard/research/research_aquired/${id}`,
            "/dashboard/logbook/medical_logbook",
            "/dashboard/logbook/surgical_logbook",
            `/dashboard/logbook/logbook_aquired/${id}`,
            "/dashboard/teaching",
            `/dashboard/teaching/teaching_aquired/${id}`,
          ];
          break;
        default:
          break;
      }
    }

    // Check if the current route is allowed
    const currentPath = pathname;

    // If the current route is not allowed and the page has already been rendered, show toast message and redirect to dashboard
    if (!allowedRoutes.includes(currentPath) && pageAlreadyRendered) {
      const msg =
        "Dear customer, you don't have access to this. Kindly upgrade your plan!";
      toast.error(msg);
      return redirect("/dashboard");
    }

    // Set pageAlreadyRendered to true after the first render
    pageAlreadyRendered = true;
  }, [pathname]);

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
