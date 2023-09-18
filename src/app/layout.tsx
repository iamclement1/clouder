"use client";
import React from "react";
import AppProvider from "@/Redux/AppProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/common/Sidebar";
import BackToTop from "@/components/common/BackToTop";
import TanstackProvider from "@/context/tanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const showNavigation = ["/", "/about", "/contact", "/pricing"].includes(
    pathname,
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <TanstackProvider>
            {showNavigation && <Navbar />}
            {pathname === "/dashboard" && <Sidebar />}
            {children}
            {showNavigation && <Footer />}
            {/* back top button */}
            <BackToTop />
          </TanstackProvider>
        </AppProvider>
      </body>
    </html>
  );
}
