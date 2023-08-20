"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { CacheProvider } from "@chakra-ui/next-js";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/utils/theme";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <CacheProvider>
        <CSSReset />

        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </Provider>
  );
};

export default AppProvider;
