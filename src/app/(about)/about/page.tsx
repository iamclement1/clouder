"use client";
import Typography from "@/components/common/Typograph";
import Testimonies from "@/components/homepage/Testimonies";
import ScreenSize from "@/layouts/ScreenSize";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <Box>
      <ScreenSize>
        <Box py="5.27rem">
          <Typography variant="heading1">
            <Text textAlign={"center"}>
              About{" "}
              <Text as="span" color="primary">
                {" "}
                Us
              </Text>{" "}
            </Text>
          </Typography>

          <Typography color={"grey_1"} mt="1.87rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure
          </Typography>
        </Box>
      </ScreenSize>
      <Box>
        <Testimonies />
      </Box>
    </Box>
  );
};

export default page;
