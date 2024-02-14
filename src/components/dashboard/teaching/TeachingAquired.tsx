// import LoadingSkeleton from "@/components/common/Skeleton";
// import useCoursesById from "@/hooks/useCoursesById";
// import { ParamsType } from "@/utils/types";
import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const TeachingAquired = () => {
  const noFeedBack = true;
  const router = useRouter();

  // const { index } = useParams<ParamsType>();

  // const { coursesById, isLoading } = useCoursesById(index);
  // if (isLoading) return <LoadingSkeleton />;
  return (
    <Box mb="4rem">
      <Box>
        <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1.88rem">
          Courses
        </Text>

        {/* QUALIFICATION SECTION */}
        <Box mt="1.88rem">
          <Stack
            bgColor="white"
            p={["1rem", "2rem", "3.19rem"]}
            h="100%"
            rounded={"0.62713rem"}
            spacing={"3.75rem"}
          >
            {/* Education  */}
            <Box>
              <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                Teaching Title
              </Text>

              <Stack
                border={"1px"}
                borderColor={"rgba_6"}
                rounded={"0.75rem"}
                px="1.69rem"
                py="2rem"
              >
                <Flex gap="0.38rem">
                  <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                    Title:
                  </Text>

                  <Text
                    fontSize="1.125rem"
                    fontWeight="600"
                    // color="grey_1"
                  >
                    {/* {coursesById?.courseTitle} */}
                    Malaria
                  </Text>
                </Flex>
                <Flex gap="0.38rem">
                  <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                    Year:
                  </Text>
                  <Text
                    fontSize="1.125rem"
                    fontWeight="600"
                    // color="grey_1"
                  >
                    {/* {coursesById?.institution} */}
                    20/10/2020
                  </Text>
                </Flex>
                {/* Qualification:  */}

                <Flex gap="0.38rem">
                  <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                    Qualification:
                  </Text>
                </Flex>
                <Flex gap="0.38rem">
                  <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                    Year:
                  </Text>
                  <Text
                    fontSize="1.125rem"
                    fontWeight="600"
                    // color="grey_1"
                  >
                    {/* {coursesById?.year} */}
                    20/10/2020
                  </Text>
                </Flex>
              </Stack>
            </Box>

            {/* Challenges  */}
            <Box>
              <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                Teaching Summary
              </Text>

              <Stack
                border={"1px"}
                borderColor={"rgba_6"}
                rounded={"0.75rem"}
                px="1.69rem"
                py="2rem"
              >
                <Text>
                  {/* {coursesById?.challenges} */}
                  History of Present Illness: The patient, a 32-year-old male
                  travel photographer, presents with a chief complaint of high
                  fever, chills, and body aches for the past two days. He
                  recently returned from a month-long photography assignment in
                  a malaria-endemic region of sub-Saharan Africa. The symptoms
                  started approximately one week after his return. The patient
                  describes the fever as intermittent, with peaks occurring
                  every 48 hours. He experiences severe chills during the
                  febrile episodes, accompanied by profuse sweating afterward.
                  He reports feeling fatigued and complains of generalized body
                  aches, headaches, and a decreased appetite. He denies
                  experiencing any cough, sore throat, or respiratory symptoms.
                  Upon further inquiry, the patient admits to not taking any
                  prophylactic antimalarial medication during his trip. He did
                  use mosquito repellent but recalls several mosquito bites
                  throughout his stay. He also stayed in basic accommodations
                  without air conditioning and frequently ventured into rural
                  areas with dense vegetation.
                </Text>
              </Stack>
            </Box>

            {/* Key Positives  */}
            <Box>
              <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                Key Takeaways
              </Text>

              <Stack
                border={"1px"}
                borderColor={"rgba_6"}
                rounded={"0.75rem"}
                px="1.69rem"
                py="2rem"
              >
                <Text>
                  {/* {coursesById?.keyPositives} */}
                  Improved patient safety: By identifying areas where
                  improvements can be made and implementing changes to clinical
                  practice, M&M reviews can ultimately lead to improved patient
                  safety and better patient outcomes. Enhanced quality of care:
                  M&M reviews can help healthcare organizations identify areas
                  where the quality of care can be improved. This can lead to
                  changes in clinical protocols, improved communication among
                  healthcare team members, and increased staff training.
                  Increased collaboration and teamwork: M&M reviews often
                  involve a team approach, with multiple healthcare
                  professionals contributing to the analysis of a case. This can
                  improve collaboration and teamwork among healthcare team
                  members.
                </Text>
              </Stack>
            </Box>

            {/*  *********  Feed back Section ***************  */}

            <Box>
              <Flex align={"center"} justify={"space-between"}>
                <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                  Feedbacks
                </Text>

                {noFeedBack && (
                  <Button
                    w={"fit-content"}
                    h="2.2rem"
                    fontSize={"0.75rem"}
                    bgColor={"transparent"}
                    color="primary"
                    border={"1px"}
                    borderColor={"primary"}
                    as="a"
                    href={`/dashboard/courses/request_feed_back/${"1234"}}`}
                  >
                    Request feedback
                  </Button>
                )}
              </Flex>

              <Stack
                mt="1.12rem"
                border={"1px"}
                borderColor={"rgba_6"}
                rounded={"0.75rem"}
                px="1.69rem"
                py="2rem"
              >
                <Text>
                  {noFeedBack ? (
                    "No feedback available at the moment."
                  ) : (
                    <Box>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Consequuntur sit voluptatibus aut libero, vel quam tempora
                      expedita eos excepturi. Delectus recusandae omnis
                      voluptatibus maiores culpa sint molestiae ullam temporibus
                      aut.
                      <Flex align="center" justify={"center"} mt="1.89rem">
                        <Flex
                          mt="1rem"
                          gap="0.38rem"
                          fontSize={"0.84375rem"}
                          color="primary"
                          cursor={"pointer"}
                          align="center"
                          fontWeight="600"
                          onClick={() =>
                            router.push(
                              `/dashboard/teaching/request_feed_back/${"1234"}`,
                            )
                          }
                        >
                          <Icon as={MdOutlineAddCircleOutline} /> Request for
                          Additional feedback
                        </Flex>
                      </Flex>
                    </Box>
                  )}
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default TeachingAquired;
