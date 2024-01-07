import CustomButton from "@/components/common/CustomButton";
import { useCourses } from "@/context/CoursesProvider";
import useCoursesMutation from "@/hooks/useCoursesMutation";
import { CoursesPayloadType } from "@/utils/types";

import { Box, Text, Flex } from "@chakra-ui/react";

import React, { useState, useRef } from "react";

import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const DifferentAction = () => {
  const [err, setErr] = useState<boolean>(false);

  const { coursesData, handleCoursesData, handlePreview } = useCourses();

  const text = useRef("");
  text.current = coursesData?.differentAction;

  const { handleSubmitCourses, isLoading } = useCoursesMutation();

  const payload: CoursesPayloadType = {
    courseTitle: coursesData?.courseTitle,
    institution: coursesData?.school,
    certificateNo: coursesData?.certificateNo,
    challenges: coursesData?.challenges,
    year: coursesData?.year,
    document: coursesData?.imageFile,
    keyPositives: coursesData?.key_points,
    doDifferently: coursesData?.differentAction,
  };

  const handlePayload = () => {
    handleSubmitCourses(payload);
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
      handleCoursesData({
        ...coursesData,
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
      handleCoursesData({
        ...coursesData,
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
