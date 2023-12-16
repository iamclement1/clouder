import Typography from "@/components/common/Typograph";
import { Box, Flex, Icon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import QualificationForm from "./QualificationForm";
import { useQualification } from "@/context/QualificationProvider";
import CustomButton from "@/components/common/CustomButton";
import QualificationPreview from "./QualificationPreview";
import useQualifications from "@/hooks/useQualification";
import { QualificationProps } from "@/utils/types";

const Qualifications = () => {
  const { fillForm, handleFillForm, preview } = useQualification();

  const { data: qualificationsData, isLoading } = useQualifications();

  const qualification: QualificationProps[] = qualificationsData?.data?.data;

  if (isLoading) return <Box>Please wait, fetching your qualifications...</Box>;

  return (
    <Box>
      {/* <SidebarWithHeader passedActive="/dashboard/qualifications"> */}
      <Box pb="3rem">
        {preview ? (
          <QualificationPreview />
        ) : (
          <>
            <Flex align="center" justify="space-between" gap="1rem">
              <Typography variant="heading2">Qualifications</Typography>
              {qualification?.length >= 1 && fillForm !== true && (
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
                {qualification?.length >= 1 ? (
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
                      {qualification?.map((item) => {
                        return (
                          <ListItem
                            color="grey_1"
                            key={item?.education[0]?.institution}
                          >
                            {`${item.education[0]?.institution}
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
                      <Icon as={MdOutlineAddCircleOutline} /> Add qualifications
                    </Flex>
                  </Flex>
                )}
              </Box>
            )}{" "}
          </>
        )}
      </Box>
      {/* </SidebarWithHeader> */}
    </Box>
  );
};
export default Qualifications;
