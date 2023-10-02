import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Typography from "../common/Typograph";

const LogBookEntries = () => {
  return (
    <Box
      maxW="22rem"
      maxH="10rem"
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
        Logbook Entries
      </Typography>
      <Box>
        <Text
          color="green_3"
          fontSize={"5.19494rem"}
          fontWeight={600}
          textAlign={"center"}
        >
          10
        </Text>
      </Box>
    </Box>
  );
};

export default LogBookEntries;
