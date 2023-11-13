"use client";
import { Box } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import CustomInput from "../common/CustomInput";
import Typography from "../common/Typograph";
import CustomButton from "../common/CustomButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axiosInstance";
import { useModal } from "@/context/ModalContext";
import { toast } from "react-toastify";

interface FormValues {
  password: string;
  confirmPassword?: string;
}

const ResetPassword: React.FC = () => {
  // toggle between successfull chnage password section
  const { openModal } = useModal();
  const router = useRouter();
  const tokenParam = useSearchParams();
  const token = tokenParam.get("token");
  //get token from url
  // const token = router.query.token as string;
  //used mutation from react-query for action
  const { mutate, isLoading } = useMutation({
    mutationFn: (user: FormValues) => {
      return axios.post("/auth/reset_password", user);
    },
    onSuccess: (data) => {
      if (data) {
        openModal({
          type: "success",
          message: "Password Updated Successfully",
          title: "Update Password Successful",
          buttonType: "fill",
          buttonText: "Continue",
        });
        router.push("/auth/login");
      }
    },
    onError: (error: { response: { data: { message: string } } }) => {
      const errorMsg = error.response.data.message;
      toast.error(errorMsg, {
        theme: "dark",
      });
    },
    // onError: (error: AxiosError) => {
    //   if (error.response) {
    //     if (error.response.status === 0) {
    //       // CORS-related error
    //       toast.error("CORS Error: Unable to access the server due to CORS restrictions.", {
    //         theme: "dark",
    //       });
    //     } else {
    //       // Other types of errors
    //       const errorMsg = error.response.data.message ;
    //       toast.error(errorMsg, {
    //         theme: "dark",
    //       });
    //     }
    //   } else {
    //     // Handle other types of errors
    //     toast.error("An unexpected error occurred.", {
    //       theme: "dark",
    //     });
    //   }
    // },
  });
  return (
    <>
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
                // Extract password from values
                const { password } = values;
                const payload = {
                  token,
                  password,
                };

                mutate(payload);
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
    </>
  );
};

export default ResetPassword;
