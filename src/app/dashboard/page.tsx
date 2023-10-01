"use client";
import SidebarWithHeader from "@/components/common/Sidebar";
import Typography from "@/components/common/Typograph";
import AdminSupport from "@/components/dashboard/AdminSupport";
import LogBookEntries from "@/components/dashboard/LogBookEntries";
import TodayActivities from "@/components/dashboard/TodayActivities";
import UpcomingEvent from "@/components/dashboard/UpcomingEvent";

import { Box, Button, Flex, Icon, Image, SimpleGrid } from "@chakra-ui/react";

import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Dashboard = () => {
  return (
    <SidebarWithHeader passedActive="/dashboard">
      <Box pb="3.23rem">
        {/* Greetings section */}
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

        {/* DaSboard CoMponents */}
        <Box>
          <SimpleGrid columns={[1, 2, null, 3]} mt="1.88rem" spacing="1.2rem">
            <TodayActivities />
            <LogBookEntries />

            <UpcomingEvent />
          </SimpleGrid>

          <Flex mt={["3rem"]} flexDir={["column", "row"]} gap="1.22rem">
            <Box flexShrink={1}>
              <Image
                src="/graph.svg"
                alt="graph demo"
                maxH="22.4rem"
                maxW="44.5rem"
                w="100%"
              />
            </Box>

            <AdminSupport />
          </Flex>
        </Box>
      </Box>
    </SidebarWithHeader>
  );
};

export default Dashboard;
