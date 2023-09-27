import { Box, Input } from "@chakra-ui/react";
import React, { useState, ChangeEvent } from "react";

const SearchBox = ({ ...props }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <Box w="100%" maxW="17rem" {...props}>
      <Input
        placeholder="search..."
        value={searchValue}
        onChange={(e) => handleChange(e)}
        bgColor={"white"}
        rounded={"0.23438rem"}
        h="1.8rem"
        fontSize={"0.65625rem"}
      />
    </Box>
  );
};

export default SearchBox;
