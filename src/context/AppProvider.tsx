"use client";

import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/utils/theme";
import { ModalProvider } from "./ModalContext";
import { QualificationProvider } from "./QualificationProvider";
import { CoursesProvider } from "./CoursesProvider";
import { LeadershipProvider } from "./LeadershipProvider";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <QualificationProvider>
          <CoursesProvider>
            <LeadershipProvider>
              <ModalProvider>{children}</ModalProvider>
            </LeadershipProvider>
          </CoursesProvider>
        </QualificationProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default AppProvider;
