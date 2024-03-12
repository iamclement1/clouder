import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const UserDetails = () => {
  const userData = [
    { id: 1, label: "Full name", value: "Tunde Idiagbon" },
    { id: 2, label: "Subscription plan", value: "Infinite" },
    { id: 3, label: "Email address", value: "Salshi@yahoo.com" },
    { id: 4, label: "Subscription Amount", value: "31,999.00" },
    { id: 1, label: "Phone number", value: "07030075660" },
    { id: 1, label: "Location", value: "Kwara state" },
  ];

  return (
    <Box>
      <Box w="150px" h="150px" rounded={"full"} overflow="hidden" mx="auto">
        <Image
          src="/userImage.svg"
          alt=""
          maxW="100%"
          h="100%"
          objectFit={"cover"}
        />
      </Box>

      <Box mt="3.75rem">
        <SimpleGrid columns={[1, 2]} spacing={["1rem", "1.875rem"]}>
          {userData.map((item) => {
            return (
              <Box key={item?.id}>
                <Text color="#333333" fontSize="0.75rem">
                  {item?.label}
                </Text>
                <Flex
                  mt="0.3125rem"
                  align="center"
                  py="0.75rem"
                  px="0.875rem"
                  border="1px solid rgba(51,51,51,.5)"
                  rounded="5px"
                >
                  <Text fontWeight="medium">{item?.value}</Text>
                </Flex>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default UserDetails;
