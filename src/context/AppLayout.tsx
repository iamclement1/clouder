"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import TanstackProvider from "./tanstackProvider";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import { Analytics } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Box>
  );
};

export default AppLayout;
