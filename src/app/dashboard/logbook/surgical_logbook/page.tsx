"use client";

import Logbook from "@/components/dashboard/logbook/Logbook";
import { useLogbook } from "@/context/LogbookProvider";
import React, { useEffect } from "react";

const Page = () => {
  const { handleLogbookMode, handleLogbookData, logbookData, logBookMode } =
    useLogbook();
  useEffect(() => {
    handleLogbookMode("surgical");
    handleLogbookData({
      ...logbookData,
      flag: logBookMode,
    });
  }, []);
  return (
    <div>
      <Logbook />
    </div>
  );
};

export default Page;
