import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import CustomButton from "../common/CustomButton";
// import { useQualification } from "@/context/QualificationProvider";

type StatusModalProps = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  status: string;
  handleTotalData: () => void;
  handleFormSteps: (value: number) => void;
  handleFillForm: (value: boolean) => void;
  handlePreview: (value: boolean) => void;
};

const StatusModal: React.FC<StatusModalProps> = ({
  isOpen,

  onClose,
  status = "success",
  handleTotalData,
  handleFormSteps,
  handleFillForm,
  handlePreview,
}) => {
  // const {
  //   handleFormSteps,
  //   handleFillForm,
  //   // qualificationData,
  //   handlePreview,
  //   handleTotalData,
  // } = useQualification();

  const handleSucess = () => {
    handleTotalData();
    handleFormSteps(1);
    handleFillForm(false);
    handlePreview(false);
    onClose();
  };

  const handleErr = () => {
    onClose();
  };

  return (
    <Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        closeOnEsc={false}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent rounded={"1.125rem"} py={["2rem", "3rem"]}>
          <ModalBody>
            {status === "error" && (
              <Image
                src="/error.svg"
                alt="Successfull Image"
                w="7.6rem"
                h="7.6rem"
                display="block"
                mx="auto"
              />
            )}
            {status === "success" && (
              <Image
                src="/success.svg"
                alt="Successfull Image"
                w="7.6rem"
                h="7.6rem"
                display="block"
                mx="auto"
              />
            )}
            <Box mt="">
              <Text
                mt="1.2rem"
                fontSize="1.3125rem"
                color="grey_1"
                fontWeight="600"
                textAlign="center"
              >
                {status === "success" ? "Successful" : "Error"}
              </Text>
              <Text
                mt="1.12rem"
                fontSize="1rem"
                color="grey_1"
                maxW="21.1rem"
                mx="auto"
                textAlign="center"
              >
                {status === "success"
                  ? "Your qualifications has been updated"
                  : "We are unable to process your request at the moment, please try again later"}
              </Text>
            </Box>

            <Flex align="center" justify="center">
              <CustomButton
                handleClick={() => {
                  status === "success" ? handleSucess() : handleErr();
                }}
                maxW="20rem"
                mt="2.03rem"
                h="3rem"
              >
                {status === "success" ? "Continue" : "Try again"}
              </CustomButton>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default StatusModal;
