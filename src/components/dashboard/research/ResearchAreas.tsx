import CustomButton from "@/components/common/CustomButton";

import { useResearch } from "@/context/ResearchProvider";

import { Box, Text, Flex } from "@chakra-ui/react";

import React, { useState, useRef } from "react";

import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const ResearchAreas = () => {
  const [err, setErr] = useState<boolean>(false);
  const { researchData, handleResearchData, handlePreview } = useResearch();

  const text = useRef("");
  text.current = researchData?.researchArea;
  const handleChange = (event: ContentEditableEvent) => {
    text.current = event.target.value;
    if (text.current !== "") {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handleBlur = () => {
    if (text.current !== "" || text.current.length >= 6) {
      handleResearchData({
        ...researchData,
        researchArea: text.current,
      });
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handleSubmit = () => {
    if (text.current !== "") {
      setErr(false);

      console.log("researchData", researchData);
    } else {
      setErr(true);
    }
  };

  const onPreview = (values: string) => {
    if (text.current !== "") {
      setErr(false);
      handleResearchData({
        ...researchData,
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
        <Flex align="center" justify="space-between" mb="1.7rem">
          <Text fontSize="1.4rem" color="grey_1" fontWeight="500" maxW="31rem">
            If you have the opportunity to do more Research what areas will you
            be interested in?
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
    </Box>
  );
};

export default ResearchAreas;
