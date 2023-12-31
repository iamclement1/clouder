import CustomButton from "@/components/common/CustomButton";
import Typography from "@/components/common/Typograph";
import StatusModal from "@/components/modals/StatusModal";
import { useQualification } from "@/context/QualificationProvider";
import useQualificationMutation from "@/hooks/useQualificationMutation";
import { Box, Flex, Text, Icon, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
const QualificationPreview = () => {
  const {
    handleFormSteps,
    handleFillForm,
    qualificationData,
    handlePreview,
    handleTotalData,
  } = useQualification();

  const { handleSubmitQualification, isLoading } = useQualificationMutation();

  const payload = {
    education: [
      {
        degree: qualificationData?.degree,
        year: qualificationData?.year,
        institution: qualificationData?.school,
        certificate: qualificationData?.imageFile,
      },
    ],
    challenges: qualificationData?.challenges,
    keyPositives: qualificationData?.key_points,
    doDifferently: qualificationData?.differentAction,
  };

  const handleSubmit = () => {
    handleSubmitQualification(payload);
  };

  const {
    isOpen: isOpenStatusModal,
    onOpen: onOpenStatusModal,
    onClose: onCloseStatusModal,
  } = useDisclosure();

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
              Qualifications
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
              <Flex gap="0.38rem">
                <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                  Institution:
                </Text>

                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {qualificationData?.school}
                </Text>
              </Flex>
              <Flex gap="0.38rem">
                <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                  Degree:
                </Text>
                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {qualificationData?.degree}
                </Text>
              </Flex>
              <Flex gap="0.38rem">
                <Text fontSize="1.125rem" fontWeight="600" color="grey_1">
                  Year of graduation:
                </Text>
                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {qualificationData?.year}
                </Text>
              </Flex>
            </Stack>
          </Box>

          {/* Challenges   */}
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
                {/* <Flex>{qualificationData.challenges}</Flex> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: qualificationData?.challenges,
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
                  handleFormSteps(2);
                }}
              />
            </Flex>
            <Box mt="1.88rem">
              <Stack>
                {/* <Flex>{qualificationData.key_points}</Flex> */}

                <div
                  dangerouslySetInnerHTML={{
                    __html: qualificationData?.key_points,
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
                  handleFormSteps(2);
                }}
              />
            </Flex>
            <Box mt="1.88rem">
              <Stack>
                {/* <Flex>
                                    {qualificationData?.differentAction}
                                </Flex> */}

                <div
                  dangerouslySetInnerHTML={{
                    __html: qualificationData?.differentAction,
                  }}
                />
              </Stack>
            </Box>
          </Box>

          <Flex mt="3.75rem" align="center" justify="center">
            <CustomButton
              maxW="26.6rem"
              isLoading={isLoading}
              handleClick={() => handleSubmit()}
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

export default QualificationPreview;
