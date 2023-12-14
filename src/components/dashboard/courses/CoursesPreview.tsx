import CustomButton from "@/components/common/CustomButton";
import Typography from "@/components/common/Typograph";
import StatusModal from "@/components/modals/StatusModal";
import { useCourses } from "@/context/CoursesProvider";

import { Box, Flex, Text, Icon, Stack, useDisclosure } from "@chakra-ui/react";

import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
// import { toast } from "react-toastify";
const CoursesPreview = () => {
  const {
    handleFormSteps,
    handleFillForm,
    coursesData,
    handlePreview,
    handleTotalData,
  } = useCourses();

  // const { mutate, isLoading } = useMutation({
  //   mutationFn: (qualifications: Payload) => {
  //     return api.post("/qualifications", qualifications);
  //   },
  //   onSuccess: ({ data }) => {
  //     console.log(data);
  //     if (data) {
  //       // toast.success("Qualifications Submitted Successfully")
  //       onOpenStatusModal();
  //     }
  //   },
  //   onError: (error: { response: { data: { error: string } } }) => {
  //     const errorMsg = error.response.data.error;
  //     toast.error(errorMsg, {
  //       theme: "dark",
  //     });
  //   },
  // });

  // const payload = {
  //   education: [
  //     {
  //       degree: coursesData?.degree,
  //       year: coursesData?.year,
  //       institution: coursesData?.school,
  //       certificate: coursesData?.imageFile,
  //     },
  //   ],
  //   challenges: coursesData?.challenges,
  //   keyPositives: coursesData?.key_points,
  //   doDifferently: coursesData?.differentAction,
  // };

  const handleSubmit = () => {
    // mutate(payload);
    onOpenStatusModal();
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
              Courses
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
                  Course title:
                </Text>

                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {coursesData?.courseTitle}
                </Text>
              </Flex>
              <Flex gap="0.38rem" align="center">
                <Text fontSize="0.9rem" fontWeight="600" color="grey_1">
                  Institution:
                </Text>
                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {coursesData?.school}
                </Text>
              </Flex>
              <Flex gap="0.38rem" align="center">
                <Text fontSize="0.9rem" fontWeight="600" color="grey_1">
                  Year:{" "}
                </Text>
                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {coursesData?.year}
                </Text>
              </Flex>{" "}
              <Flex gap="0.38rem" align="center">
                <Text fontSize="0.9rem" fontWeight="600" color="grey_1">
                  Certificate no:
                </Text>
                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {coursesData?.certificateNo}
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
                {/* <Flex>{coursesData.challenges}</Flex> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: coursesData?.challenges,
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
                {/* <Flex>{coursesData.key_points}</Flex> */}

                <div
                  dangerouslySetInnerHTML={{
                    __html: coursesData?.key_points,
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
                                    {coursesData?.differentAction}
                                </Flex> */}

                <div
                  dangerouslySetInnerHTML={{
                    __html: coursesData?.differentAction,
                  }}
                />
              </Stack>
            </Box>
          </Box>

          <Flex mt="3.75rem" align="center" justify="center">
            <CustomButton
              maxW="26.6rem"
              // isLoading={isLoading}
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

export default CoursesPreview;
