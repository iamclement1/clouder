import React from "react";
import { Inter } from "next/font/google";
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
      url: "./icon.png",
    },
    {
      rel: "apple",
      url: "./icon.png",
    },
  ],
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/icon-192x192.png" sizes="any" />
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
