"use client";

import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/utils/theme";
import { ModalProvider } from "./ModalContext";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <CSSReset />
      <ChakraProvider theme={theme}>
        <ModalProvider>{children}</ModalProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default AppProvider;
