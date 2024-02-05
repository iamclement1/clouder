import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import UploadFile from "@/components/modals/UploadFile";
import { useLogbook } from "@/context/LogbookProvider";

import { logBookRoleData } from "@/utils/data";
import { logbookDataProps } from "@/utils/types";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const LogbookDetailsForm = () => {
  const {
    formSteps,
    handleFormSteps,
    handleFillForm,
    logbookData,
    handleLogbookData,
  } = useLogbook();

  const [selectetdRole, setSelectetdRole] = useState<string>(logbookData?.role);
  const [err, setErr] = useState<boolean>(false);

  const text = useRef("");
  text.current = logbookData?.observation;

  const handleBlur = () => {
    if (text.current !== "") {
      handleLogbookData({
        ...logbookData,
        observation: text.current,
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

  return (
    <Box>
      <Box>
        <Formik
          initialValues={{
            logbookTittle: logbookData?.logbookTittle || "",
            year: logbookData?.year || "",
            role: logbookData?.role || "",
          }}
          validate={(values) => {
            const errors: Partial<logbookDataProps> = {};

            if (!values.logbookTittle) {
              errors.logbookTittle = "Required";
            }
            if (!values.year) {
              errors.year = "Required";
            }
            if (!values.year) {
              errors.year = "Required";
            }

            if (selectetdRole === "") {
              errors.role = "Required";
              setErr(true);
            } else {
              setErr(false);
            }

            return errors;
          }}
          onSubmit={(values) => {
            values.role = selectetdRole;
            handleLogbookData({
              ...logbookData,
              ...values,
            });

            handleFormSteps(formSteps + 1);
            console.log(formSteps);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* procediure */}
              <Box>
                <Text fontSize={"1.5rem"} color="grey_1" fontWeight="500">
                  Procedures
                </Text>

                <Flex mt="1.12rem" gap="1.12rem">
                  {logBookRoleData.map((item) => {
                    return (
                      <Button
                        key={item.id}
                        fontSize="0.0.9375rem"
                        h="auto"
                        px="1.31rem"
                        py="0.75rem"
                        border="1px"
                        borderColor={
                          err
                            ? "red.500"
                            : selectetdRole === item.roleType
                              ? "transparent"
                              : "rgba_7"
                        }
                        onClick={() => {
                          setSelectetdRole(item.roleType);
                          setErr(false);
                        }}
                        color={
                          selectetdRole === item.roleType ? "white" : "rgba_7"
                        }
                        bgColor={
                          selectetdRole === item.roleType
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
              {/* Input the logbook title */}
              <CustomInput
                label="Title"
                placeholder="Input the case title"
                name="logbookTittle"
                type="text"
                errors={errors}
                touched={touched}
              />
              <CustomInput
                label="Year"
                placeholder="YYYY"
                name="year"
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
              {selectetdRole === "Observe" && (
                <Box mt="3.75rem">
                  <Box>
                    <Flex align="center" justify="space-between" mb="1rem">
                      <Text
                        fontSize="1rem"
                        color="grey_1"
                        fontWeight="700"
                        maxW="31rem"
                      >
                        Briefly explain your experience while
                        observing/assisting this procedure
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
              )}
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

export default LogbookDetailsForm;
