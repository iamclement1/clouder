import SidebarWithHeader from "@/components/common/Sidebar";
import Typography from "@/components/common/Typograph";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import QualificationForm from "./QualificationForm";
import { useQualification } from "@/context/QualificationProvider";

const Qualifications = () => {
  // const [qualificationData, setQualificationData] = useState<string[]>([]);
  const { fillForm, handleFillForm } = useQualification();
  return (
    <Box>
      <SidebarWithHeader passedActive="/dashboard/qualifications">
        <Box>
          <Typography variant="heading2">Qualifications</Typography>
        </Box>

        {fillForm ? (
          <QualificationForm />
        ) : (
          <Box mt="1rem" bgColor="white" minH="80vh" borderRadius="0.46875rem">
            <Flex align="center" justify="center" flexDir={"column"}>
              <Text fontSize="1.3125rem" color="grey_1" mt="3.75rem">
                {" "}
                You currently do not have any data supplied
              </Text>

              <Flex
                mt="1rem"
                gap="0.38rem"
                fontSize={"0.84375rem"}
                color="primary"
                cursor={"pointer"}
                align="center"
                fontWeight="600"
                onClick={() => handleFillForm(true)}
              >
                <Icon as={MdOutlineAddCircleOutline} /> Add qualifications
              </Flex>
            </Flex>
          </Box>
        )}
      </SidebarWithHeader>
    </Box>
  );
};
export default Qualifications;
