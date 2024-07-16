"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import TanstackProvider from "./tanstackProvider";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import { Analytics } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";

interface RootLayoutProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: RootLayoutProps) => {
  const pathname = usePathname();

  const showNavigation = ["/", "/about", "/contact", "/pricing"].includes(
    pathname,
  );

  return (
    <Box>
      <TanstackProvider>
        {showNavigation && <Navbar />}
        {children}
        {showNavigation && <Footer />}
        <BackToTop />
      </TanstackProvider>
      <Analytics />
      <Toaster position="bottom-right" richColors />
    </Box>
  );
};

export default AppLayout;
