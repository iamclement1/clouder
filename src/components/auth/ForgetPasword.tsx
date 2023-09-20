"use client";
import { Box } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import CustomInput from "../common/CustomInput";
import Typography from "../common/Typograph";
import CustomButton from "../common/CustomButton";
import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";

interface FormValues {
  email: string;
}

const ForgetPasword: React.FC = () => {
  //used mutation from react-query for action
  const { mutate, isLoading } = useMutation({
    mutationFn: (user: FormValues) => {
      return axios.post("/auth/signin", user);
    },
  });
  return (
    <Box bgColor="white" rounded="0.46875rem" maxW="34.3rem" mx="auto">
      <Box
        px="16px"
        maxW="28.2rem"
        mx="auto"
        py={["1.8rem", "2.8rem", "3.8rem"]}
      >
        <Typography variant="heading3"> Forgot Password </Typography>
        <Typography color="grey_1" fontSize={["0.74rem", "0.84375rem"]}>
          Enter your email for the verification process, we will send 4 digits
          code to the email provided.
        </Typography>
        <Box mt="1.62rem" w="100%">
          <Formik
            initialValues={{
              email: "",
            }}
            validate={(values: FormValues) => {
              const errors: Partial<FormValues> = {};

              if (!values.email) {
                errors.email = "Required";
              }

              return errors;
            }}
            onSubmit={(values: FormValues) => {
              const payload = {
                email: values.email,
              };
              mutate(payload);
              // console.log(values);
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                {/* Email Address */}
                <CustomInput
                  label="E-mail or phone number"
                  placeholder="Type your e-mail or phone number"
                  name="email"
                  type="text"
                  errors={errors}
                  touched={touched}
                />

                <CustomButton
                  type="submit"
                  mt="1.59rem"
                  h="3.2rem"
                  isLoading={isLoading}
                >
                  Continue
                </CustomButton>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgetPasword;
