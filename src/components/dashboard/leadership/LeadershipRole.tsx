import { Box, Button, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const LeadershipRole = () => {
  const [selectetdRole, setSelectetdRole] = useState<string>("");
  return (
    <Box mt="0.87rem">
      <Text fontSize="1.125rem">
        Kindly select the leadership role you’ve taken
      </Text>
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

export default LeadershipRole;

const roleData = [
  {
    id: 1,
    roleType: "Academic role",
  },
  {
    id: 2,
    roleType: "Student unionism",
  },
  {
    id: 3,
    roleType: "Civil society",
  },
  {
    id: 4,
    roleType: "Other",
  },
];
