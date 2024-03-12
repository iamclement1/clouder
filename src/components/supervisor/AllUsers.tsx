import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import DataTable from "./Tables/DataTable";

const AllUsers = () => {
  const [sortMenu, setSortMenu] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>("Newest");

  return (
    <Box bgColor="white" rounded="0.5625rem">
      {/* Table Header */}
      <Flex py="1.6875rem" px="2.625rem" align="center" justify="space-between">
        <Text fontWeight="semibold" fontSize={"1.03125rem"}>
          All Users
        </Text>

        <Box w="100%" maxW="13.6875rem" pos="relative">
          <Flex
            bgColor="#F9FBFF"
            py="0.625rem"
            px="0.6rem"
            rounded="0.5625rem"
            justify="space-between"
            align="center"
            onClick={() => setSortMenu(!sortMenu)}
            cursor="pointer"
          >
            <Text color="#7E7E7E" fontSize={"0.8625rem"}>
              Short by :{" "}
              <Text as="span" color="#3D3C42" fontWeight={"bold"}>
                {sortOption}
              </Text>
            </Text>

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
            >
              <Text
                py=".45rem"
                fontSize={".9rem"}
                px="1rem"
                cursor="pointer"
                _hover={{ bgColor: "gray.300" }}
                onClick={() => {
                  setSortOption("Newest");
                  setSortMenu(!sortMenu);
                }}
              >
                Newest
              </Text>{" "}
              <Text
                py=".45rem"
                fontSize={".9rem"}
                px="1rem"
                cursor="pointer"
                _hover={{ bgColor: "gray.300" }}
                onClick={() => {
                  setSortOption("Oldest");
                  setSortMenu(!sortMenu);
                }}
              >
                Oldest
              </Text>{" "}
              <Text
                py=".45rem"
                fontSize={".9rem"}
                px="1rem"
                cursor="pointer"
                _hover={{ bgColor: "gray.300" }}
                onClick={() => {
                  setSortOption("Color");
                  setSortMenu(!sortMenu);
                }}
              >
                Color
              </Text>
            </Stack>
          )}
        </Box>
      </Flex>

      {/* Table Gangan */}

      <DataTable />
    </Box>
  );
};

export default AllUsers;
