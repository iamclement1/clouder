// import CustomButton from "@/components/common/CustomButton";
// import Typography from "@/components/common/Typograph";
// import StatusModal from "@/components/modals/StatusModal";
// import { useCourses } from "@/context/CoursesProvider";
// import api from "@/utils/axiosInstance";
import CustomButton from "@/components/common/CustomButton";
import Typography from "@/components/common/Typograph";
import StatusModal from "@/components/modals/StatusModal";
import { useLeadership } from "@/context/LeadershipProvider";
import {
  Box,
  Flex,
  Text,
  Icon,
  Stack,
  useDisclosure,
  //  useDisclosure
} from "@chakra-ui/react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
// import { MdOutlineCancel } from "react-icons/md";
// import { TbEdit } from "react-icons/tb";
// import { toast } from "react-toastify";

const LeadershipPreview = () => {
  // const queryClient = useQueryClient();

  const {
    handleFormSteps,
    handleFillForm,
    leadershipData,
    handlePreview,
    handleTotalData,
  } = useLeadership();

  // type Payload = {
  //     courseTitle: string;
  //     institution: string;
  //     year: string;
  //     certificateNo: string;
  //     challenges: string;
  //     document: File | Blob | MediaSource | null;
  //     keyPositives?: string;
  //     doDifferently?: string;
  // };

  // const { mutate, isLoading } = useMutation({
  //     mutationFn: (courses: Payload) => {
  //         return api.post("/courses", courses);
  //     },
  //     onSuccess: ({ data }) => {
  //         if (data) {
  //             toast.success("Course Submitted Successfully", {
  //                 theme: "dark",
  //             });
  //         }
  //         queryClient.invalidateQueries({ queryKey: ["courses"] });
  //     },
  //     onError: (error: { response: { data: { error: string } } }) => {
  //         const errorMsg = error.response.data.error;
  //         toast.error(errorMsg, {
  //             theme: "dark",
  //         });
  //     },
  // });

  // const payload: Payload = {
  //     courseTitle: leadershipData?.courseTitle,
  //     institution: leadershipData?.school,
  //     certificateNo: leadershipData?.certificateNo,
  //     challenges: leadershipData?.challenges,
  //     year: leadershipData?.year,
  //     document: leadershipData?.imageFile,
  //     keyPositives: leadershipData?.key_points,
  //     doDifferently: leadershipData?.differentAction,
  // };

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
              Leadership (Academic role)
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
                  Leadership title:
                </Text>

                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {leadershipData?.leadershipTittle}
                </Text>
              </Flex>
              <Flex gap="0.38rem" align="center">
                <Text fontSize="0.9rem" fontWeight="600" color="grey_1">
                  Start year:
                </Text>
                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {leadershipData?.startYear}
                </Text>
              </Flex>
              <Flex gap="0.38rem" align="center">
                <Text fontSize="0.9rem" fontWeight="600" color="grey_1">
                  End year:{" "}
                </Text>
                <Text
                  fontSize="1.125rem"
                  fontWeight="600"
                  // color="grey_1"
                >
                  {leadershipData?.endYear}
                </Text>
              </Flex>{" "}
            </Stack>
          </Box>

          {/* Challenges   */}
          <Box mt="3rem">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.5rem" fontWeight="700">
                Using leadership to solve a particular problem
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
                    __html: leadershipData?.solvedPro,
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
                    __html: leadershipData?.challenges,
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
                    __html: leadershipData?.key_points,
                  }}
                />
              </Stack>
            </Box>
          </Box>

          {/* What i would have done differently   */}

          <Flex mt="3.75rem" align="center" justify="center">
            <CustomButton
              maxW="26.6rem"
              // isLoading={isLoading}
              handleClick={() => onOpenStatusModal()}
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

export default LeadershipPreview;
