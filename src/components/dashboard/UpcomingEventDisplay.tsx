import React from "react";
import { MdCalendarMonth } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { Box, Divider, Flex, Icon, Text } from "@chakra-ui/react";

const UpcomingEventDisplay = () => {
  return (
    <Box mt="1.65rem">
      <Text fontSize="0.88rem" fontWeight={500}>
        Advanced Medical Workshop
      </Text>
      <Divider mt="0.88rem" borderColor="pink_1" />
      {/* eveent time and date  */}
      <Flex mt="1.1rem" gap="0.52rem">
        <Flex align="center" gap="0.22rem">
          <Icon as={MdCalendarMonth} color="grey_1" />
          <Text fontSize={"0.88rem"} color="grey_1" noOfLines={1}>
            15th AUG. 2023
          </Text>
        </Flex>
        <Divider
          orientation="vertical"
          borderColor={"rgba_5"}
          // border="1px"
          h="1.1rem"
        />

        <Flex align="center" gap="0.22rem">
          <Icon as={BiTimeFive} color="grey_1" />
          <Text fontSize={"0.88rem"} color="grey_1">
            05:00PM
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default UpcomingEventDisplay;
