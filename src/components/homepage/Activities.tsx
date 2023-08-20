"use client";
import React from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Typography from "@/components/common/Typograph";
import ScreenSize from "@/layouts/ScreenSize";

import Doctor from "@/assests/images/actitiesDoc.png";
import Image from "next/image";
import CustomButton from "../common/CustomButton";

const Activities = () => {
  return (
    <Box py="5rem" bgColor={"primary_1"}>
      <ScreenSize>
        <SimpleGrid columns={[1, 2]} spacing={"4.27rem"}>
          <Box>
            <Image
              src={Doctor}
              alt="Doctor illustration"
              // width={"100%"}
            />
          </Box>
          <Flex align={"center"} justify={""}>
            <Box maxW={["100%", null, "28.45313rem"]}>
              <Typography variant="heading1" color="white">
                Keep Track On Your Quality Improvement{" "}
                <Text as="span" color="primary">
                  Activities
                </Text>
              </Typography>

              <Box maxW="31.21875rem" mt="1.88rem">
                <Typography variant="body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Typography>
              </Box>
              <Box mt="3.75rem">
                <CustomButton
                  py={["0.94rem"]}
                  h="3.25rem"
                  px={["2.81rem"]}
                  maxW="fit-content"
                  fontSize={["1.125rem"]}
                >
                  Register
                </CustomButton>
              </Box>
            </Box>
          </Flex>
        </SimpleGrid>
      </ScreenSize>
    </Box>
  );
};

export default Activities;
