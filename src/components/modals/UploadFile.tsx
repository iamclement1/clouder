// import { useQualification } from "@/context/QualificationProvider";
import { Box, Button, Icon, Text, Input, Flex } from "@chakra-ui/react";
import React, { FC, useState } from "react";

import { MdAttachFile } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
// import { FaTimes } from "react-icons/fa";

interface UploadFileProps {
  selectedFile: File | null | Blob | MediaSource;
  setSelectedFile: (file: File | null | Blob | MediaSource) => void;
}

// selectedFile

const UploadFile: FC<UploadFileProps> = ({ setSelectedFile, selectedFile }) => {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
      setSelectedFileName(file.name);
    }
  };

  // remove image
  const handleRemoveImage = () => {
    setSelectedFile(null);
    setSelectedFileName(null);
  };

  // const { qualificationData } = useQualification();

  return (
    <Box>
      <Box>
        <Flex align="center">
          {selectedFile ? (
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
              {" "}
              <Text maxW="300px" noOfLines={1}>
                {selectedFileName}
              </Text>{" "}
              <Icon
                as={LiaTimesSolid}
                onClick={handleRemoveImage}
                _hover={{ cursor: "pointer" }}
                zIndex={"800"}
              />{" "}
            </Button>
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
                <Icon as={MdAttachFile} color={"primary"} boxSize="1.1rem" />

                <Text>Attach relevant document</Text>
              </Button>
            </>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default UploadFile;
