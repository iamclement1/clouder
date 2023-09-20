"use client";
import React, { useState } from "react";
import { Box, PinInputField, PinInput, HStack, Text } from "@chakra-ui/react";

import Typography from "../common/Typograph";
import CustomButton from "../common/CustomButton";

const Verification: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);

  const handleChange = (value: string) => {
    setValue(value);
  };
  const handleComplete = (value: string) => {
    if (!value || value.length < 4) {
      setErr(true);
      console.log(err);
    } else {
      setErr(false);
      console.log("done");
    }
  };

  return (
    <Box bgColor="white" rounded="0.46875rem" maxW="34.3rem" mx="auto">
      <Box
        px="16px"
        maxW="28.2rem"
        mx="auto"
        py={["1.8rem", "2.8rem", "3.8rem"]}
      >
        <Typography variant="heading3"> Verification </Typography>
        <Typography color="grey_1" fontSize={["0.74rem", "0.84375rem"]}>
          Enter your 4-digit code that you received on your email.
        </Typography>
        <Box mt="1.84rem" w="100%">
          <HStack spacing={"1.2rem"} justify={"center"}>
            <PinInput
              value={value}
              onChange={handleChange}
              // onComplete={handleComplete}
              placeholder=""
              otp
            >
              <PinInputField
                _focus={{
                  borderColor: `${err ? "red" : "transparent"}`,
                  boxShadow: `${err ? "0 0 0 1px red" : "0 0 0 1px primary"}`,
                }}
                borderColor={err ? "red" : "grey_8"}
                boxShadow={`${err ? "0 0 0 1px red" : "0 0 0 1px primary"}`}
              />
              <PinInputField
                _focus={{
                  borderColor: `${err ? "red" : "transparent"}`,
                  boxShadow: `${err ? "0 0 0 1px red" : "0 0 0 1px primary"}`,
                }}
                borderColor={err ? "red" : "grey_8"}
                boxShadow={`${err ? "0 0 0 1px red" : "0 0 0 1px primary"}`}
              />
              <PinInputField
                _focus={{
                  borderColor: `${err ? "red" : "transparent"}`,
                  boxShadow: `${err ? "0 0 0 1px red" : "0 0 0 1px primary"}`,
                }}
                borderColor={err ? "red" : "grey_8"}
                boxShadow={`${err ? "0 0 0 1px red" : "0 0 0 1px primary"}`}
              />
              <PinInputField
                _focus={{
                  borderColor: `${err ? "red" : "transparent"}`,
                  boxShadow: `${err ? "0 0 0 1px red" : "0 0 0 1px primary"}`,
                }}
                borderColor={err ? "red" : "grey_8"}
                boxShadow={`${err ? "0 0 0 1px red" : "0 0 0 1px primary"}`}
              />
            </PinInput>
          </HStack>

          <Box mt="1.12rem" color="red" textAlign="center" fontSize="0.7rem">
            00:30
          </Box>

          <CustomButton
            type="submit"
            mt="1.59rem"
            h="3.2rem"
            handleClick={() => handleComplete(value)}
            // isLoading={isLoading}
          >
            Continue
          </CustomButton>
        </Box>
        <Box mt="1.13rem">
          <Text
            fontSize={"0.75rem"}
            textAlign="center"
            fontWeight="600"
            color="grey_7"
          >
            If you didn’t receive a code!
            <Text
              display="inline"
              fontSize={"0.75rem"}
              cursor="pointer"
              color="red"
            >
              {" "}
              Resend
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Verification;
