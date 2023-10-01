"use client";
import SidebarWithHeader from "@/components/common/Sidebar";
import Typography from "@/components/common/Typograph";
import TodayActivities from "@/components/dashboard/TodayActivities";

import { Box, Button, Flex, Icon, SimpleGrid } from "@chakra-ui/react";

import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Dashboard = () => {
  return (
    <SidebarWithHeader passedActive="/dashboard">
      <Box>
        <Flex align="center" justify={"space-between"} gap="1rem">
          <Typography variant="heading2">
            {" "}
            Welcome to your Dashboard{" "}
          </Typography>

          <Button
            display={"flex"}
            gap="0.31rem"
            bgColor={"green_2"}
            _hover={{}}
            _focus={{}}
            color="white"
            fontSize={"0.75rem"}
          >
            Medical student{" "}
            <Icon as={BsChevronDown} boxSize={"0.9rem"} color={"white"} />
          </Button>
        </Flex>

        <SimpleGrid columns={3} mt="1.88rem" spacing="1.2rem">
          <TodayActivities />
        </SimpleGrid>
      </Box>
    </SidebarWithHeader>
  );
};

export default Dashboard;
