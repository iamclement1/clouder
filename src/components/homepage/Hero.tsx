"use client";
import React from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Typography from "@/components/common/Typograph";
import ScreenSize from "@/layouts/ScreenSize";

import Doctor from "@/assests/images/heroDoc.svg";
import Image from "next/image";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  return (
    <Box py="5rem">
      <ScreenSize>
        <SimpleGrid columns={[1, 2]} spacing={"4.27rem"}>
          <Flex align={"center"} justify={"center"}>
            <Box w="100%">
              <Typography variant="heading1">
                Easy Way To <br /> Your Medical{" "}
                <Text as="span" color="primary">
                  {" "}
                  Portfolio{" "}
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
                  px={["2.81rem"]}
                  maxW="fit-content"
                  fontSize={["1.125rem"]}
                >
                  Explore
                </CustomButton>
              </Box>
            </Box>
          </Flex>

          <Box>
            <Image
              src={Doctor}
              alt="Doctor illustration"
              // width={"100%"}
            />
          </Box>
        </SimpleGrid>
      </ScreenSize>
    </Box>
  );
};

export default Hero;
