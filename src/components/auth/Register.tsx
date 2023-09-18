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

interface FormValues {
  fName: string;
  email: string;
  password: string;
  location: string;
  phoneNo: number | string;
}

// type SignUpUserThunk = ReturnType<typeof signUpUser>;

const Register: React.FC = () => {
  const [isAccept, setIsAccept] = useState<boolean>(true);

  const handleAccept = () => {
    setIsAccept(!isAccept);
  };

  const mutation = useMutation({
    mutationFn: (user: FormValues) => {
      return axios.post("/auth/signin", user);
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
            fName: "",
            email: "",
            password: "",
            location: "",
            phoneNo: "",
          }}
          validate={(values: FormValues) => {
            const errors: Partial<FormValues> = {};
            if (!values.fName) {
              errors.fName = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.phoneNo) {
              errors.phoneNo = "Required";
            }
            if (!values.location) {
              errors.location = "Required";
            }

            return errors;
          }}
          onSubmit={(values: FormValues) => {
            console.log(values);
            const payload = {
              fName: values.fName,
              email: values.email,
              password: values.password,
              phoneNo: values.phoneNo,
              location: values.location,
            };
            mutation.mutate(payload);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* Name secton */}

              <CustomInput
                label="Full name"
                name="fName"
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
                name="phoneNo"
                placeholder="+234"
                type="number"
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
                isLoading={false}
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
