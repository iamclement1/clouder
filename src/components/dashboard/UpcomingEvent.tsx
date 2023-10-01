import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Typography from "../common/Typograph";

const UpcomingEvent = () => {
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
        Got an Upcoming event?
      </Typography>

      {/* Event Section */}
      <Stack spacing={"0.38rem"} mt="0.56rem">
        <Flex fontSize={"0.84375rem"} color="primary" cursor={"pointer"}>
          + Add to my Calender
        </Flex>
      </Stack>
    </Box>
  );
};

export default UpcomingEvent;
