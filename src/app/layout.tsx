import React from "react";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import AppLayout from "@/context/AppLayout";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
import "../app/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s | Clouder",
    default: "Clouder",
  },
  description: "A medical portfolio",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/clouder.ico",
    },
    {
      rel: "apple",
      url: "/icon.png",
    },
  ],
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
