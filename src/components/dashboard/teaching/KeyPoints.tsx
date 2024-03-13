import CustomButton from "@/components/common/CustomButton";
import StatusModal from "@/components/modals/StatusModal";
import { useTeaching } from "@/context/TeachingProvider";

import { Box, Text, Flex, useDisclosure } from "@chakra-ui/react";

import React, { useState, useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const KeyPoints = () => {
  const [err, setErr] = useState<boolean>(false);
  const {
    teachingData,
    handleTeachingData,

    handlePreview,
    handleFormSteps,
    handleFillForm,
    handleTotalData,
  } = useTeaching();

  const text = useRef("");
  text.current = teachingData?.key_points;

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
      handleTeachingData({
        ...teachingData,
        key_points: text.current,
      });
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handlePayload = () => {
    console.log(teachingData);
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
      handleTeachingData({
        ...teachingData,
        key_points: values,
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
            What are your key takeaways from this teaching
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
        <CustomButton
          w="100%"
          // isLoading={isLoading}
          handleClick={handleSubmit}
        >
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

export default KeyPoints;
