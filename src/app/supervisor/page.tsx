"use client";
import PageLoader from "@/components/common/PageLoader";
import Typography from "@/components/common/Typograph";
import LandingPage from "@/components/supervisor/LandingPage";
import useProfile from "@/hooks/useProfile";
import { Box } from "@chakra-ui/react";
import React from "react";

const SupervisorDashboard = () => {
  const { data: userData, isLoading } = useProfile();

  if (isLoading) return <PageLoader />;
  const fullName = userData?.data.fullName;
  const nameParts = fullName?.split(" ");
  const firstName = nameParts[0]?.trim();

  return (
    <Box>
      <Typography variant="heading2"> Hello {firstName}</Typography>
      <LandingPage />
    </Box>
  );
};

export default SupervisorDashboard;
