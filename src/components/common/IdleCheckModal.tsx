import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { toast } from "react-toastify";

const InactivityCheck: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [signOutLoading, setSignOutLoading] = useState(false);

  const { mutate } = useMutation({
    mutationFn: () => {
      return api.get("/user/signout");
    },
    onSuccess: ({ data }) => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("refreshToken");
      toast.success(data.message, {
        theme: "dark",
      });
      router.push("/");
      onClose();
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg, {
        theme: "dark",
      });
      setSignOutLoading(false); // Set loading to false on error
    },
  });

  const inactivityTime = 30000; // 30 seconds in milliseconds
  let inactivityTimer: NodeJS.Timeout;

  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      onOpen();
    }, inactivityTime);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token"); // Check for the token in session storage
    if (token) {
      resetInactivityTimer();

      document.addEventListener("mousemove", resetInactivityTimer);
      document.addEventListener("keypress", resetInactivityTimer);

      return () => {
        clearTimeout(inactivityTimer);
        document.removeEventListener("mousemove", resetInactivityTimer);
        document.removeEventListener("keypress", resetInactivityTimer);
      };
    }
  }, []);

  const continueSession = () => {
    onClose();
    resetInactivityTimer();
  };

  const handleSignOut = () => {
    setSignOutLoading(true); // Set loading to true before initiating sign-out
    mutate();
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
              onClick={handleSignOut}
              isLoading={signOutLoading}
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
