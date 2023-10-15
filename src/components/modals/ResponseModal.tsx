"use client";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Icon,
  Text,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { FiCamera } from "react-icons/fi";

export const Success: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box mt="1.88rem">
        <Button
          style={{ border: "0.95px solid #03A9F4" }}
          bg="transparent"
          onClick={onOpen}
        >
          <Icon as={FiCamera} boxSize="1.7rem" />
          <Text ml="0.44rem">Upload</Text>
        </Button>
      </Box>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent mt="1.8rem">
          <ModalHeader> Upload an image</ModalHeader>
          <ModalCloseButton top="1rem" />
          <ModalBody>
            <Box mt="1.8rem">
              <Flex
                h="3.5625rem"
                border="1px"
                borderColor="grey_11"
                align="center"
                borderRadius="5px"
                px="0.84rem"
                py="0.75rem"
                gap="0.75rem"
              ></Flex>
            </Box>
            <Flex
              gap="0.75rem"
              justify="left"
              align="center"
              mt="1.8rem"
              mb="2rem"
            >
              <Button
                _hover={{}}
                _focus={{}}
                bgColor={"primary"}
                mr={3}
                color="white"
              >
                Save
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
