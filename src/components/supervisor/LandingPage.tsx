import React from "react";
// import useAllUser from "@/hooks/useAllUser";
// import useSupervisorDashboard from "@/hooks/useSupervisorDashboard";
import { SupervisorCard } from "@/utils/data";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import AllUsers from "./AllUsers";

const LandingPage = () => {
  // const { data: AllUserProfile } = useAllUser();
  // const { data: Supervisor } = useSupervisorDashboard();

  // console.log(AllUserProfile?.data.data);

  // const { totalUsers, totalVerifiedUsers, totalActiveUsers } =
  //     Supervisor?.data.data || {};

  return (
    <Box>
      <Box my={"18px"}>
        <Box py="2.0625rem" bgColor="white" rounded="9px">
          <SimpleGrid columns={[1, 2, 3]} spacing="2rem">
            {SupervisorCard.map((card) => (
              <Flex
                key={card.id}
                align="center"
                justify={"center"}
                _notLast={{
                  borderRight: `${["1px"]}`,
                  borderRightColor: "#DFDCDC",
                }}
                gap="1.125rem"
                w="100%"
              >
                <Flex
                  align="center"
                  justify={"center"}
                  rounded="full"
                  bgColor="#BCDFEE"
                  boxSize="3.9375rem"
                >
                  {/* <Icon as={card?.icon} boxSize="1.9375rem" /> */}
                </Flex>
                <Box>
                  <Text color="#333333" fontSize="0.75rem">
                    {card?.title}
                  </Text>
                  <Text mt="0.5625rem" fontSize="1.8125rem" fontWeight={"bold"}>
                    {card?.num}
                  </Text>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Box mt="2.3125rem">
        <AllUsers />
      </Box>
    </Box>
  );
};

export default LandingPage;
