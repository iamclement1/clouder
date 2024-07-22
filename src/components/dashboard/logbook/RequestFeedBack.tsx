import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import { COURSES_URL } from "@/config/route";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const RequestFeedBack = () => {
  const [err, setErr] = useState<boolean>(false);

  const navigate = useRouter();
  const text = useRef("");
  text.current = "";
  const handleChange = (event: ContentEditableEvent) => {
    text.current = event.target.value;
    if (text.current !== "") {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handleBlur = () => {
    if (text.current !== "") {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <Box>
      <Text fontWeight={600} fontSize={"1.5rem"}>
        Request feedback
      </Text>

      <Box
        bgColor={"white"}
        mt="1.89rem"
        py="3.25rem"
        px={["1rem", "2rem", null, null, "4rem"]}
        rounded={"0.9375rem"}
      >
        <Formik
          initialValues={{
            fullName: "",
            title: "",
            role: "",
            email: "",
            bodyText: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            values.bodyText = text.current;
            navigate.push(COURSES_URL);
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

              <Stack mt="1rem">
                <Box>
                  <Text
                    fontSize="0.84375rem"
                    color="grey_5"
                    fontWeight={"normal"}
                    mb="1rem"
                  >
                    Body Text{" "}
                  </Text>
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
              </Stack>
              <Flex maxW="35rem" mx="auto" gap="1.12rem" mt="3rem">
                <CustomButton
                  bgColor={"transparent"}
                  border="1px"
                  borderColor="grey_1"
                  color="grey_1"
                  handleClick={() => navigate.push("/dashboard/courses")}
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

export default RequestFeedBack;
