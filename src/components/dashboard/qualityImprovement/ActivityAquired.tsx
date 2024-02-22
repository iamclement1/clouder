// import LoadingSkeleton from "@/components/common/Skeleton";
// import useLeadershipById from "@/hooks/useLeadershipById";
// import { ParamsType } from "@/utils/types";
import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const ActivityAquired = () => {
  const noFeedBack = false;
  const router = useRouter();
  // const { index } = useParams<ParamsType>();

  // const { leadershipById, isLoading } = useLeadershipById(index);

  // if (isLoading) return <LoadingSkeleton />;

  return (
    <Box mb="4rem">
      <Box>
        <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1.88rem">
          Quality improvement activity (Morbidity/Mortality)
        </Text>

        {/* Leadership (Academic role) SECTION */}
        <Box mt="1.88rem">
          <Stack
            bgColor="white"
            p={["1rem", "2rem", "3.19rem"]}
            h="100%"
            rounded={"0.62713rem"}
            spacing={"3.75rem"}
          >
            {/* Experiences  */}
            <Box>
              <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                Experiences
              </Text>

              <Stack
                border={"1px"}
                borderColor={"rgba_6"}
                rounded={"0.75rem"}
                px="1.69rem"
                py="2rem"
              >
                <Text>
                  Improved communication and collaboration: M&M reviews often
                  involve a team approach, with multiple healthcare
                  professionals contributing to the analysis of a case. This has
                  improve communication and collaboration among healthcare team
                  members, leading to better patient outcomes.
                </Text>
              </Stack>
            </Box>

            {/* Challenges  */}
            <Box>
              <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                Challenges
              </Text>

              <Stack
                border={"1px"}
                borderColor={"rgba_6"}
                rounded={"0.75rem"}
                px="1.69rem"
                py="2rem"
              >
                <Text>
                  Difficulty in identifying root causes: Identifying the
                  underlying causes of an unexpected outcome or adverse event
                  can be challenging, particularly if there are multiple factors
                  involved. Fear of liability: M&M reviews can be associated
                  with a fear of liability or litigation, particularly if a
                  review reveals potential areas of liability.
                </Text>
              </Stack>
            </Box>
            {/* Key Positives  */}
            <Box>
              <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                Key Positives
              </Text>

              <Stack
                border={"1px"}
                borderColor={"rgba_6"}
                rounded={"0.75rem"}
                px="1.69rem"
                py="2rem"
              >
                {/* <Text>{leadershipById?.challenges}</Text> */}
                <Text>
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

            {/* What i would have done differently  */}
            <Box>
              <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                What i would have done differently
              </Text>

              <Stack
                border={"1px"}
                borderColor={"rgba_6"}
                rounded={"0.75rem"}
                px="1.69rem"
                py="2rem"
              >
                {/* <Text>{leadershipById?.keyPositives}</Text> */}
                <Text>
                  {" "}
                  Take a non-judgmental approach: It is important for me to take
                  a non-judgmental approach when reviewing cases. This means
                  focusing on the facts and circumstances surrounding the case,
                  rather than assigning blame or pointing fingers. Focus on
                  system issues: Rather than focusing solely on individual
                  errors or mistakes, i can use M&M reviews as an opportunity to
                  identify and address system issues that may have contributed
                  to an adverse event or unexpected outcome. Be open to
                  feedback: i would be open to feedback from my colleagues and
                  healthcare team members during the M&M review process. This
                  can help to identify areas where improvements can be made and
                  lead to better patient outcomes.
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
                    href={`/dashboard/leadership/request_feed_back/${"1234"}}`}
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
                              `/dashboard/leadership/request_feed_back/${"1234"}`,
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

export default ActivityAquired;
