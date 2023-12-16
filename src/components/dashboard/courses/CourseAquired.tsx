import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const CourseAquired = () => {
  const noFeedBack = false;
  const router = useRouter();
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
                Courses Acquired
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
                    Course title:
                  </Text>

                  <Text
                    fontSize="1.125rem"
                    fontWeight="600"
                    // color="grey_1"
                  >
                    Residency and fellowship program
                  </Text>
                </Flex>
                <Flex gap="0.38rem">
                  <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                    Institution:
                  </Text>
                  <Text
                    fontSize="1.125rem"
                    fontWeight="600"
                    // color="grey_1"
                  >
                    Harvard
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
                    2019
                  </Text>
                </Flex>

                <Flex gap="0.38rem">
                  <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                    Certificate no:
                  </Text>
                  <Text
                    fontSize="1.125rem"
                    fontWeight="600"
                    // color="grey_1"
                  >
                    123444589
                  </Text>
                </Flex>
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
                Key Positives
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
                              `/dashboard/courses/request_feed_back/${"1234"}`,
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

export default CourseAquired;
