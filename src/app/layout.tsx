"use client";
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { usePathname } from "next/navigation";
import BackToTop from "@/components/common/BackToTop";
import TanstackProvider from "@/context/tanstackProvider";
import { AuthProvider } from "@/context/AuthProvider";
import Seo from "@/components/common/SEO";

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
        <TanstackProvider>
          <AuthProvider>
            <Seo templateTitle="Clouder" />
            {showNavigation && <Navbar />}
            {/* {pathname === "/dashboard" && <Sidebar />} */}
            {children}
            {showNavigation && <Footer />}
            {/* back top button */}
            <BackToTop />
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
