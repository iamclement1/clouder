import SidebarWithHeader from "@/components/common/Sidebar";
import Typography from "@/components/common/Typograph";
import { Box, Flex, Icon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import QualificationForm from "./QualificationForm";
import { useQualification } from "@/context/QualificationProvider";
import CustomButton from "@/components/common/CustomButton";
import QualificationPreview from "./QualificationPreview";
// import { universitiesData } from "@/utils/data";

const Qualifications = () => {
  // const [qualificationData, setQualificationData] = useState<string[]>([]);
  const { fillForm, handleFillForm, preview, totalData } = useQualification();

  return (
    <Box>
      <SidebarWithHeader passedActive="/dashboard/qualifications">
        <Box pb="3rem">
          {preview ? (
            <QualificationPreview />
          ) : (
            <>
              <Flex align="center" justify="space-between" gap="1rem">
                <Typography variant="heading2">Qualifications</Typography>
                {totalData.length >= 1 && fillForm !== true && (
                  <CustomButton
                    bgColor={"transparent"}
                    border="1px"
                    borderColor="primary"
                    color="primary"
                    w="6rem"
                    h="2.1rem"
                    handleClick={() => handleFillForm(true)}
                  >
                    Add New
                  </CustomButton>
                )}
              </Flex>{" "}
              {fillForm ? (
                <QualificationForm />
              ) : (
                <Box
                  mt="1rem"
                  bgColor="white"
                  minH="80vh"
                  borderRadius="0.46875rem"
                >
                  {totalData.length >= 1 ? (
                    <Box py="2.44rem" px="2.39rem">
                      <Flex
                        justify="center"
                        align="center"
                        py="1.125rem"
                        w="100%"
                        rounded="0.375rem"
                        bgColor="grey_14"
                      >
                        <Text fontSize="1.125rem" fontWeight="700">
                          Qualification Entries
                        </Text>
                      </Flex>

                      <OrderedList mt="2.2rem">
                        {totalData.map((item) => {
                          return (
                            <ListItem color="grey_1" key={item.school}>
                              {`${item.school}
                                                            `}
                            </ListItem>
                          );
                        })}
                      </OrderedList>
                    </Box>
                  ) : (
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
                        <Icon as={MdOutlineAddCircleOutline} /> Add
                        qualifications
                      </Flex>
                    </Flex>
                  )}
                </Box>
              )}{" "}
            </>
          )}
        </Box>
      </SidebarWithHeader>
    </Box>
  );
};
export default Qualifications;
