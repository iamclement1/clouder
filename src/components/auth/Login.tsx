"use client";
import { Box, Link, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import CustomInput from "../common/CustomInput";
import Typography from "../common/Typograph";
import CustomButton from "../common/CustomButton";
import LoginWithIcon from "./LoginWithIcon";
import { LoginFormValues } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import Seo from "../common/SEO";
import { Metadata } from "next";
import {
  DASHBOARD_URL,
  FORGET_PASSWORD_URL,
  SUPERVISOR_DASHBOARD_URL,
} from "@/config/route";
import { toast } from "sonner";
import { setCookie } from "cookies-next";

export const metadata: Metadata = {
  title: "Login",
  icons: {
    icon: "/logo.png",
  },
};

const Login: React.FC = () => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: (user: LoginFormValues) => {
      return api.post("/auth/signin", user);
    },
    onSuccess: ({ data }) => {
      const userToken = data.access;
      const refreshToken = data.refresh;
      const role = data.role;
      const plan = data.plan;

      setCookie("token", JSON.stringify(userToken));
      setCookie("refreshToken", JSON.stringify(refreshToken));
      setCookie("role", JSON.stringify(role));
      setCookie("plan", JSON.stringify(plan));

      sessionStorage.setItem("token", userToken);
      sessionStorage.setItem("refreshToken", refreshToken);
      sessionStorage.setItem("role", role);
      sessionStorage.setItem("plan", plan);

      if (role === "client") {
        router.push(DASHBOARD_URL);
      } else {
        router.push(SUPERVISOR_DASHBOARD_URL);
      }
      toast.success("Login Successful");
    },
    onError: (error: { response: { data: { error: string } } }) => {
      console.log("error:", error);
      const errorMsg = error.response.data.error;
      toast.error(errorMsg);
    },
  });

  return (
    <Box px="16px">
      <Seo templateTitle="Login" />
      <Typography variant="heading2">Welcome back!</Typography>
      <Typography color="grey_1">Medical e-portfolio with ease</Typography>
      <Box mt="1.62rem" w="100%">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values: LoginFormValues) => {
            const errors: Partial<LoginFormValues> = {};

            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={async (values: LoginFormValues) => {
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
                  href={FORGET_PASSWORD_URL}
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
