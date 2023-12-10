"use client";
import Typography from "@/components/common/Typograph";
import UpdateProfile from "@/components/dashboard/profile/UpdateProfile";
import { Box } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <Box>
      <Box>
        <Typography variant="heading2">Update Account</Typography>
      </Box>
      <Box
        mt="1.88rem"
        minH="50vh"
        w="100%"
        py="5rem"
        px="1.88rem"
        rounded={"0.75rem"}
        style={{ border: "0.8px solid #DEEBFD" }}
        bgColor={"white"}
        boxShadow={
          "-7.02019px 10.53028px 15.79542px 0px rgba(218, 222, 232, 0.50)"
        }
      >
        <UpdateProfile />
      </Box>
    </Box>
  );
};

export default page;
