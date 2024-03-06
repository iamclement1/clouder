import CustomButton from "@/components/common/CustomButton";
import { useQualityImprovement } from "@/context/QualityImprovement";
import useQualityMutation from "@/hooks/useQualityMutation";
import { QualityPayloadType } from "@/utils/types";
import { Box, Text, Flex } from "@chakra-ui/react";

import React, { useState, useRef, useEffect } from "react";

import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const DifferentAction = () => {
  const [err, setErr] = useState<boolean>(false);
  const [type, setType] = useState("");

  const {
    qualityImprovementData,
    handleQualityImprovementData,
    handlePreview,
    activityType,
  } = useQualityImprovement();

  const { isLoading, handleSubmitQuality } = useQualityMutation();

  useEffect(() => {
    let newType = "";
    switch (activityType) {
      case "Morbidity & Mortality":
        newType = "morbidity";
        break;
      case "Clinical Audit":
        newType = "clinical";
        break;
      case "Case Review":
        newType = "case";
        break;
      default:
        break;
    }
    setType(newType);
  }, [activityType]);

  const text = useRef("");
  text.current = qualityImprovementData?.differentAction;

  const payload: QualityPayloadType = {
    title: qualityImprovementData?.qualityImprovementTitle,
    year: qualityImprovementData?.year,
    details: qualityImprovementData?.experience,
    challenges: qualityImprovementData?.challenges,
    keyPositives: qualityImprovementData?.key_points,
    doDifferently: qualityImprovementData?.differentAction,
    type: type,
  };

  const handlePayload = () => {
    handleSubmitQuality(payload);
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
      handleQualityImprovementData({
        ...qualityImprovementData,
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
    } else {
      setErr(true);
    }
  };
  const onPreview = (values: string) => {
    if (text.current !== "") {
      setErr(false);
      handleQualityImprovementData({
        ...qualityImprovementData,
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
        <CustomButton w="100%" handleClick={handleSubmit} isLoading={isLoading}>
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
