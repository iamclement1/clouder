import CustomButton from "@/components/common/CustomButton";

import { useResearch } from "@/context/ResearchProvider";
import { Box, Text, Flex } from "@chakra-ui/react";

import React, { useState, useRef } from "react";

import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const ResearchSummaryForm = () => {
  const [err, setErr] = useState<boolean>(false);
  const {
    formSteps,
    handleFormSteps,
    handleFillForm,
    researchData,
    handleResearchData,
  } = useResearch();

  const text = useRef("");
  text.current = researchData?.summary;

  const handleChange = (evt: ContentEditableEvent) => {
    text.current = evt.target.value;
    if (text.current !== "") {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handleBlur = () => {
    if (text.current !== "" || text.current.length >= 6) {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handleSubmit = (values: string) => {
    if (text.current !== "") {
      setErr(false);
      handleResearchData({
        ...researchData,
        summary: values,
      });

      handleFormSteps(formSteps + 1);
    } else {
      setErr(true);
    }
  };
  return (
    <Box>
      <Box>
        <Flex align="center" justify="space-between" mb="1.87rem">
          <Text fontSize="1.4rem" color="grey_1" fontWeight="500" maxW="31rem">
            Kindly give a brief summary of the study.
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
          bgColor={"transparent"}
          border="1px"
          borderColor="grey_1"
          color="grey_1"
          handleClick={() => handleFillForm(false)}
        >
          Cancel
        </CustomButton>
        <CustomButton w="100%" handleClick={() => handleSubmit(text.current)}>
          Next
        </CustomButton>
      </Flex>
    </Box>
  );
};

export default ResearchSummaryForm;
