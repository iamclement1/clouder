import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import UploadFile from "@/components/modals/UploadFile";
import { teachingDataProps, useTeaching } from "@/context/TeachingProvider";
import useTeachingMutation from "@/hooks/useTeachingMutation";
import { teachingQualification } from "@/utils/data";
import { TeachingPayloadType } from "@/utils/types";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const TeachingQualificationForm = () => {
  const {
    handlePreview,
    teachingData,
    handleTeachingData,
    handleTotalData,
    handleFormSteps,
    handleFillForm,
  } = useTeaching();

  const [err, setErr] = useState<boolean>(false);
  const [submitionStatus, setSubmitionStatus] = useState<string>("");
  const [optionErr, setOptionErr] = useState<boolean>(false);
  const [teachingMode, setTeachingMode] = useState<string>(
    teachingData?.qualified || "Yes",
  );
  const text = useRef("");
  text.current = teachingData?.key_points;

  const { isLoading, handleSubmitTeaching } = useTeachingMutation();

  const payload: TeachingPayloadType = {
    title: teachingData?.teachingTitle,
    year: teachingData?.briefExplanation,
    qualificationYear: teachingData?.qualificationYear,
    summary: teachingData?.briefExplanation,
    keyTakeaway: teachingData?.key_points,
    document: teachingData?.imageFile,
    qualificationType: teachingData?.teachingQualificationType,
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

  const handleChange = (evt: ContentEditableEvent) => {
    text.current = evt.target.value;
    if (text.current !== "") {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const [selectedFile, setSelectedFile] = useState<
    File | null | Blob | MediaSource
  >(null);

  const onPreview = (values: string) => {
    if (teachingMode === "Yes" && text.current !== "") {
      setErr(false);
      handleTeachingData({
        ...teachingData,
        key_points: values,
      });
      handlePreview(true);
    } else {
      setErr(true);
    }
  };
  const handleSave = () => {
    handleTotalData();
    handleFormSteps(1);
    handleFillForm(false);
    handleSubmitTeaching(payload);
  };
  return (
    <Box>
      <Box>
        <Formik
          initialValues={{
            teachingTitle: teachingData?.teachingTitle,
            year: teachingData?.year,
            briefExplanation: teachingData?.briefExplanation,
            teachingQualificationType:
              teachingData?.teachingQualificationType || "",
            qualificationYear: teachingData?.qualificationYear || "",
            imageFile: teachingData?.imageFile ?? null,
          }}
          validate={(values) => {
            const errors: Partial<teachingDataProps> = {};

            if (teachingMode === "Yes" && !values.teachingQualificationType) {
              errors.teachingQualificationType = "Required";
            }
            if (teachingMode === "Yes" && !values.qualificationYear) {
              errors.qualificationYear = "Required";
            }
            if (teachingMode === "Yes" && err) {
              errors.key_points = "Required";
            }

            return errors;
          }}
          onSubmit={(values) => {
            // values.role = teachingMode;
            values.imageFile = selectedFile;

            handleTeachingData({
              ...teachingData,
              ...values,
            });

            // onPreview(text.current);

            if (submitionStatus === "submit") {
              handleSave();
              // console.log("form submitted", values);
            } else {
              onPreview(text.current);
              // console.log("Currently on preview", values);
            }
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* <Form onSubmit={handleSubmit}> */}
              {/* procediure */}
              <Box>
                <Text
                  fontSize={"1.5rem"}
                  color="grey_1"
                  fontWeight="500"
                  maxW="290px"
                >
                  Do you have any teaching qualification
                </Text>

                <Flex mt="1.12rem" gap="1.12rem">
                  {teachingQualification.map((item) => {
                    return (
                      <Button
                        key={item.id}
                        fontSize="0.0.9375rem"
                        h="auto"
                        px="1.31rem"
                        py="0.75rem"
                        border="1px"
                        borderColor={
                          optionErr
                            ? "red.500"
                            : teachingMode === item.roleType
                              ? "transparent"
                              : "rgba_7"
                        }
                        onClick={() => {
                          setTeachingMode(item.roleType);
                          setOptionErr(false);
                        }}
                        color={
                          teachingMode === item.roleType ? "white" : "rgba_7"
                        }
                        bgColor={
                          teachingMode === item.roleType
                            ? "primary"
                            : "transparent"
                        }
                        _focus={{}}
                        _hover={{}}
                        _active={{}}
                        _focusVisible={{}}
                      >
                        {item.roleType}
                      </Button>
                    );
                  })}
                </Flex>
              </Box>

              {teachingMode === "Yes" ? (
                <Box>
                  <CustomInput
                    label="Type of qualification"
                    placeholder="Input the type of qualification"
                    name="teachingQualificationType"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                  <CustomInput
                    label="Year"
                    placeholder="YYYY"
                    name="qualificationYear"
                    type="number"
                    errors={errors}
                    touched={touched}
                  />{" "}
                  <Flex mt="1.08rem" justify={"space-between"}>
                    <UploadFile
                      selectedFile={selectedFile}
                      setSelectedFile={setSelectedFile}
                    />
                  </Flex>
                  {/* ********** Authour Section  ********** */}
                  <Box mt="3.75rem">
                    <Box>
                      <Flex align="center" justify="space-between" mb="1rem">
                        <Text
                          fontSize="1rem"
                          color="grey_1"
                          fontWeight="700"
                          maxW="31rem"
                        >
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
                        <Text
                          color="red"
                          fontSize="12px"
                          mt="2"
                          px="2px"
                          fontWeight="500"
                        >
                          Required
                        </Text>
                      )}
                    </Box>
                  </Box>
                </Box>
              ) : (
                ""
              )}
              {/* Input the  title */}
              {/* *** Submit buttom *** */}
              <Flex maxW="35rem" mx="auto" gap="1.12rem" mt="3rem">
                <CustomButton
                  w="100%"
                  isLoading={isLoading}
                  // isLoading={isLoading}
                  handleClick={() => {
                    setSubmitionStatus("submit");
                    handleSubmit;
                  }}
                >
                  Save
                </CustomButton>
                <CustomButton
                  w="100%"
                  bgColor={"transparent"}
                  border="1px"
                  borderColor="primary"
                  color="primary"
                  // handleClick={() => onPreview(text.current)}
                  handleClick={() => {
                    setSubmitionStatus("preview");
                    handleSubmit();
                  }}
                  // type="submit"
                >
                  Preview
                </CustomButton>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default TeachingQualificationForm;
