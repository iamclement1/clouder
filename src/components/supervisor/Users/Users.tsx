import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import React from "react";
import { BiExport } from "react-icons/bi";
import AllUsers from "../AllUsers";

const Users = () => {
  const handlePagePrint = () => {
    window.print();
  };
  return (
    <Box>
      <Box>
        <Flex align="center" justify="space-between">
          <Text fontWeight={"semibold"} fontSize="1.5rem">
            Users
          </Text>

          <IconButton
            border="2px"
            w="5.8125rem"
            borderColor={"primary"}
            color="primary"
            aria-label="Export Data"
            fontWeight="700"
            icon={<BiExport />}
            _hover={{}}
            _active={{}}
            bgColor="transparent"
            onClick={handlePagePrint}
          />
        </Flex>

        <Box mt="1.875rem">
          <AllUsers />
        </Box>
      </Box>
    </Box>
  );
};

export default Users;
