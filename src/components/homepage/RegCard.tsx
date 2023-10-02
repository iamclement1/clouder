"use client";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import ScreenSize from "@/layouts/ScreenSize";
import Typography from "../common/Typograph";
import CustomButton from "../common/CustomButton";
import { useRouter } from "next/navigation";

const RegCard = () => {
  const navigate = useRouter();
  return (
    <Box py="5rem" bgColor={"white"}>
      <ScreenSize>
        <Flex
          bg={"linear-gradient(124deg, #03A9F4 0%, #E9F7F8 100%)"}
          maxW="59.29688rem"
          mx="auto"
          px={["1.42rem", "2.42rem", "3.42rem"]}
          py="1.96rem"
          rounded={"1.125rem"}
          align={["flex-start", "center", "center"]}
          justify={["center", null, "space-between"]}
          gap="20px"
          flexDir={["column", "row"]}
        >
          <Box>
            <Typography variant="heading3" fontWeight={900} color={"white"}>
              Ready to get started ?
            </Typography>

            <Typography mt="0.52rem" fontWeight={700} color={"white"}>
              Easy way to build and access your medical portfolio
            </Typography>
          </Box>
          <Box maxW={["100%", null, "15.3rem"]} w="100%">
            <CustomButton
              bgColor={"white"}
              color="primary"
              h="3.2rem"
              w="100%"
              textTransform={"uppercase"}
              fontWeight={700}
              handleClick={() => navigate.push("/auth/register")}
            >
              Register now
            </CustomButton>
          </Box>
        </Flex>
      </ScreenSize>
    </Box>
  );
};

export default RegCard;
