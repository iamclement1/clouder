import React, { useEffect } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import useSignOut from "@/hooks/useSignOut";
const InactivityCheck: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, handleLogOut } = useSignOut();

  const inactivityTime = 600000;
  let inactivityTimer: NodeJS.Timeout | null = null;

  const resetInactivityTimer = () => {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
    }
    inactivityTimer = setTimeout(() => {
      onOpen();
    }, inactivityTime);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      resetInactivityTimer();

      document.addEventListener("mousemove", resetInactivityTimer);
      document.addEventListener("keypress", resetInactivityTimer);

      return () => {
        if (inactivityTimer) {
          clearTimeout(inactivityTimer);
        }
        document.removeEventListener("mousemove", resetInactivityTimer);
        document.removeEventListener("keypress", resetInactivityTimer);
      };
    }
  }, []);

  const continueSession = () => {
    onClose();
    resetInactivityTimer();
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You are idle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Do you want to sign out or continue your session?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={continueSession}>
              Continue
            </Button>
            <Button
              colorScheme="red"
              onClick={handleLogOut}
              isLoading={isLoading}
            >
              Sign Out
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default InactivityCheck;
