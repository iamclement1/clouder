import Pricing from "@/components/homepage/Pricing";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing",
};

const page = () => {
  return <Pricing />;
};

export default page;
