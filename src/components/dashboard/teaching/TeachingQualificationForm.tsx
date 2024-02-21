import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import UploadFile from "@/components/modals/UploadFile";
import { teachingDataProps, useTeaching } from "@/context/TeachingProvider";

import { teachingQualification } from "@/utils/data";
// import { teachingDataProps } from "@/utils/types";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const TeachingQualificationForm = () => {
  const { handlePreview, teachingData, handleTeachingData } = useTeaching();

  const [err, setErr] = useState<boolean>(false);
  const [optionErr, setOptionErr] = useState<boolean>(false);
  const [teachingMode, setTeachingMode] = useState<string>(
    teachingData?.qualified,
  );
  const text = useRef("");
  text.current = teachingData?.key_points;

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
    if (text.current !== "") {
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

  return (
    <Box>
      <Box>
        <Formik
          initialValues={{
            teachingQualificationType:
              teachingData?.teachingQualificationType || "",
            qualificationYear: teachingData?.qualificationYear || "",
            imageFile: teachingData?.imageFile ?? null,
          }}
          validate={(values) => {
            const errors: Partial<teachingDataProps> = {};

            if (!values.teachingQualificationType) {
              errors.teachingQualificationType = "Required";
            }
            if (!values.qualificationYear) {
              errors.qualificationYear = "Required";
            }
            if (err) {
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

            onPreview(text.current);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
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
              {/* Input the  title */}
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
              {/* *** Submit buttom *** */}
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
                  // handleClick={() => onPreview(text.current)}
                  type="submit"
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
