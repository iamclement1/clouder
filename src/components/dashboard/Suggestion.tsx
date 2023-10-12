import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Suggestion = () => {
  return (
    <Stack mt="1.2rem" spacing={"1.12rem"}>
      {shareData.map((item) => {
        return (
          <Flex
            key={item.id}
            align="center"
            justify={"space-between"}
            cursor={"pointer"}
          >
            <Flex
              align="center"
              justify={"flex-start"}
              gap="0.75rem"
              fontSize="0.75rem"
              color={"grey_1"}
            >
              <Flex
                align="center"
                justify={"center"}
                w="2.3rem"
                h="2.3rem"
                bgColor={item.isUser ? "primary" : "orange_1"}
                rounded={"full"}
                fontSize={"0.84375rem"}
                color={"white"}
              >
                {item.nameCode}
              </Flex>
              <Text>{item.name} </Text>
              {item.isUser && <Text>(You)</Text>}
            </Flex>

            <Text fontSize="0.75rem" color={"grey_1"} fontWeight={"600"}>
              {item.role}
            </Text>
          </Flex>
        );
      })}
    </Stack>
  );
};

export default Suggestion;

const shareData = [
  { id: 1, name: "John Doe", role: "Owner", isUser: true, nameCode: "JD" },
  {
    id: 2,
    nameCode: "DA",
    name: "Dayo Alade",
    role: "Visitor",
    isUser: false,
  },
  {
    id: 3,
    nameCode: "SS",
    name: "Shina Salaudeen",
    role: "Visitor",
    isUser: true,
  },
];
