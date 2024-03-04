import CustomButton from "@/components/common/CustomButton";
import Typography from "@/components/common/Typograph";
import StatusModal from "@/components/modals/StatusModal";
import { useLogbook } from "@/context/LogbookProvider";
import useLogbookMutation from "@/hooks/useLogbookMutation";

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

const LogbookPreview = () => {
  const {
    handleFormSteps,
    handleFillForm,
    logbookData,
    handlePreview,
    handleTotalData,
    logBookMode,
  } = useLogbook();

  const {
    isOpen: isOpenStatusModal,
    onOpen: onOpenStatusModal,
    onClose: onCloseStatusModal,
  } = useDisclosure();

  const { handleSubmitLogbook, isLoading } = useLogbookMutation();

  const payload = {
    action: logbookData?.role,
    summary: logbookData?.summary,
    firstTitle: logbookData?.logbookTittle,
    challenges: logbookData?.challenges,
    firstYear: logbookData?.year,
    secondTitle: logbookData?.caseTittle,
    secondYear: logbookData?.caseYear,
    doDifferently: logbookData?.differentAction,
    keyPositives: logbookData?.key_points,
    logBookType: logBookMode,
  };

  const handleSubmit = () => {
    handleSubmitLogbook(payload);
  };

  console.log("log book payload ==>", payload);
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
              Logbook ({logBookMode?.split(" ")[0]})
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
          </Flex>{" "}
          <Box mt="1.88rem">
            <Stack>
              <Stack>
                <Flex gap="0.38rem" align="center">
                  <Text fontSize="0.9rem" fontWeight="600" color="grey_1">
                    Procedure
                  </Text>

                  <Text
                    fontSize="1.125rem"
                    fontWeight="600"
                    // color="grey_1"
                  >
                    ({logbookData.role})
                  </Text>
                </Flex>

                <Flex gap="0.38rem" align="center">
                  <Text fontSize="0.9rem" fontWeight="600" color="grey_1">
                    Title:
                  </Text>

                  <Text
                    fontSize="1.125rem"
                    fontWeight="600"
                    // color="grey_1"
                  >
                    {logbookData?.logbookTittle}
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
                    {logbookData?.year}
                  </Text>
                </Flex>
              </Stack>
              {/* Case Presentation */}
              <Flex align="center" justify="space-between">
                <Text fontSize="1.5rem" fontWeight="700">
                  Case Presentation
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
                    ({logbookData.caseTittle})
                  </Text>
                </Flex>

                <Flex gap="0.38rem" align="center">
                  <Text fontSize="0.9rem" fontWeight="600" color="grey_1">
                    Year
                  </Text>

                  <Text
                    fontSize="1.125rem"
                    fontWeight="600"
                    // color="grey_1"
                  >
                    {logbookData?.caseYear}
                  </Text>
                </Flex>
              </Stack>
            </Stack>
          </Box>
          {/* Summary */}
          <Box mt="3rem">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.5rem" fontWeight="700">
                Presentation summary
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
                    __html: logbookData?.summary,
                  }}
                />
              </Stack>
            </Box>
          </Box>
          {/* Challenges   */}
          <Box mt="3rem">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.5rem" fontWeight="700">
                Research Challenges
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
                    __html: logbookData?.challenges,
                  }}
                />
              </Stack>
            </Box>
          </Box>
          {/* // Key Positives */}
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
                  handleFormSteps(4);
                }}
              />
            </Flex>
            <Box mt="1.88rem">
              <Stack>
                <div
                  dangerouslySetInnerHTML={{
                    __html: logbookData?.key_points,
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
                  handleFormSteps(3);
                }}
              />
            </Flex>
            <Box mt="1.88rem">
              <Stack>
                <div
                  dangerouslySetInnerHTML={{
                    __html: logbookData?.differentAction,
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

export default LogbookPreview;
