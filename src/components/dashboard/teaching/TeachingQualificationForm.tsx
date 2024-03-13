import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import UploadFile from "@/components/modals/UploadFile";
import { teachingDataProps, useTeaching } from "@/context/TeachingProvider";

import { teachingQualification } from "@/utils/data";
// import { teachingDataProps } from "@/utils/types";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { Form, Formik } from "formik";
import React, { useState } from "react";

const TeachingQualificationForm = () => {
  const {
    teachingData,
    handleTeachingData,
    // handleTotalData,
    handleFormSteps,
    handleFillForm,
    formSteps,
    handlePreview,
  } = useTeaching();

  const [optionErr, setOptionErr] = useState<boolean>(false);
  const [teachingMode, setTeachingMode] = useState<string>(
    teachingData?.qualified || "Yes",
  );

  const [selectedFile, setSelectedFile] = useState<
    File | null | Blob | MediaSource
  >(null);

  const handleFinalSubmit = () => {
    handleTeachingData({
      ...teachingData,
      qualified: teachingMode,
    });
    console.log(teachingData);
  };
  // const handleSave = () => {
  //     handleTotalData();
  //     handleFormSteps(1);
  //     handleFillForm(false);
  // };

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
            // if (teachingMode === "Yes" && err) {
            //   errors.key_points = "Required";
            // }

            return errors;
          }}
          onSubmit={(values) => {
            values.imageFile = selectedFile;

            handleTeachingData({
              ...teachingData,
              ...values,
            });

            handleFormSteps(formSteps + 1);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            // {({ handleSubmit, errors, touched }) => (
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
                </Box>
              ) : (
                ""
              )}
              {/* Input the  title */}
              {/* *** Submit buttom *** */}

              <>
                {teachingMode === "Yes" ? (
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
                    <CustomButton w="100%" type="submit">
                      Next
                    </CustomButton>
                  </Flex>
                ) : (
                  <Flex maxW="35rem" mx="auto" gap="1.12rem" mt="10rem">
                    <CustomButton
                      w="100%"
                      // isLoading={isLoading}

                      handleClick={handleFinalSubmit}
                    >
                      Save
                    </CustomButton>
                    <CustomButton
                      w="100%"
                      bgColor={"transparent"}
                      border="1px"
                      borderColor="primary"
                      color="primary"
                      handleClick={() => handlePreview(true)}
                    >
                      Preview
                    </CustomButton>
                  </Flex>
                )}
              </>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default TeachingQualificationForm;
