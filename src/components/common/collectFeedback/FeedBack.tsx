import { Box, Flex, Image, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../CustomButton";

const FeedBack = () => {
  return (
    <Box bgColor="#EAEEF3">
      <Box
        minH="100vh"
        maxW="1960px"
        mx="auto"
        py={["30px", null, null, "50px"]}
        px={["16px", null, "32px", null, "64px"]}
      >
        <Box>
          <Image src="/logo.png" alt="" />
        </Box>

        <Box>
          <Text mt="50px" fontSize={["20px", null, "40px"]} fontWeight="600">
            Feedback
          </Text>
          <Box
            bg="white"
            py={["25px", null, null, "77px"]}
            px={["16px", null, "32px", "50px", "90px"]}
            mt="40px"
            rounded="20px"
          >
            <Textarea
              value="dfhsafs"
              fontSize={["16px", null, null, "20px"]}
              minH="274px"
            />
            <Flex justify={"end"} gap="1.12rem" mt="3rem">
              <CustomButton
                bgColor={"transparent"}
                border="1px"
                borderColor="#333333"
                color="#333333"
                maxW="200px"
              >
                Cancel
              </CustomButton>
              <CustomButton maxW="200px">Submit</CustomButton>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeedBack;
