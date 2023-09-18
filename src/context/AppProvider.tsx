"use client";

import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/utils/theme";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <CSSReset />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default AppProvider;
