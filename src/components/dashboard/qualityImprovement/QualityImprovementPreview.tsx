import CustomButton from "@/components/common/CustomButton";
import Typography from "@/components/common/Typograph";

import { useQualityImprovement } from "@/context/QualityImprovement";
import useQualityMutation from "@/hooks/useQualityMutation";
import { QualityPayloadType } from "@/utils/types";
import {
  Box,
  Flex,
  Text,
  Icon,
  Stack,
  //  useDisclosure
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const QualityImprovementPreview = () => {
  const [type, setType] = useState("");

  const {
    handleFormSteps,
    handleFillForm,
    qualityImprovementData,
    handlePreview,
    activityType,
  } = useQualityImprovement();

  useEffect(() => {
    let newType = "";
    switch (activityType) {
      case "Morbidity & Mortality":
        newType = "morbidity";
        break;
      case "Clinical Audit":
        newType = "clinical";
        break;
      case "Case Review":
        newType = "case";
        break;
      default:
        break;
    }
    setType(newType);
  }, [activityType]);

  const { isLoading, handleSubmitQuality } = useQualityMutation();

  const payload: QualityPayloadType = {
    title: qualityImprovementData?.qualityImprovementTitle,
    year: qualityImprovementData?.year,
    details: qualityImprovementData?.experience,
    challenges: qualityImprovementData?.challenges,
    keyPositives: qualityImprovementData?.key_points,
    doDifferently: qualityImprovementData?.differentAction,
    type: type,
  };

  const handleSubmit = () => {
    handleSubmitQuality(payload);
  };

  return (
    <Box>
      <Flex align="center" justify="space-between" gap="1rem">
        <Typography variant="heading2">Preview</Typography>

        <CustomButton
          bgColor={"transparent"}
          border="1px"
          borderColor="grey_1"
          color="grey_1"
          w="7.4rem"
          h="2.4rem"
          handleClick={() => handlePreview(false)}
        >
          <Icon as={MdOutlineCancel} mr="0.38rem" />
          Cancel
        </CustomButton>
      </Flex>{" "}
      <Box>
        <Box
          mt="1.69rem"
          bgColor="white"
          minH="80vh"
          borderRadius="0.46875rem"
          px={["10px", "3.33rem"]}
          py={["10px", "3.05rem"]}
        >
          <Flex align="center" justify="space-between">
            <Text fontSize="1.5rem" fontWeight="700">
              Quality improvement activity ({activityType})
            </Text>
            <Icon
              as={TbEdit}
              cursor="pointer"
              boxSize="1.6rem"
              onClick={() => {
                handlePreview(false);
                handleFillForm(true);
                handleFormSteps(1);
              }}
            />
          </Flex>
          <Box mt="1.88rem">
            <Stack>
              <Flex gap="0.38rem" align="center">
                <Text fontSize="0.9rem" fontWeight="600" color="grey_1">
                  Activity title:
                </Text>

                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {qualityImprovementData?.qualityImprovementTitle}
                </Text>
              </Flex>
              <Flex gap="0.38rem" align="center">
                <Text fontSize="0.9rem" fontWeight="600" color="grey_1">
                  Year:
                </Text>
                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {qualityImprovementData?.year}
                </Text>
              </Flex>
              {/* <Flex gap="0.38rem" align="center">
                                <Text
                                    fontSize="0.9rem"
                                    fontWeight="600"
                                    color="grey_1"
                                >
                                    End year:{" "}
                                </Text>
                                <Text
                                    fontSize="1.125rem"
                                    fontWeight="600"
                                    // color="grey_1"
                                >
                                    {qualityImprovementData?.endYear}
                                </Text>
                            </Flex> */}
              Data Collection{" "}
            </Stack>
          </Box>

          {/* Challenges   */}
          <Box mt="3rem">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.5rem" fontWeight="700">
                Experiences
              </Text>
              <Icon
                as={TbEdit}
                cursor="pointer"
                boxSize="1.6rem"
                onClick={() => {
                  handlePreview(false);
                  handleFillForm(true);
                  handleFormSteps(1);
                }}
              />
            </Flex>
            <Box mt="1.88rem">
              <Stack>
                <div
                  dangerouslySetInnerHTML={{
                    __html: qualityImprovementData?.experience,
                  }}
                />
              </Stack>
            </Box>
          </Box>
          {/* // Challenges */}
          <Box mt="3rem">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.5rem" fontWeight="700">
                Challenges
              </Text>
              <Icon
                as={TbEdit}
                cursor="pointer"
                boxSize="1.6rem"
                onClick={() => {
                  handlePreview(false);
                  handleFillForm(true);
                  handleFormSteps(2);
                }}
              />
            </Flex>
            <Box mt="1.88rem">
              <Stack>
                <div
                  dangerouslySetInnerHTML={{
                    __html: qualityImprovementData?.challenges,
                  }}
                />
              </Stack>
            </Box>
          </Box>

          {/* Key Positives   */}
          <Box mt="3rem">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.5rem" fontWeight="700">
                Key Positives
              </Text>
              <Icon
                as={TbEdit}
                cursor="pointer"
                boxSize="1.6rem"
                onClick={() => {
                  handlePreview(false);
                  handleFillForm(true);
                  handleFormSteps(3);
                }}
              />
            </Flex>
            <Box mt="1.88rem">
              <Stack>
                <div
                  dangerouslySetInnerHTML={{
                    __html: qualityImprovementData?.key_points,
                  }}
                />
              </Stack>
            </Box>
          </Box>

          {/* What i would have done differently   */}

          <Box mt="3rem">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.5rem" fontWeight="700">
                What i would have done differently
              </Text>
              <Icon
                as={TbEdit}
                cursor="pointer"
                boxSize="1.6rem"
                onClick={() => {
                  handlePreview(false);
                  handleFillForm(true);
                  handleFormSteps(4);
                }}
              />
            </Flex>
            <Box mt="1.88rem">
              <Stack>
                <div
                  dangerouslySetInnerHTML={{
                    __html: qualityImprovementData?.differentAction,
                  }}
                />
              </Stack>
            </Box>
          </Box>

          <Flex mt="3.75rem" align="center" justify="center">
            <CustomButton
              maxW="26.6rem"
              isLoading={isLoading}
              handleClick={handleSubmit}
            >
              Save
            </CustomButton>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default QualityImprovementPreview;
