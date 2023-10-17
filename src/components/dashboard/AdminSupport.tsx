import { Box, Flex, Icon, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import Typography from "../common/Typograph";

import { ImAttachment } from "react-icons/im";
import CustomButton from "../common/CustomButton";

const AdminSupport = () => {
  return (
    <Box
      maxW={["100%", "22rem"]}
      minW={["100%", "22rem"]}
      // maxH="10rem"
      w="100%"
      overflowY={"hidden"}
      py="1.34rem"
      px="1.36rem"
      rounded={"0.54844rem"}
      style={{ border: "0.8px solid #DEEBFD" }}
      bgColor={"white"}
      boxShadow={
        "-7.02019px 10.53028px 15.79542px 0px rgba(218, 222, 232, 0.50)"
      }
    >
      <Typography fontSize={"0.9375rem"} fontWeight={"600"}>
        {" "}
        Logbook Entries
      </Typography>
      <Box mt="1.88rem">
        <Textarea
          placeholder="Type in your queries here..."
          minH="11rem"
          fontSize="0.76731rem"
          rounded="0.21925rem"
          style={{ border: "0.877px solid rgba(51, 51, 51, 0.30)" }}
          _focusVisible={{}}
          _focus={{}}
        />
      </Box>

      <Flex align="center" justify="space-between" mt="0.99rem">
        <Box>
          <Input type="file" accept="image/*" display="none" id="file-upload" />
          <label htmlFor="file-upload">
            <Flex
              gap="0.22rem"
              align="center"
              justify="space-between"
              cursor="pointer"
            >
              {" "}
              <Icon as={ImAttachment} boxSize="0.8rem" />{" "}
              <Text color="grey_2" fontSize="0.87688rem" fontWeight="500">
                Attach files
              </Text>{" "}
            </Flex>
          </label>
        </Box>

        <CustomButton w={"4.1rem"} h="2.2rem" fontSize={"0.75rem"}>
          {" "}
          Share
        </CustomButton>
      </Flex>
    </Box>
  );
};

export default AdminSupport;
