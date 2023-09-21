"use client";
import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
import Typography from "../common/Typograph";
import CustomButton from "../common/CustomButton";
import CustomSelect from "../common/CustomSelect";
import { State } from "country-state-city";
import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";
import { RegisterFormValues } from "@/utils/types";

const Register: React.FC = () => {
  const [isAccept, setIsAccept] = useState<boolean>(true);

  const handleAccept = () => {
    setIsAccept(!isAccept);
  };

  const router = useRouter();
  //used mutation from react-query for action
  const { mutate, isLoading } = useMutation({
    mutationFn: (user: RegisterFormValues) => {
      return axios.post("/auth/signup", user);
    },
    onSuccess(data) {
      if (data.status === 201) {
        router.push("/auth/login");
        // const userData = JSON.stringify(data)
        // sessionStorage.setItem('user', userData)
      }
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });

  const currentLocations = State.getStatesOfCountry("NG");

  return (
    <Box py="2rem">
      <Box>
        <Typography variant="heading2"> Create an Account</Typography>
        <Typography color="grey_1">
          Start your journey with the most intuitive and secure online platform
        </Typography>
      </Box>
      <Box>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            location: "",
            phone: "",
          }}
          validate={(values: RegisterFormValues) => {
            const errors: Partial<RegisterFormValues> = {};
            if (!values.fullName) {
              errors.fullName = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.phone) {
              errors.phone = "Required";
            }
            if (!values.location) {
              errors.location = "Required";
            }

            return errors;
          }}
          onSubmit={(values: RegisterFormValues) => {
            console.log(values);
            const payload = {
              fullName: values.fullName,
              email: values.email,
              phone: values.phone,
              location: values.location,
              password: values.password,
            };
            mutate(payload);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* Name secton */}

              <CustomInput
                label="Full name"
                name="fullName"
                placeholder="Eg John Doe"
                type="text"
                errors={errors}
                touched={touched}
              />

              {/* Email Address */}

              <CustomInput
                label="Email address"
                name="email"
                type="email"
                errors={errors}
                touched={touched}
              />
              {/* Phone number */}
              <CustomInput
                label="Phone number"
                name="phone"
                placeholder="+234"
                type="text"
                errors={errors}
                touched={touched}
              />

              {/* Password section */}

              <CustomInput
                label="Password"
                name="password"
                type="password"
                errors={errors}
                touched={touched}
              />
              {/* Location Section */}

              <CustomSelect
                name="location"
                label="Location"
                errors={errors}
                touched={touched}
                options={currentLocations}
                placeholder="Select your location"
              />
              {/* PRivacy and policy  */}
              <Flex mt="0.7rem" align="center" gap="10px">
                <Checkbox
                  // value={isAccept}
                  onChange={handleAccept}
                />
                <Text fontSize={"0.75rem"} color="black_1">
                  I have read and acknowledge Clouder’s Privacy Policy
                </Text>
              </Flex>

              {/* PRivacy and policy Note */}

              <Text fontSize={"0.75rem"} color="black_1" mt="0.5rem">
                By providing us with your email, you agree to Clouders Terms of
                Service and to receive email updates
              </Text>
              {/* Submit section  */}
              <CustomButton
                type="submit"
                mt="1.59rem"
                h="3.2rem"
                isLoading={isLoading}
                isDisabled={isAccept}
              >
                Create Account
              </CustomButton>
            </Form>
          )}
        </Formik>

        <Box mt="1.13rem">
          <Text
            fontSize={"0.75rem"}
            textAlign="center"
            fontWeight="600"
            color="grey_7"
          >
            Already have an account?
            <Text
              as="a"
              href="/auth/login"
              display="inline"
              fontSize={"0.75rem"}
              color="black_2"
            >
              {" "}
              Sign In
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
