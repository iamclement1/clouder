"use client";
import React from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Typography from "@/components/common/Typograph";
import ScreenSize from "@/layouts/ScreenSize";

import Doctor from "@/assests/images/researchDoc.svg";
import Image from "next/image";
import CustomButton from "../common/CustomButton";

const Research = () => {
  return (
    <Box py="5rem" bgColor={"white"}>
      <ScreenSize>
        <SimpleGrid columns={[1, 2]} spacing={"4.27rem"}>
          <Box>
            <Image
              src={Doctor}
              alt="Doctor illustration"
              // width={"100%"}
            />
          </Box>
          <Flex align={"center"} justify={"center"}>
            <Box maxW={["100%", null, "35rem"]}>
              <Typography variant="heading1" color="black">
                Exploring the Clinical Audit{" "}
                <Text as="span" color="primary">
                  Process
                </Text>
              </Typography>

              <Box maxW="31.21875rem" mt="1.88rem">
                <Typography variant="body">
                  Learn about clinical audits and how you can start and complete
                  an audit cycle while reflecting on your experience. Record and
                  share your results with a wider audience in the professional
                  and academic community.
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
        </SimpleGrid>
      </ScreenSize>
    </Box>
  );
};

export default Research;
