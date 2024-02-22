"use client";

import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/utils/theme";
import { ModalProvider } from "./ModalContext";
import { QualificationProvider } from "./QualificationProvider";
import { CoursesProvider } from "./CoursesProvider";
import { LeadershipProvider } from "./LeadershipProvider";
import { ResearchProvider } from "./ResearchProvider";
import { LogbookProvider } from "./LogbookProvider";
import { TeachingProvider } from "./TeachingProvider";
import { QualityImprovementProvider } from "./QualityImprovement";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <QualificationProvider>
          <QualityImprovementProvider>
            <CoursesProvider>
              <LeadershipProvider>
                <ResearchProvider>
                  <LogbookProvider>
                    <TeachingProvider>
                      <ModalProvider>{children}</ModalProvider>
                    </TeachingProvider>
                  </LogbookProvider>
                </ResearchProvider>
              </LeadershipProvider>
            </CoursesProvider>
          </QualityImprovementProvider>
        </QualificationProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default AppProvider;
