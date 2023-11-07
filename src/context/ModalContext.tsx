// ModalContext.tsx

import CustomButton from "@/components/common/CustomButton";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

type AlertType = "success" | "error" | "warning";

interface ModalData {
  type?: AlertType;
  message?: string;
  title?: string;
  buttonType?: "fill" | "outline";
  buttonText?: string;
}

interface ModalContextType {
  modalData: ModalData | null;
  openModal: (options: {
    type?: "success" | "error" | "warning";
    message?: string;
    title?: string;
    buttonType?: "fill" | "outline";
    buttonText?: string;
  }) => void;
  closeModal: () => void;
}

//I defined a default context when ModalContext is not ready/available
const defaultContext: ModalContextType = {
  modalData: null,
  openModal: () => {},
  closeModal: () => {},
};

export const ModalContext = createContext<ModalContextType>(defaultContext);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const openModal = (options: {
    type?: "success" | "error" | "warning";
    message?: string;
    title?: string;
    buttonType?: "fill" | "outline";
    buttonText?: string;
  }) => {
    const {
      type = "success",
      message = "Default message",
      title = "Successful",
      buttonType = "fill",
      buttonText = "Continue",
    } = options;
    setModalData({ type, message, title, buttonText, buttonType });
  };

  const closeModal = () => {
    setModalData(null);
  };

  const contextValue = useMemo(
    () => ({ modalData, openModal, closeModal }),
    [modalData],
  );
  return (
    <ModalContext.Provider value={contextValue}>
      {modalData && (
        <Modal isOpen={true} onClose={closeModal} size="2xl">
          <ModalOverlay />
          <ModalContent py={["2rem", "4rem"]}>
            <ModalBody maxW="28.5rem" w="100%" mx="auto">
              {modalData && modalData.type === "success" && (
                <Image
                  src="/successful.svg"
                  alt="Successfull Image"
                  w="7.6rem"
                  h="7.6rem"
                  display="block"
                  mx="auto"
                />
              )}
              {modalData && modalData.type === "error" && (
                <Image
                  src="/error.svg"
                  alt="Successfull Image"
                  w="7.6rem"
                  h="7.6rem"
                  display="block"
                  mx="auto"
                />
              )}
              {modalData && modalData.type === "warning" && (
                <Image
                  src="/successful.svg"
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
                  {modalData?.title}
                </Text>
                <Text
                  mt="1.12rem"
                  fontSize="0.84375rem"
                  color="grey_1"
                  maxW="21.1rem"
                  mx="auto"
                  textAlign="center"
                >
                  {modalData?.message}
                </Text>
              </Box>
              <Flex mt="1.88rem">
                {modalData.buttonType === "fill" ? (
                  <CustomButton
                    type="submit"
                    mt="12px"
                    // maxW={"5rem"}
                    w="100%"
                    h="3.23438rem"
                    fontSize={["0.75rem", "1.125rem"]}
                    handleClick={closeModal}
                  >
                    {" "}
                    {modalData?.buttonText}
                  </CustomButton>
                ) : (
                  <CustomButton
                    type="submit"
                    mt="12px"
                    // maxW={"5rem"}
                    w="100%"
                    h="3.23438rem"
                    fontSize={["0.75rem", "1.125rem"]}
                    handleClick={closeModal}
                    bgColor="transparent"
                    color="primary"
                    border="1px"
                    borderColor="primary"
                  >
                    {modalData?.buttonText}
                  </CustomButton>
                )}
              </Flex>
            </ModalBody>
            {/* <ModalFooter>
                        </ModalFooter> */}
          </ModalContent>
        </Modal>
      )}
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  return context;
}
