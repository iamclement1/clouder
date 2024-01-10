import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const ResearchAquired = () => {
  const noFeedBack = false;
  const router = useRouter();
  return (
    <Box mb="4rem">
      <Box>
        <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1.88rem">
          Research Title
        </Text>

        {/* Research TitleSECTION */}
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
                Research Title
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
                    fontWeight="400"
                    // color="grey_1"
                  >
                    Effects of Physical Exercise on Mental Health in Adults: A
                    Randomized Controlled Trial
                  </Text>
                </Flex>
                <Flex gap="0.38rem">
                  <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                    Year:
                  </Text>
                  <Text
                    fontSize="1.125rem"
                    fontWeight="400"
                    // color="grey_1"
                  >
                    29/07/2021
                  </Text>
                </Flex>
                <Flex gap="0.38rem">
                  <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                    Authors:
                  </Text>
                  <Text
                    fontSize="1.125rem"
                    fontWeight="400"
                    // color="grey_1"
                  >
                    John Doe, Dayo Alabi
                  </Text>
                </Flex>
              </Stack>
            </Box>

            {/* Challenges  */}
            <Box>
              <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                Research Summary
              </Text>

              <Stack
                border={"1px"}
                borderColor={"rgba_6"}
                rounded={"0.75rem"}
                px="1.69rem"
                py="2rem"
              >
                <Text>
                  The researchers conducted a randomized controlled trial with a
                  total of 200 adults aged 25-45 years. The participants were
                  randomly assigned to either an exercise group or a control
                  group. The exercise group participated in supervised physical
                  exercise sessions three times a week for a duration of 12
                  weeks, while the control group maintained their usual daily
                  activities without any structured exercise intervention.
                </Text>
              </Stack>
            </Box>
            {/* What you learnt from the Research  */}
            <Box>
              <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                What you learnt from the Research
              </Text>

              <Stack
                border={"1px"}
                borderColor={"rgba_6"}
                rounded={"0.75rem"}
                px="1.69rem"
                py="2rem"
              >
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam nihil tenetur facilis iure aperiam quod, minima
                  voluptatem fugiat iusto dolorum ab inventore ad corrupti
                  tempora hic similique, dolor molestiae magni!
                </Text>
              </Stack>
            </Box>

            {/* Key Positives  */}
            <Box>
              <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                Area to focus on for more Clinical Research
              </Text>

              <Stack
                border={"1px"}
                borderColor={"rgba_6"}
                rounded={"0.75rem"}
                px="1.69rem"
                py="2rem"
              >
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam nihil tenetur facilis iure aperiam quod, minima
                  voluptatem fugiat iusto dolorum ab inventore ad corrupti
                  tempora hic similique, dolor molestiae magni!
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
                    href={`/dashboard/research/request_feed_back/${"1234"}}`}
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

export default ResearchAquired;
