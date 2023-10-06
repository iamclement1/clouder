import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const DashboardType = () => {
  const [currentType, setCurrentType] = useState<string>("Medical student");
  return (
    <Box>
      <Menu matchWidth>
        <MenuButton
          as={Button}
          display={"flex"}
          alignItems="center"
          gap="0.31rem"
          bgColor={"green_2"}
          _hover={{}}
          _focus={{}}
          _active={{}}
          color="white"
          fontSize={"0.75rem"}
          rightIcon={<BsChevronDown />}
        >
          {currentType}
          {/* <Icon
                        as={BsChevronDown}
                        boxSize={"0.9rem"}
                        color={"white"}
                    /> */}
        </MenuButton>
        <MenuList minW="8rem" fontSize={"0.75rem"}>
          <MenuItem onClick={() => setCurrentType("Medical student")}>
            Medical student
          </MenuItem>
          <MenuItem onClick={() => setCurrentType("Another Student")}>
            Another Student
          </MenuItem>{" "}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default DashboardType;
