import { Box, Flex, Image, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import CustomButton from "../CustomButton";

const FeedBack = () => {
  const [feedback, setFeedback] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = () => {
    if (feedback.length < 1) {
      setErr(true);
    } else {
      setErr(false);
      console.log("feedback", feedback);
    }
  };

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
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              fontSize={["16px", null, null, "20px"]}
              minH="274px"
              border="1px"
              borderColor={err ? "red" : "#CBD5E0"}
              _focus={{}}
              _focusVisible={{}}
              _hover={{}}
            />
            <Flex justify={"end"} gap="1.12rem" mt="3rem">
              <CustomButton
                bgColor={"transparent"}
                border="1px"
                borderColor="#333333"
                color="#333333"
                maxW="200px"
                onClick={() => setFeedback("")}
              >
                Cancel
              </CustomButton>
              <CustomButton maxW="200px" handleClick={() => handleSubmit()}>
                Submit
              </CustomButton>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeedBack;
