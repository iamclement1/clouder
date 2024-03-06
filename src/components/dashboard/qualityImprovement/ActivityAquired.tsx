import LoadingSkeleton from "@/components/common/Skeleton";
import { ParamsType } from "@/utils/types";
import useQualityById from "@/hooks/useQualityById";
import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";

import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const ActivityAquired = () => {
  const noFeedBack = false;
  const router = useRouter();
  const { index } = useParams<ParamsType>();

  const { qualityById, isLoading } = useQualityById(index);

  if (isLoading) return <LoadingSkeleton />;

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
                <Text>{qualityById?.title}</Text>
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
                <Text>{qualityById?.challenges}</Text>
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
                <Text>{qualityById?.keyPositives}</Text>
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
                <Text> {qualityById?.doDifferently}</Text>
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
