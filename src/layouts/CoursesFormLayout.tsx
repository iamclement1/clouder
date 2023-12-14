"use client";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";

import React from "react";
import { MdChevronLeft } from "react-icons/md";

const CoursesFormLayout = ({
  formSteps,
  handleFormSteps,
  children,
  ...props
}: {
  formSteps: number;
  handleFormSteps: (step: number) => void;
  children: React.ReactNode;
}) => {
  return (
    <Box {...props}>
      <Box
        mt="1rem"
        bgColor="white"
        minH="80vh"
        borderRadius="0.46875rem"
        pt="1.8rem"
        px="2.32rem"
        pb="2rem"
      >
        <Flex justify={"space-between"} gap="1rem">
          <Box>
            {formSteps > 1 ? (
              <Flex
                // mt="1rem"
                gap="0.38rem"
                color="grey_1"
                cursor={"pointer"}
                align="center"
                fontSize={"0.84375rem"}
                fontWeight="600"
                onClick={() => handleFormSteps(formSteps - 1)}
              >
                <Icon as={MdChevronLeft} /> Back
              </Flex>
            ) : (
              ""
            )}
          </Box>
          <Box>
            <Text fontSize={"0.84375rem"} fontWeight="600" color="grey_1">
              {formSteps} of 4
            </Text>
          </Box>
        </Flex>

        <Flex
          mt="1.11rem"
          w="100%"
          h="0.6rem"
          bgColor="grey_12"
          rounded="0.23438rem"
        >
          <Box
            h="100%"
            bgColor="primary"
            rounded="0.23438rem"
            w={`${25 * formSteps}%`}
          ></Box>
        </Flex>
        <Box mt="2rem">{children}</Box>
      </Box>
    </Box>
  );
};

export default CoursesFormLayout;
