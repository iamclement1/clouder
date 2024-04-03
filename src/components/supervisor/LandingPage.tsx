import React from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import AllUsers from "./AllUsers";
import { FiUsers } from "react-icons/fi";
import { SupervisorCardType } from "@/utils/types";
import useSupervisorDashboard from "@/hooks/useSupervisorDashboard";
import LoadingSkeleton from "../common/Skeleton";

const LandingPage = () => {
  const { data: Supervisor, isLoading } = useSupervisorDashboard();

  const { totalUsers, totalVerifiedUsers, totalActiveUsers } =
    Supervisor?.data.data || {};

  const SupervisorCard: Array<SupervisorCardType> = [
    {
      id: 1,
      icon: FiUsers,
      title: "Total Users",
      num: totalUsers,
    },
    {
      id: 2,
      icon: FiUsers,
      title: "Total Verified Users",
      num: totalVerifiedUsers,
    },
    {
      id: 3,
      icon: FiUsers,
      title: "Total Active Users",
      num: totalActiveUsers,
    },
  ];

  if (isLoading) return <LoadingSkeleton />;
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
