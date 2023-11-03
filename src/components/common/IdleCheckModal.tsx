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
import { useRouter } from "next/router";

const InactivityCheck: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const inactivityTime = 60000; // 1 minute in milliseconds
  let inactivityTimer: NodeJS.Timeout;

  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      onOpen();
    }, inactivityTime);
  };

  useEffect(() => {
    resetInactivityTimer();

    document.addEventListener("mousemove", resetInactivityTimer);
    document.addEventListener("keypress", resetInactivityTimer);

    return () => {
      clearTimeout(inactivityTimer);
      document.removeEventListener("mousemove", resetInactivityTimer);
      document.removeEventListener("keypress", resetInactivityTimer);
    };
  }, []);

  const continueSession = () => {
    onClose();
    resetInactivityTimer();
  };

  const signOut = async () => {
    try {
      const response = await fetch("/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Clear user-specific data on the client-side
        // For example, clear tokens or session information
        // Redirect to a sign-out or login page
        router.push("/login"); // Change this to the appropriate route
        onClose();
      } else {
        // Handle error cases, e.g., if the server-side logout fails
        console.error("Logout failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
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
            <Button colorScheme="red" onClick={signOut}>
              Sign Out
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default InactivityCheck;
