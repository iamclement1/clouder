// import { useQualification } from "@/context/QualificationProvider";
import { Box, Button, Icon, Text, Input, Flex, Image } from "@chakra-ui/react";
import React, { FC } from "react";
import { BiCamera } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

interface UploadCertificateProps {
  selectedFile: File | null | Blob | MediaSource;
  setSelectedFile: (file: File | null | Blob | MediaSource) => void;
}

const UploadCertificate: FC<UploadCertificateProps> = ({
  selectedFile,
  setSelectedFile,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  //remove image
  const handleRemoveImage = () => {
    setSelectedFile(null);
  };

  // const { qualificationData } = useQualification();

  return (
    <Box>
      <Box>
        <Flex>
          {selectedFile ? (
            <Box
              w="full"
              h="full"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              gap="2"
              pos="relative"
            >
              <Image
                src={URL.createObjectURL(selectedFile)}
                alt="Uploaded"
                maxH="12.18738rem"
                maxW="16.59375rem"
                width={500}
                height={350}
                padding="12px"
                objectFit={"cover"}
              />
              <Icon
                as={FaTimes}
                position={"absolute"}
                onClick={handleRemoveImage}
                top="0"
                right="0"
                cursor="pointer"
              />
            </Box>
          ) : (
            <>
              <Input
                type="file"
                onChange={handleFileChange}
                display="none"
                id="file-upload"
              />
              <Button
                as="label"
                htmlFor="file-upload"
                bg="transparent"
                border="1px"
                borderColor="primary"
                display="flex"
                gap="0.27rem"
                fontWeight="700"
                alignItems="center"
                px="1.27rem"
                _hover={{}}
                _focus={{}}
                color={"primary"}
              >
                <Icon as={BiCamera} />

                <Text>Upload Cetificate</Text>
              </Button>
            </>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default UploadCertificate;
