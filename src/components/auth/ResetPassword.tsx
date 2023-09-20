"use client";
import { Box, Image } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
import Typography from "../common/Typograph";
import CustomButton from "../common/CustomButton";
import { useRouter } from "next/navigation";
// import { useMutation } from "@tanstack/react-query";
// import axios from "@/utils/axios";
// import { useRouter } from "next/router";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const ResetPassword: React.FC = () => {
  // toggle between successfull chnage password section
  const [isChangeSuccessful, setIsChangeSuccessful] = useState<boolean>(false);
  //used mutation from react-query for action
  // const { mutate, isLoading } = useMutation({
  //   mutationFn: (user: FormValues) => {
  //     return axios.post("/auth/signin", user);
  //   },
  // });
  const navigate = useRouter();
  return (
    <>
      {isChangeSuccessful ? (
        <Box bgColor="white" rounded="0.46875rem" maxW="34.3rem" mx="auto">
          <Box
            px="16px"
            maxW="28.2rem"
            mx="auto"
            py={["1.8rem", "2.8rem", "3.8rem"]}
            textAlign="center"
          >
            <Image
              src="/upload.svg"
              alt="upload successful image"
              display="block"
              mx="auto"
              w={["4rem", "5rem", "7rem"]}
              h={["4rem", "5rem", "7rem"]}
            />

            <Typography variant="heading3" mt={["1rem", "1.4rem", "1.8rem"]}>
              {" "}
              Successful
            </Typography>
            <Typography
              mt="1.12rem"
              color="grey_1"
              fontSize={["0.74rem", "0.84375rem"]}
            >
              Your password has been reset successfully
            </Typography>

            <CustomButton
              type="submit"
              mt="1.59rem"
              h="3.2rem"
              handleClick={() => navigate.push("/")}
            >
              Continue
            </CustomButton>
          </Box>
        </Box>
      ) : (
        <Box bgColor="white" rounded="0.46875rem" maxW="34.3rem" mx="auto">
          <Box
            px="16px"
            maxW="28.2rem"
            mx="auto"
            py={["1.8rem", "2.8rem", "3.8rem"]}
          >
            <Typography variant="heading3"> New Password </Typography>
            <Typography color="grey_1" fontSize={["0.74rem", "0.84375rem"]}>
              Set the new password for your account so you can login and access
              all features.
            </Typography>
            <Box mt="1.62rem" w="100%">
              <Formik
                initialValues={{
                  password: "",
                  confirmPassword: "",
                }}
                validate={(values: FormValues) => {
                  const errors: Partial<FormValues> = {};

                  if (!values.password) {
                    errors.password = "Required";
                  }
                  if (values.confirmPassword !== values.password) {
                    errors.confirmPassword = "Password does not match";
                  }

                  return errors;
                }}
                onSubmit={(values: FormValues) => {
                  // const payload = {
                  //   password: values.password,
                  //   confirmPassword: values.confirmPassword,
                  // };
                  // mutate(payload);

                  setIsChangeSuccessful(true);
                  console.log(values);
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <Form onSubmit={handleSubmit}>
                    {/* Email Address */}
                    <CustomInput
                      label="Enter new password"
                      placeholder="********"
                      name="password"
                      type="password"
                      errors={errors}
                      touched={touched}
                    />

                    <CustomInput
                      label="Confirm new password"
                      placeholder="********"
                      name="confirmPassword"
                      type="password"
                      errors={errors}
                      touched={touched}
                    />

                    <CustomButton
                      type="submit"
                      mt="1.59rem"
                      h="3.2rem"
                      // isLoading={isLoading}
                    >
                      Continue
                    </CustomButton>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ResetPassword;
