"use client";
import ScreenSize from "@/layouts/ScreenSize";
import { Box, Flex, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Typography from "../common/Typograph";
import { pricingData } from "@/utils/data";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LiaTimesCircle } from "react-icons/lia";
import CustomButton from "../common/CustomButton";

const Pricing = () => {
  return (
    <Box py="5.27rem">
      <ScreenSize>
        <Box>
          <Typography variant="heading1">
            <Text textAlign={"center"}>
              We believe in simple and{" "}
              <Text as="span" color={"primary"}>
                fair pricing
              </Text>
            </Text>
          </Typography>

          <Box maxW={"39.1rem"} textAlign={"center"} mx="auto">
            <Typography mt="1.88rem" color={"grey_1"}>
              Try out our platform for an unlimited period of time. Explore our
              plans and choose the one that best suits your needs
            </Typography>
          </Box>
        </Box>

        <SimpleGrid columns={[1, 2, 2, 4]} mt="3.75rem" spacing={"1.83rem"}>
          {pricingData.map((item) => {
            return (
              <Flex
                key={item.planType}
                flexDir={"column"}
                justify={"space-between"}
                border={"1px"}
                rounded={"0.85963rem"}
                borderColor={"rgba_3"}
                // maxW="17.94463rem"
                pt="2.14rem"
                pb="1.43rem"
                px="1.47rem"
                minH={["fit-content", "fit-content", "43rem"]}
                pos={"relative"}
              >
                {item.recommended && (
                  <Box
                    pos={"absolute"}
                    left={"0.96rem"}
                    top="-15px"
                    bgColor={"green_1"}
                    rounded={"full"}
                    maxW={"fit-content"}
                    fontSize={"0.71219rem"}
                    fontWeight={"700"}
                    color="white"
                    py="0.4rem"
                    px="1.3rem"
                  >
                    Recommended
                  </Box>
                )}
                <Box>
                  <Typography variant="heading4" fontWeight={600}>
                    {item.planType}
                  </Typography>
                  <Typography
                    mt="0.36rem"
                    fontSize={"0.85963rem"}
                    color={"grey_1"}
                  >
                    {item.planLimit}
                  </Typography>

                  <Typography
                    mt={["1.58rem", "null", "2.58rem"]}
                    variant="heading1"
                    fontSize={["2xl", "3xl", "2.29231rem"]}
                    color={"primary"}
                  >
                    {item.planPrice}
                  </Typography>

                  <Stack mt="1.16rem" spacing={"1.15rem"}>
                    {item.planfeat.map((item, i) => {
                      return (
                        <Flex key={i} align={"center"} gap="0.43rem">
                          <Icon
                            as={
                              item.available
                                ? IoCheckmarkCircleOutline
                                : LiaTimesCircle
                            }
                            boxSize={"1.1rem"}
                            color={item.available ? "primary" : "grey_1"}
                          />

                          <Typography color={"grey_1"} fontSize={"0.85963rem"}>
                            {item.featDetails}
                          </Typography>
                        </Flex>
                      );
                    })}
                  </Stack>
                </Box>

                <Box mt="3.1rem">
                  <CustomButton
                    bgColor={item.recommended ? "primary" : "white"}
                    color={item.recommended ? "white" : "primary"}
                    border={"1px"}
                    borderColor={"primary"}
                  >
                    Subscribe Now
                  </CustomButton>
                </Box>
              </Flex>
            );
          })}
        </SimpleGrid>
      </ScreenSize>
    </Box>
  );
};

export default Pricing;
