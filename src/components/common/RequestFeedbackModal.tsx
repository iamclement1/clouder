import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedId: string;
};

export const RequestFeedbackModal = ({
  isOpen,
  onClose,
  selectedId,
}: Props) => {
  const [feedback, setFeedback] = useState({
    fullName: "",
    projectTitle: "",
    role: "",
    email: "",
    selectedId: selectedId,
  });

  const handleFeedbackChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmitFeedback = () => {
    console.log("Feedback submitted:", feedback);
    onClose();
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent py={"50px"} px="4px">
          <ModalHeader>Request Feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={"12px"}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  placeholder="Enter Full name"
                  _focus={""}
                  name="fullName"
                  value={feedback.fullName}
                  onChange={handleFeedbackChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  placeholder="Title of the project"
                  _focus={""}
                  name="projectTitle"
                  value={feedback.projectTitle}
                  onChange={handleFeedbackChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input
                  placeholder="Role played in the project"
                  _focus={""}
                  name="role"
                  value={feedback.role}
                  onChange={handleFeedbackChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Lecturer Email Address"
                  _focus={""}
                  type="email"
                  name="email"
                  value={feedback.email}
                  onChange={handleFeedbackChange}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter justifyContent="center" gap={"14px"} mt="30px">
            <Button
              variant="ghost"
              onClick={onClose}
              width={"180px"}
              border={"1px solid #333333"}
              rounded={"0.5rem"}
              color={"#333333"}
            >
              Cancel
            </Button>
            <Button
              width={"180px"}
              bgColor="#03A9F4"
              color={"white"}
              mr={3}
              onClick={handleSubmitFeedback}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default RequestFeedbackModal;
