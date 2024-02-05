import CustomButton from "@/components/common/CustomButton";
import { useLogbook } from "@/context/LogbookProvider";
import useLogbookMutation from "@/hooks/useLogbookMutation";

import { Box, Text, Flex } from "@chakra-ui/react";

import React, { useState, useRef } from "react";

import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const DifferentAction = () => {
  const [err, setErr] = useState<boolean>(false);
  const { logbookData, handleLogbookData, handlePreview } = useLogbook();

  const text = useRef("");
  text.current = logbookData?.differentAction;

  const { handleSubmitLogbook, isLoading } = useLogbookMutation();

  const payload = {
    action: logbookData?.role,
    summary: logbookData?.summary,
    firstTitle: logbookData?.logbookTittle,
    challenges: logbookData?.challenges,
    firstYear: logbookData?.year,
    secondTitle: logbookData?.caseTittle,
    secondYear: logbookData?.caseYear,
    doDifferently: logbookData?.differentAction,
    keyPositives: logbookData?.key_points,
    logBookType: logbookData?.flag,
  };

  const handlePayload = () => {
    console.log(logbookData);
    handleSubmitLogbook(payload);
  };
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
      handleLogbookData({
        ...logbookData,
        differentAction: text.current,
      });
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handleSubmit = () => {
    if (text.current !== "") {
      setErr(false);
      handlePayload();

      console.log("logbookData", logbookData);
    } else {
      setErr(true);
    }
  };

  const onPreview = (values: string) => {
    if (text.current !== "") {
      setErr(false);
      handleLogbookData({
        ...logbookData,
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
    </Box>
  );
};

export default DifferentAction;
