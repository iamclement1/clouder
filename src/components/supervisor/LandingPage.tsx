import React from "react";
import useAllUser from "@/hooks/useAllUser";
import useSupervisorDashboard from "@/hooks/useSupervisorDashboard";
import { SupervisorCard } from "@/utils/data";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const LandingPage = () => {
  const { data: AllUserProfile } = useAllUser();
  const { data: Supervisor } = useSupervisorDashboard();

  console.log(AllUserProfile?.data.data);

  const { totalUsers, totalVerifiedUsers, totalActiveUsers } =
    Supervisor?.data.data || {};

  return (
    <Box>
      <Card my={"18px"}>
        <CardBody>
          <Flex>
            {SupervisorCard.map((card) => (
              <Box key={card.id}>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                  <Box>
                    <Text fontSize={"12px"}>{card.title}</Text>
                    {card.title === "Total Users" && (
                      <Text fontSize={"3xl"} fontWeight={"extrabold"}>
                        {totalUsers}
                      </Text>
                    )}
                    {card.title === "Total Verified Users" && (
                      <Text fontSize={"3xl"} fontWeight={"extrabold"}>
                        {totalVerifiedUsers}
                      </Text>
                    )}
                    {card.title === "Total Active Users" && (
                      <Text fontSize={"3xl"} fontWeight={"extrabold"}>
                        {totalActiveUsers}
                      </Text>
                    )}
                  </Box>
                </Grid>
              </Box>
            ))}
          </Flex>
        </CardBody>
      </Card>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LandingPage;