"use client";
import QualityImprovement from "@/components/dashboard/qualityImprovement/QualityImprovement";
import { useQualityImprovement } from "@/context/QualityImprovement";
import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";

const page = () => {
  const { handleActivityType } = useQualityImprovement();
  useEffect(() => {
    handleActivityType("Clinical Audit");
  }, []);
  return (
    <Box>
      <QualityImprovement />
    </Box>
  );
};

export default page;
