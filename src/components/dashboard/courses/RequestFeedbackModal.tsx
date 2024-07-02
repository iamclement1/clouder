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
} from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
};

export const RequestFeedbackModal = ({ isOpen, onClose, courseId }: Props) => {
  const [feedback, setFeedback] = useState({
    fullName: "",
    projectTitle: "",
    role: "",
    email: "",
  });

  console.log("course id", courseId);
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
        <ModalContent width="65%" maxWidth="600px" height="70vh">
          <ModalHeader>Add Feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Full Name</FormLabel>
              <Input
                placeholder="Enter Full name"
                name="fullName"
                value={feedback.fullName}
                onChange={handleFeedbackChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title of the project"
                name="projectTitle"
                value={feedback.projectTitle}
                onChange={handleFeedbackChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Role</FormLabel>
              <Input
                placeholder="Role played in the project"
                name="role"
                value={feedback.role}
                onChange={handleFeedbackChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Lecturer Email Address"
                type="email"
                name="email"
                value={feedback.email}
                onChange={handleFeedbackChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="center" gap={"14px"}>
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
