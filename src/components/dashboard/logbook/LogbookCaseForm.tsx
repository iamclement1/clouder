import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import { useLogbook } from "@/context/LogbookProvider";
import { logbookDataProps } from "@/utils/types";

import { Box, Flex, Text } from "@chakra-ui/react";

import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const LogbookCaseForm = () => {
  const {
    formSteps,
    handleFormSteps,
    handleFillForm,
    logbookData,
    handleLogbookData,
  } = useLogbook();

  const [err, setErr] = useState<boolean>(false);

  const text = useRef("");
  text.current = logbookData?.summary;

  const handleBlur = () => {
    if (text.current !== "") {
      handleLogbookData({
        ...logbookData,
        summary: text.current,
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
            caseTittle: logbookData?.caseTittle || "",
            caseYear: logbookData?.caseYear || "",
            summary: logbookData?.summary || "",
          }}
          validate={(values) => {
            const errors: Partial<logbookDataProps> = {};

            if (!values.caseTittle) {
              errors.caseTittle = "Required";
            }
            if (!values.caseYear) {
              errors.caseYear = "Required";
            }
            if (err) {
              errors.summary = "Required";
            }

            return errors;
          }}
          onSubmit={(values) => {
            values.summary = text.current;
            handleLogbookData({
              ...logbookData,
              ...values,
            });

            handleFormSteps(formSteps + 1);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* procediure */}
              <Text
                fontSize="1.5rem"
                fontWeight="500"
                color="grey_1"
                mb="1.8rem"
              >
                Case presentation
              </Text>
              {/* Input the logbook title */}
              <CustomInput
                label="Title"
                placeholder="Input the case title"
                name="caseTittle"
                type="text"
                errors={errors}
                touched={touched}
              />
              <CustomInput
                label="Year"
                placeholder="YYYY"
                name="caseYear"
                type="number"
                errors={errors}
                touched={touched}
              />{" "}
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
                      Brief summary of the presentation
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

export default LogbookCaseForm;
