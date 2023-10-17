"use client";
import React, { useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppProvider from "./AppProvider";
import { ModalProvider } from "./ModalContext";

interface TanstackProviderProps {
  children: ReactNode;
}

const TanstackProvider = ({ children }: TanstackProviderProps) => {
  const [queryClient] = useState(() => new QueryClient({}));

  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>{children}</ModalProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppProvider>
  );
};

export default TanstackProvider;
