import CustomButton from "@/components/common/CustomButton";
import Typography from "@/components/common/Typograph";
import StatusModal from "@/components/modals/StatusModal";

import { useResearch } from "@/context/ResearchProvider";
import useResearchMutation from "@/hooks/useResearchMutation";
import { ResearchPayloadTypes } from "@/utils/types";
import {
  Box,
  Flex,
  Text,
  Icon,
  Stack,
  useDisclosure,
  //  useDisclosure
} from "@chakra-ui/react";

import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const ResearchPreview = () => {
  // const queryClient = useQueryClient();

  const {
    handleFormSteps,
    handleFillForm,
    researchData,
    handlePreview,
    handleTotalData,
  } = useResearch();

  console.log("research data: ", researchData);
  const { isLoading, handleSubmitResearch } = useResearchMutation();

  const payload: ResearchPayloadTypes = {
    title: researchData?.researchTittle,
    year: researchData?.year,
    authors: [
      researchData?.author,
      researchData?.authorII,
      researchData?.authorIII,
      researchData?.authorIV,
    ],
    summary: researchData?.summary,
    findings: researchData?.differentAction,
    area: researchData?.researchArea,
    beneficiary: researchData?.researchBeneficials,
  };

  console.log(payload);
  const {
    isOpen: isOpenStatusModal,
    onOpen: onOpenStatusModal,
    onClose: onCloseStatusModal,
  } = useDisclosure();

  const handleSubmit = () => {
    handleSubmitResearch(payload);
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
              Research
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
                  Title:
                </Text>

                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {researchData?.researchTittle}
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
                  {researchData?.year}
                </Text>
              </Flex>
              <Flex gap="0.38rem" align="center">
                <Text fontSize="0.9rem" fontWeight="600" color="grey_1">
                  Authors:{" "}
                </Text>
                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {researchData?.author}
                </Text>
              </Flex>{" "}
            </Stack>
          </Box>

          {/* Challenges   */}
          <Box mt="3rem">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.5rem" fontWeight="700">
                Research Summary
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
                    __html: researchData?.summary,
                  }}
                />
              </Stack>
            </Box>
          </Box>
          {/* // Challenges */}
          <Box mt="3rem">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.5rem" fontWeight="700">
                What you learnt from the Research
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
                    __html: researchData?.researchBeneficials,
                  }}
                />
              </Stack>
            </Box>
          </Box>

          {/* Key Positives   */}
          <Box mt="3rem">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.5rem" fontWeight="700">
                Areas to focus on for more Clinical Research
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
                    __html: researchData?.researchArea,
                  }}
                />
              </Stack>
            </Box>
          </Box>

          {/* What i would have done differently   */}

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
      {/* Available Status */}
      <StatusModal
        isOpen={isOpenStatusModal}
        onOpen={onOpenStatusModal}
        onClose={onCloseStatusModal}
        status="success"
        handleTotalData={handleTotalData}
        handleFormSteps={handleFormSteps}
        handleFillForm={handleFillForm}
        handlePreview={handlePreview}
      />
    </Box>
  );
};

export default ResearchPreview;
