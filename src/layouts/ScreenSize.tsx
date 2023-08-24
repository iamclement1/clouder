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
      px={["14px", null, "2.5rem", "3rem"]}
      w="100%"
      maxW="1440px"
      mx="auto"
      {...props}
    >
      {children}
    </Box>
  );
}
