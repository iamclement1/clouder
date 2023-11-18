"use client";
import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Typography from "../common/Typograph";

const TodayActivities = () => {
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
        Today’s Activities
      </Typography>

      <Stack spacing={"0.38rem"} mt="1.12rem">
        <Text fontSize={"0.75rem"} color="grey_1" noOfLines={1}>
          You’ve made 10 logbook entry’s
        </Text>
        <Text fontSize={"0.75rem"} color="grey_1" noOfLines={1}>
          You’ve made 2 entry’s into Research
        </Text>
        <Text fontSize={"0.75rem"} color="grey_1" noOfLines={1}>
          You’ve made 4 entry’s into Teaching
        </Text>
      </Stack>
    </Box>
  );
};

export default TodayActivities;
