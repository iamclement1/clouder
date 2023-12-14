import Typography from "@/components/common/Typograph";
import { Box, Flex, Icon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

import CustomButton from "@/components/common/CustomButton";
import { useCourses } from "@/context/CoursesProvider";
import CoursesPreview from "./CoursesPreview";
import CoursesForm from "./CoursesForm";
import { useRouter } from "next/navigation";

const Courses = () => {
  const { fillForm, handleFillForm, preview, totalData } = useCourses();
  const router = useRouter();
  return (
    <Box>
      <Box pb="3rem">
        {preview ? (
          <CoursesPreview />
        ) : (
          <>
            <Flex align="center" justify="space-between" gap="1rem">
              <Typography variant="heading2">Courses</Typography>
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
              <CoursesForm />
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
                        Courses Entries
                      </Text>
                    </Flex>

                    <OrderedList mt="2.2rem">
                      {totalData.map((item) => {
                        return (
                          <ListItem
                            color="grey_1"
                            key={item.school}
                            fontSize="1.125rem"
                            fontWeight="600"
                            display="flex"
                            alignItems="center"
                            justifyContent={"space-between"}
                          >
                            <Text>{`${item.school}
                                                            `}</Text>

                            <Text
                              bgColor="danger_2"
                              fontSize="0.75rem"
                              color="danger_1"
                              fontWeight="normal"
                              w="fit-content"
                              p="0.8rem 1rem"
                              rounded={"1.35938rem"}
                              cursor="pointer"
                              onClick={() => {
                                router.push(
                                  "/dashboard/courses/request_feed_back",
                                );
                              }}
                              // as="a"
                              // href="/request_feed_back"
                            >
                              Request feedback
                            </Text>
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
                      <Icon as={MdOutlineAddCircleOutline} /> Add Courses
                    </Flex>
                  </Flex>
                )}
              </Box>
            )}{" "}
          </>
        )}
      </Box>
    </Box>
  );
};
export default Courses;