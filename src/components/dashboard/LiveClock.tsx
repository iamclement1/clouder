import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Clock from "react-live-clock";
import Typography from "../common/Typograph";

export const LiveClock = () => {
  return (
    <Box
      maxW="22rem"
      // maxH="10rem"
      overflowY={"hidden"}
      py="1.34rem"
      px="1.36rem"
      rounded={"0.54844rem"}
      style={{ border: "0.8px solid #DEEBFD" }}
      bgColor={"white"}
      boxShadow={
        "-7.02019px 10.53028px 15.79542px 0px rgba(218, 222, 232, 0.50)"
      }
    >
      <Typography fontSize={"0.9375rem"} fontWeight={"600"}>
        {" "}
        Current Time
      </Typography>
      <Flex justifyContent="center" alignItems="center">
        <Clock
          format={"h:mm:ssa"}
          style={{ fontSize: "3.5em", color: "#6164C1", fontWeight: "bold" }}
          ticking={true}
        />
      </Flex>
    </Box>
  );
};
