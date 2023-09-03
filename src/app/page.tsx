"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/homepage/Hero";
import Activities from "@/components/homepage/Activities";
import LogBook from "@/components/homepage/LogBook";
import Research from "@/components/homepage/Research";
import RegCard from "@/components/homepage/RegCard";
import Testimonies from "@/components/homepage/Testimonies";

export default function Home() {
  return (
    <Box pos="relative">
      <Hero />
      <Activities />
      <LogBook />
      <Research />
      <Testimonies />
      <RegCard />
    </Box>
  );
}
