"use client";
import React from "react";

import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export default function ScreenSize({ children, ...props }: Props) {
  // const { children } = props;
  return (
    <Box
      px={["1rem", null, "2rem"]}
      w="100%"
      maxW="1440px"
      mx="auto"
      {...props}
    >
      {children}
    </Box>
  );
}
