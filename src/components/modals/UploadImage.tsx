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
  Input,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";

const UploadImage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
    }
  };

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
              >
                <Input
                  type="file"
                  onChange={handleFileChange}
                  display="none"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button
                    as="span"
                    color="primary"
                    bg="transparent"
                    _hover={{}}
                    _focus={{}}
                    fontSize="0.9375rem"
                    fontWeight="600"
                    border="1px"
                    borderColor="primary"
                    cursor="pointer"
                  >
                    {selectedFile ? "Choosen File" : "Choose File"}
                  </Button>
                </label>
                {selectedFile && (
                  <Text fontSize="0.75rem" noOfLines={1}>
                    {selectedFile.name}
                  </Text>
                )}
              </Flex>
            </Box>
            <Flex
              gap="0.75rem"
              justify="left"
              align="center"
              mt="1.8rem"
              mb="2rem"
            >
              <Button
                border="1px"
                borderColor=""
                bg="transparent"
                _hover={{}}
                _focus={{}}
                onClick={onClose}
              >
                Cancle
              </Button>
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

export default UploadImage;
