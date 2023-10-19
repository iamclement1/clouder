"use client";
import React from "react";
import { Box, Text, Image, Link } from "@chakra-ui/react";

import CustomButton from "../common/CustomButton";

const Verified: React.FC = () => {
  return (
    <Box bgColor="white" rounded="0.46875rem" maxW="34.3rem" mx="auto">
      <Box
        px="16px"
        maxW="28.2rem"
        mx="auto"
        py={["1.8rem", "2.8rem", "3.8rem"]}
      >
        <Image
          src="/successful.svg"
          alt="Successfull Image"
          w="7.6rem"
          h="7.6rem"
          display="block"
          mx="auto"
        />

        <Text
          mt="1.2rem"
          fontSize="1.3125rem"
          color="grey_1"
          fontWeight="600"
          textAlign="center"
        >
          Verified
        </Text>

        <Text
          mt="1.12rem"
          fontSize="0.84375rem"
          color="grey_1"
          maxW="21.1rem"
          mx="auto"
          textAlign="center"
        >
          You have successfully verified your account
        </Text>

        <Link href="/auth/login">
          <CustomButton
            type="submit"
            mt="1.88rem"
            // maxW={"5rem"}
            w="100%"
            h="3.23438rem"
            fontSize={["0.75rem", "1.125rem"]}
            // handleClick={() => navigate.push("/auth/login")}
          >
            Login to Continue
          </CustomButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Verified;
