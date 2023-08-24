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
                  Clouder is Nigeria’s first e-portfolio platform for students
                  in the health sciences and health care practitioners. We help
                  you curate and maintain access to every aspect of your
                  continuous academic and professional progress by creating the
                  most intuitive and secure online platform to keep and
                  constantly update all aspects of your professional and
                  personal development
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
