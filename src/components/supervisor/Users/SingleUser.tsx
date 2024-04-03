import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import UserDetails from "./UserDetails";
import { useParams } from "next/navigation";
import { ParamsType } from "@/utils/types";

const SingleUser = () => {
  const { index } = useParams<ParamsType>();
  console.log(index);
  const [sortMenu, setSortMenu] = useState<boolean>(false);

  return (
    <Box>
      <Flex gap="4.5px" align="center" fontSize="1.5rem" fontWeight="semibold">
        <Text>Users </Text> <BsChevronRight fontSize="18px" />{" "}
        <Text color="#6a6b6d">Tunde Idiagbon</Text>
      </Flex>

      <Box
        mt="15px"
        bgColor="white"
        rounded="0.5625rem"
        px={["16px", "1.1875rem", "25px"]}
        py="4.6875rem"
      >
        {/* Falg ACcount Drop down */}

        <Flex w="100%" justify="right">
          <Box w="100%" maxW="95px" pos="relative">
            <Flex
              py="0.75rem"
              px="15px"
              rounded="0.5625rem"
              justify="space-between"
              align="center"
              onClick={() => setSortMenu(!sortMenu)}
              cursor="pointer"
              bgColor="#57A773"
              color="white"
              gap="7px"
              w="100%"
            >
              <Text fontSize={"14px"}>Active</Text>

              <BsChevronDown />
            </Flex>

            {sortMenu && (
              <Stack
                // minH="12.5rem"
                left="0"
                right="0"
                top="2.3rem"
                pos="absolute"
                bgColor="white"
                boxShadow={"md"}
                // py=".5rem"
                overflow={"hidden"}
                border="1px"
                borderColor="gray.200"
                rounded="0.5625rem"
                spacing="0"
              >
                {[
                  {
                    id: "1",
                    label: "Blocked",
                    func: () => {
                      setSortMenu(!sortMenu);
                    },
                  },
                  {
                    id: "2",
                    label: "Flag Account",
                    func: () => {
                      setSortMenu(!sortMenu);
                    },
                  },
                  {
                    id: "3",
                    label: "Restricted",
                    func: () => {
                      setSortMenu(!sortMenu);
                    },
                  },
                  {
                    id: "4",
                    label: "Delete",
                    func: () => {
                      setSortMenu(!sortMenu);
                    },
                  },
                ].map((item) => {
                  return (
                    <Text
                      key={item?.id}
                      py=".45rem"
                      fontSize={"0.75rem"}
                      px="6px"
                      cursor="pointer"
                      _hover={{ bgColor: "gray.300" }}
                      onClick={item?.func}
                    >
                      {item?.label}
                    </Text>
                  );
                })}
              </Stack>
            )}
          </Box>
        </Flex>

        <UserDetails />
      </Box>
    </Box>
  );
};

export default SingleUser;
