import CustomButton from "@/components/common/CustomButton";
import StatusModal from "@/components/modals/StatusModal";
import { useQualification } from "@/context/QualificationProvider";
import useQualificationMutation from "@/hooks/useQualificationMutation";
import { Box, Text, Flex, useDisclosure } from "@chakra-ui/react";

import React, { useState, useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const DifferentAction = () => {
  const [err, setErr] = useState<boolean>(false);
  const {
    qualificationData,
    handleQualificationData,

    handlePreview,
    handleFormSteps,
    handleFillForm,
    handleTotalData,
  } = useQualification();

  const text = useRef("");
  text.current = qualificationData?.differentAction;

  const { handleSubmitQualification, isLoading } = useQualificationMutation();

  const payload = {
    education: [
      {
        degree: qualificationData?.degree,
        year: qualificationData?.year,
        institution: qualificationData?.school,
        certificate: qualificationData?.imageFile,
      },
    ],
    challenges: qualificationData?.challenges,
    keyPositives: qualificationData?.key_points,
    doDifferently: qualificationData?.differentAction,
  };

  const handleChange = (evt: ContentEditableEvent) => {
    text.current = evt.target.value;
    if (text.current !== "") {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handleBlur = () => {
    if (text.current !== "") {
      handleQualificationData({
        ...qualificationData,
        differentAction: text.current,
      });
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handlePayload = () => {
    console.log(qualificationData);
    handleSubmitQualification(payload);
  };

  const handleSubmit = () => {
    if (text.current !== "") {
      setErr(false);

      handlePayload();
    } else {
      setErr(true);
    }
  };

  const {
    isOpen: isOpenStatusModal,
    onOpen: onOpenStatusModal,
    onClose: onCloseStatusModal,
  } = useDisclosure();

  const onPreview = (values: string) => {
    if (text.current !== "") {
      handleQualificationData({
        ...qualificationData,
        differentAction: values,
      });
      setErr(false);
      handlePreview(true);
    } else {
      setErr(true);
    }
  };

  return (
    <Box>
      <Box>
        <Flex align="center" justify="space-between" mb="1.73rem">
          <Text fontSize="1.4rem" color="grey_1" fontWeight="500" maxW="31rem">
            What would you want to do differently?
          </Text>
        </Flex>
        <ContentEditable
          className={`texteditor ${err ? "errMode" : ""}`}
          html={text.current}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {err && (
          <Text color="red" fontSize="12px" mt="2" px="2px" fontWeight="500">
            Required
          </Text>
        )}
      </Box>

      <Flex maxW="35rem" mx="auto" gap="1.12rem" mt="3rem">
        <CustomButton w="100%" isLoading={isLoading} handleClick={handleSubmit}>
          Save
        </CustomButton>
        <CustomButton
          w="100%"
          bgColor={"transparent"}
          border="1px"
          borderColor="primary"
          color="primary"
          handleClick={() => onPreview(text.current)}
        >
          Preview
        </CustomButton>
      </Flex>
      <StatusModal
        isOpen={isOpenStatusModal}
        onOpen={onOpenStatusModal}
        onClose={onCloseStatusModal}
        status="success"
        handleTotalData={handleTotalData}
        handleFormSteps={handleFormSteps}
        handleFillForm={handleFillForm}
        handlePreview={handlePreview}
      />
    </Box>
  );
};

export default DifferentAction;
