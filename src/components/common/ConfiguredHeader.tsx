"use client";
import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

const ConfiguredHeader = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/" && <Navbar />}
      {pathname === "/dashboard" && <Sidebar />}
      {children}
      {pathname === "/" && <Footer />}
    </div>
  );
};

export default ConfiguredHeader;
