import Typography from "@/components/common/Typograph";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
// import { BsCheckCircleFill } from "react-icons/bs";
import { IoAlarmOutline } from "react-icons/io5";

const Notifications = () => {
  return (
    <Box>
      <Typography variant="heading3"> Today, 25th April 2023 </Typography>
      <Box mt="1.12rem">
        <Stack spacing={"0.47rem"}>
          <NotificationLine />
          <NotificationLine />
          <NotificationLine />
        </Stack>
      </Box>
    </Box>
  );
};

export default Notifications;

const NotificationLine = () => {
  return (
    <Flex py="0.47rem" gap="0.75rem" align="center">
      <Flex
        align="center"
        justify="center"
        rounded="full"
        minW="2rem"
        minH="2rem"
        bgColor="rgba_4"
        cursor={"pointer"}
      >
        <Icon
          // as={true ? IoAlarmOutline : BsCheckCircleFill}
          as={IoAlarmOutline}
          boxSize="0.94rem"
          color="grey_1"
          opacity="60%"
        />
      </Flex>
      <Text fontSize="0.84375rem" color="grey_10" noOfLines={1}>
        A message from clouder
      </Text>
    </Flex>
  );
};
