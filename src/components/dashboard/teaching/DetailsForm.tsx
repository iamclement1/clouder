import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";

import { teachingDataProps, useTeaching } from "@/context/TeachingProvider";

import { Box, Flex, Text } from "@chakra-ui/react";
// import { State } from "country-state-city";
import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const DetailsForm = () => {
  const {
    formSteps,
    handleFormSteps,
    handleFillForm,
    teachingData,
    handleTeachingData,
  } = useTeaching();

  const [err, setErr] = useState<boolean>(false);

  const text = useRef("");
  text.current = teachingData?.challenges;

  const handleBlur = () => {
    if (text.current !== "") {
      handleTeachingData({
        ...teachingData,
        challenges: text.current,
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

  return (
    <Box>
      <Box>
        <Formik
          initialValues={{
            teachingTitle: teachingData?.teachingTitle || "",
            year: teachingData?.year || "",
            briefExplanation: teachingData?.briefExplanation || "",
          }}
          validate={(values) => {
            const errors: Partial<teachingDataProps> = {};

            if (!values.teachingTitle) {
              errors.teachingTitle = "Required";
            }
            if (!values.year) {
              errors.year = "Required";
            }
            if (err) {
              errors.briefExplanation = "Required";
            }

            return errors;
          }}
          onSubmit={(values) => {
            values.briefExplanation = text.current;
            handleTeachingData({
              ...teachingData,
              ...values,
            });
            console.log(values);

            handleFormSteps(formSteps + 1);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* Course title */}
              <CustomInput
                label="Title"
                placeholder="Input the case title"
                name="teachingTitle"
                type="number"
                errors={errors}
                touched={touched}
              />

              <CustomInput
                label="Year"
                placeholder="DD/MM/YY"
                name="year"
                type="number"
                errors={errors}
                touched={touched}
              />

              <Box mt="3.75rem">
                <Flex align="center" justify="space-between" mb="1rem">
                  <Text
                    fontSize="1rem"
                    color="grey_1"
                    fontWeight="700"
                    maxW="31rem"
                  >
                    Brief explanation on the teaching
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

export default DetailsForm;
