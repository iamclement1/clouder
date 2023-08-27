"use client";
import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

export const PageLoader = () => {
  return (
    <Flex
      position="absolute"
      left="0"
      top="0"
      zIndex="50"
      h="100vh"
      w="100vw"
      bg="blackAlpha.800"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        position="relative"
        zIndex="50"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        <Spinner size="sm" color="blue.400" />
        <Spinner size="sm" color="blue.400" />
        <Spinner size="sm" color="blue.400" />
      </Flex>
    </Flex>
  );
};

export default PageLoader;
