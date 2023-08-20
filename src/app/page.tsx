"use client";
import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import Hero from "@/components/homepage/Hero";
import Activities from "@/components/homepage/Activities";
import LogBook from "@/components/homepage/LogBook";
import Research from "@/components/homepage/Research";
import RegCard from "@/components/homepage/RegCard";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  return (
    <Box pos="relative">
      <Hero />
      <Activities />
      <LogBook />
      <Research />
      <RegCard />

      <IconButton
        aria-label="back-top"
        pos={"fixed"}
        right={0}
        bottom={0}
        icon={<FaArrowUp />}
        boxSize={"4.5rem"}
        fontSize={"3rem"}
        cursor={"pointer"}
        bgColor={"primary_2"}
      />
    </Box>
  );
}
