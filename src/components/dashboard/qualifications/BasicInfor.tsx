"use client";

import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const BasicInfor = () => {
  return (
    <Box>
      <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1.88rem">
        Basic Information
      </Text>

      <Flex
        bgColor="white"
        p={["1rem", "2rem", "3.19rem"]}
        gap={["1rem", "1rem", null, "3.89rem"]}
        h="100%"
        flexDir={["column", "row"]}
        rounded={"0.62713rem"}
        align="center"
      >
        <Box maxW={["100%", "12rem"]} w="100%">
          <Image
            src="/userImage.svg"
            alt="user Image"
            rounded={"0.50313rem"}
            w="100%"
            boxSize={["100%", "11.7rem"]}
          />
        </Box>

        <Box border="1px" borderColor={"grey_1"} h="max-content"></Box>

        <Box w="100%">
          <Stack spacing={"1.27rem"}>
            <Flex
              align={"center"}
              minH={"3.5rem"}
              border="1px"
              px="1rem"
              rounded={"0.375rem"}
              borderColor={"rgba(51, 51, 51, 0.40)"}
            >
              <Text
                color="grey_1"
                fontSize={["1rem", null, "1.125rem"]}
                fontWeight={500}
              >
                John Doe
              </Text>
            </Flex>
            {/* Email */}
            <Flex
              align={"center"}
              minH={"3.5rem"}
              border="1px"
              px="1rem"
              rounded={"0.375rem"}
              borderColor={"rgba(51, 51, 51, 0.40)"}
            >
              <Text
                color="grey_1"
                fontSize={["1rem", null, "1.125rem"]}
                fontWeight={500}
              >
                Johndoe14@gmail.com
              </Text>
            </Flex>
            {/* Date / Number  */}
            <Flex gap={["1.27rem"]} flexDir={["column", "row"]}>
              {/* date  */}
              <Flex
                w="100%"
                align={"center"}
                minH={"3.5rem"}
                border="1px"
                px="1rem"
                rounded={"0.375rem"}
                borderColor={"rgba(51, 51, 51, 0.40)"}
              >
                <Text
                  color="grey_1"
                  fontSize={["1rem", null, "1.125rem"]}
                  fontWeight={500}
                >
                  09/8/1990
                </Text>
              </Flex>
              {/* Number */}
              <Flex
                w="100%"
                align={"center"}
                minH={"3.5rem"}
                border="1px"
                px="1rem"
                rounded={"0.375rem"}
                borderColor={"rgba(51, 51, 51, 0.40)"}
              >
                <Text
                  color="grey_1"
                  fontSize={["1rem", null, "1.125rem"]}
                  fontWeight={500}
                >
                  07030075660
                </Text>
              </Flex>
            </Flex>

            {/* address */}
            <Flex
              align={"center"}
              minH={"3.5rem"}
              border="1px"
              px="1rem"
              rounded={"0.375rem"}
              borderColor={"rgba(51, 51, 51, 0.40)"}
            >
              <Text
                color="grey_1"
                fontSize={["1rem", null, "1.125rem"]}
                fontWeight={500}
              >
                Alagbon Community, Basin Road, Ilorin
              </Text>
            </Flex>
          </Stack>
        </Box>
      </Flex>

      {/* QUALIFICATION SECTION */}
      <Box mt={["3rem"]}>
        <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1.88rem">
          Qualifications
        </Text>
        <Stack
          bgColor="white"
          p={["1rem", "2rem", "3.19rem"]}
          h="100%"
          rounded={"0.62713rem"}
          spacing={"3.75rem"}
        >
          {/* Education  */}
          <Box>
            <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
              Education
            </Text>

            <Stack
              border={"1px"}
              borderColor={"rgba_6"}
              rounded={"0.75rem"}
              px="1.69rem"
              py="2rem"
            >
              <Flex gap="0.38rem">
                <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                  Institution:
                </Text>

                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  University of Ilorin, Ilorin Nigeria
                </Text>
              </Flex>
              <Flex gap="0.38rem">
                <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                  Degree:
                </Text>
                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  Medical Sciences
                </Text>
              </Flex>
              <Flex gap="0.38rem">
                <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                  Year of graduation:
                </Text>
                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  2019
                </Text>
              </Flex>
            </Stack>
          </Box>

          {/* Challenges  */}
          <Box>
            <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
              Challenges
            </Text>

            <Stack
              border={"1px"}
              borderColor={"rgba_6"}
              rounded={"0.75rem"}
              px="1.69rem"
              py="2rem"
            >
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam nihil tenetur facilis iure aperiam quod, minima
                voluptatem fugiat iusto dolorum ab inventore ad corrupti tempora
                hic similique, dolor molestiae magni!
              </Text>
            </Stack>
          </Box>

          {/* Key Positives  */}
          <Box>
            <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
              Key Positives
            </Text>

            <Stack
              border={"1px"}
              borderColor={"rgba_6"}
              rounded={"0.75rem"}
              px="1.69rem"
              py="2rem"
            >
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam nihil tenetur facilis iure aperiam quod, minima
                voluptatem fugiat iusto dolorum ab inventore ad corrupti tempora
                hic similique, dolor molestiae magni!
              </Text>
            </Stack>
          </Box>

          {/* What i would have done differently  */}
          <Box>
            <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
              Key Positives
            </Text>

            <Stack
              border={"1px"}
              borderColor={"rgba_6"}
              rounded={"0.75rem"}
              px="1.69rem"
              py="2rem"
            >
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam nihil tenetur facilis iure aperiam quod, minima
                voluptatem fugiat iusto dolorum ab inventore ad corrupti tempora
                hic similique, dolor molestiae magni!
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default BasicInfor;
