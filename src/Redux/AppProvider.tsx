"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
   return (
      <Provider store={store}>
         <CacheProvider>
            <ChakraProvider>{children}</ChakraProvider>
         </CacheProvider>
      </Provider>
   );
};

export default AppProvider;
