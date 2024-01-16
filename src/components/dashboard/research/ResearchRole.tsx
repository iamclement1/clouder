import { Box, Button, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const ResearchRole = () => {
  const [selectetdRole, setSelectetdRole] = useState<string>("");
  return (
    <Box mt="0.87rem">
      <Text fontSize="1.125rem">Are you the first author</Text>
      <Flex mt="1.12rem" gap="1.12rem">
        {roleData.map((item) => {
          return (
            <Button
              key={item.id}
              fontSize="0.9375rem"
              h="auto"
              px="1.8rem"
              py="0.75rem"
              border="1px"
              borderColor={
                selectetdRole === item.roleType ? "transparent" : "rgba_7"
              }
              onClick={() => setSelectetdRole(item.roleType)}
              color={selectetdRole === item.roleType ? "white" : "rgba_7"}
              bgColor={
                selectetdRole === item.roleType ? "primary" : "transparent"
              }
              _focus={{}}
              _hover={{}}
              _active={{}}
              _focusVisible={{}}
            >
              {item.roleType}
            </Button>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ResearchRole;

const roleData = [
  {
    id: 1,
    roleType: "Yes",
  },
  {
    id: 2,
    roleType: "No",
  },
  {
    id: 3,
    roleType: "Don’t wanna specify",
  },
];
