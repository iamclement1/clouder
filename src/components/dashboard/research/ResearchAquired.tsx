import LoadingSkeleton from "@/components/common/Skeleton";
import useResearchById from "@/hooks/useResearchById";
import { ParamsType } from "@/utils/types";
import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";

import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const ResearchAquired = () => {
  const noFeedBack = false;
  const router = useRouter();
  const { index } = useParams<ParamsType>();

  const { researchById, isLoading } = useResearchById(index);

  if (isLoading) return <LoadingSkeleton />;

  return (
    <Box mb="4rem">
      <Box>
        <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1.88rem">
          Research
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
              {/* <Text fontWeight={"600"} fontSize={"1.5rem"} mb="1rem">
                {researchById?.title}
              </Text> */}

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
                    {researchById?.title}
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
                    {researchById?.year}
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
                    {researchById?.authors?.map(
                      (author: string, index: number) => (
                        <React.Fragment key={index}>
                          {index !== 0 && ", "}
                          {author}
                          {/* Add a dot after the last author */}
                          {index === researchById.authors.length - 1 && "."}
                        </React.Fragment>
                      ),
                    )}
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
                <Text>{researchById?.summary}</Text>
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
                <Text>{researchById?.findings}</Text>
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
