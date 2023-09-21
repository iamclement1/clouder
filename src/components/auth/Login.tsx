import { Box, Link, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import CustomInput from "../common/CustomInput";
import Typography from "../common/Typograph";
import CustomButton from "../common/CustomButton";
import LoginWithIcon from "./LoginWithIcon";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import axios from "@/utils/axiosInstance";

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  //used mutation from react-query for action
  const { mutate, isLoading } = useMutation({
    mutationFn: (user: FormValues) => {
      return axios.post("/auth/signin", user);
    },

    onError(error, variables, context) {
      console.log(error, variables, context);
      alert("Credentials not valid");
    },
    onSuccess(data) {
      if (data.status === 201) {
        router.push("/dashboard");
        const userData = JSON.stringify(data);
        const userToken = data.data.access;
        const refreshToken = data.data.refresh;
        sessionStorage.setItem("user", userData);
        setCookie("token", userToken);
        setCookie("refresh", refreshToken);
      }
    },
  });
  return (
    <Box px="16px">
      <Typography variant="heading2">Welcome back!</Typography>
      <Typography color="grey_1">Medical e-portfolio with ease</Typography>
      <Box mt="1.62rem" w="100%">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values: FormValues) => {
            const errors: Partial<FormValues> = {};

            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={(values: FormValues) => {
            const payload = {
              email: values.email,
              password: values.password,
            };
            mutate(payload);
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
              {/* Password */}
              <CustomInput
                label="Password"
                placeholder="Type your password"
                name="password"
                type="password"
                errors={errors}
                touched={touched}
              />
              <Box mt="0.5rem">
                <Link
                  href="/auth/forget_password"
                  display="block"
                  color="red_1"
                  fontSize="0.65625rem"
                  textAlign="right"
                >
                  Forgot Password?
                </Link>
              </Box>

              <CustomButton
                type="submit"
                mt="1.59rem"
                h="3.2rem"
                isLoading={isLoading}
              >
                Sign in
              </CustomButton>
            </Form>
          )}
        </Formik>
      </Box>

      <Box mt="1.25rem">
        <Text fontSize="0.5625rem" color="grey_6" textAlign="center">
          or continue with other accounts
        </Text>

        <Box>
          <LoginWithIcon />
        </Box>
        <Box mt="1.13rem">
          <Text
            fontSize={"0.75rem"}
            textAlign="center"
            fontWeight="600"
            color="grey_7"
          >
            Don’t have an account?
            <Text
              as="a"
              href="/auth/register"
              display="inline"
              fontSize={"0.75rem"}
              color="black_2"
            >
              {" "}
              Sign Up
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
