"use client";

import { Box } from "@chakra-ui/react";
import React from "react";

// import CustomButton from "@/components/common/CustomButton";
// import CustomInput from "@/components/common/CustomInput";
// import { requestFeedBackDataProps } from "@/context/CoursesProvider";
// import { Box, Flex, Stack, Text } from "@chakra-ui/react";
// import { Form, Formik } from "formik";
// import React, { useRef, useState } from "react";
// import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const RequestFeedBack = () => {
  // const [err, setErr] = useState<boolean>(false);
  // const [bodyTextState, setBodyTextState] = useState<string>("");

  // const text = useRef("");
  // text.current = "";
  // const handleChange = (event: ContentEditableEvent) => {
  //     text.current = event.target.value;
  //     if (text.current !== "") {
  //         setErr(false);
  //     } else {
  //         setErr(true);
  //     }
  // };

  // const handleBlur = () => {
  //     // console.log(text.current);
  //     if (text.current !== "") {
  //         setErr(false);
  //         setBodyTextState(text.current);
  //     } else {
  //         setErr(true);
  //     }
  // };
  // const handleSubmitBodyText = (values: string, submitFunc: () => void) => {
  //     console.log(values);

  //     if (text.current !== "") {
  //         setErr(false);
  //         setBodyText(values);
  //         submitFunc();
  //     } else {
  //         setErr(true);
  //         setBodyText("");
  //     }
  // };

  return (
    <Box>
      <Box>
        {/* <Formik
                    initialValues={{
                        fullName: "",
                        title: "",
                        role: "",
                        email: "",
                        bodyText: bodyTextState,
                    }}
                    validate={(values) => {
                        const errors: Partial<requestFeedBackDataProps> = {};

                        if (!values.fullName) {
                            errors.fullName = "Required";
                        }
                        if (!values.title) {
                            errors.title = "Required";
                        }

                        if (!values.role) {
                            errors.role = "Required";
                        }
                        if (!values.email) {
                            errors.email = "Required";
                        }
                        if (!values.bodyText) {
                            errors.bodyText = "Required";
                            setErr(true);
                        } else {
                            setErr(false);
                        }

                        console.log(err);

                        return errors;
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                        console.log(bodyTextState);
                    }}
                    // validateOnChange
                >
                    {({ handleSubmit, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <Box>
                                <CustomInput
                                    label="Full name"
                                    name="fullName"
                                    type="number"
                                    errors={errors}
                                    touched={touched}
                                />
                                <CustomInput
                                    label="Title"
                                    name="title"
                                    type="number"
                                    errors={errors}
                                    touched={touched}
                                />
                                <CustomInput
                                    label="Role"
                                    name="role"
                                    type="number"
                                    errors={errors}
                                    touched={touched}
                                />{" "}
                                <CustomInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    errors={errors}
                                    touched={touched}
                                />
                            </Box>

                            <Stack>
                                <Box>
                                    <ContentEditable
                                        className={`texteditor ${
                                            err ? "errMode" : ""
                                        }`}
                                        html={text.current}
                                        // onBlur={handleBlur}
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
                            </Stack>
                            <Flex
                                maxW="35rem"
                                mx="auto"
                                gap="1.12rem"
                                mt="3rem"
                            >
                                <CustomButton
                                    bgColor={"transparent"}
                                    border="1px"
                                    borderColor="grey_1"
                                    color="grey_1"
                                    //   handleClick={() => handleFillForm(false)}
                                >
                                    Cancel
                                </CustomButton>
                                <CustomButton type="submit">Next</CustomButton>
                            </Flex>
                        </Form>
                    )}
                </Formik> */}
      </Box>
    </Box>
  );
};

export default RequestFeedBack;
