import CustomButton from "@/components/common/CustomButton";

import { useQualification } from "@/context/QualificationProvider";
import { Box, Text, Flex } from "@chakra-ui/react";

import React, { useState, useRef } from "react";

import ContentEditable from "react-contenteditable";

const DifferentAction = () => {
  const [err, setErr] = useState<boolean>(false);
  const {
    handleFormSteps,
    handleFillForm,
    qualificationData,
    handleQualificationData,
    handleTotalData,
    handlePreview,
  } = useQualification();

  const text = useRef("");
  text.current = qualificationData?.differentAction;

  const handleChange = (evt) => {
    text.current = evt.target.value;
    if (text.current !== "") {
      setErr(false);
      console.log("handleChange", text.current);
    } else {
      setErr(true);
    }
  };

  const handleBlur = () => {
    if (text.current !== "" || text.current.length >= 6) {
      setErr(false);
      console.log("handleBlur", text.current);
    } else {
      setErr(true);
    }
  };

  const handleSubmit = (values: string) => {
    if (text.current !== "") {
      setErr(false);
      handleQualificationData({
        ...qualificationData,
        differentAction: values,
      });
      handleTotalData();
      handleFormSteps(1);
      handleFillForm(false);
    } else {
      setErr(true);
    }
  };
  const onPreview = (values: string) => {
    if (text.current !== "") {
      setErr(false);
      handleQualificationData({
        ...qualificationData,
        differentAction: values,
      });
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
        <CustomButton w="100%" handleClick={() => handleSubmit(text.current)}>
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
    </Box>
  );
};

export default DifferentAction;
