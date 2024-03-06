import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";

import {
  qualityImprovementDataProps,
  useQualityImprovement,
} from "@/context/QualityImprovement";

import { Box, Flex, Text } from "@chakra-ui/react";

import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const QualityImprovementDetailsForm = () => {
  const {
    formSteps,
    handleFormSteps,
    handleFillForm,
    qualityImprovementData,
    handleQualityImprovementData,
  } = useQualityImprovement();

  //  content editatble code

  const [err, setErr] = useState<boolean>(false);

  const text = useRef("");

  text.current = qualityImprovementData?.experience;
  const handleChange = (event: ContentEditableEvent) => {
    text.current = event.target.value;
    if (text.current !== "") {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handleBlur = () => {
    if (text.current === "") {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  //

  return (
    <Box>
      <Box>
        {/* <Flex align="center" justify="space-between">
                    <Text fontSize="1.4rem" color="grey_1" fontWeight="500">
                        Kindly share details about courses acquired
                    </Text>
                </Flex> */}

        <Formik
          initialValues={{
            qualityImprovementTitle:
              qualityImprovementData?.qualityImprovementTitle || "",
            year: qualityImprovementData?.year || "",

            experience: qualityImprovementData?.experience || "",
          }}
          validate={(values) => {
            const errors: Partial<qualityImprovementDataProps> = {};

            if (!values.qualityImprovementTitle) {
              errors.qualityImprovementTitle = "Required";
            }
            if (!values.year) {
              errors.year = "Required";
            }

            if (err) {
              setErr(true);
              errors.experience = "Required";
            } else {
              setErr(false);
            }

            return errors;
          }}
          onSubmit={(values) => {
            values.experience = text.current;
            handleQualityImprovementData({
              ...qualityImprovementData,
              ...values,
            });

            handleFormSteps(formSteps + 1);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* Course title */}
              <CustomInput
                label="Title"
                placeholder="Input Title"
                name="qualityImprovementTitle"
                type="text"
                errors={errors}
                touched={touched}
              />

              <Flex justify="space-between" gap={[".8rem", "1.8rem"]}>
                <CustomInput
                  label="Year"
                  placeholder="YYYY"
                  name="year"
                  type="number"
                  errors={errors}
                  touched={touched}
                />
              </Flex>

              <Box mt="2rem">
                <Text
                  fontWeight="600"
                  color="grey_1"
                  maxW="20rem"
                  fontSize="1rem"
                >
                  Briefly tell us about your experiences in not more than 250
                  words
                </Text>
                <Box mt=".8rem">
                  <ContentEditable
                    className={`texteditor ${err ? "errMode" : ""}`}
                    html={text.current}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Box>

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

              <Flex maxW="35rem" mx="auto" gap="1.12rem" mt="3rem">
                <CustomButton
                  bgColor={"transparent"}
                  border="1px"
                  borderColor="grey_1"
                  color="grey_1"
                  handleClick={() => handleFillForm(false)}
                >
                  Cancel
                </CustomButton>
                <CustomButton type="submit">Next</CustomButton>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default QualityImprovementDetailsForm;
