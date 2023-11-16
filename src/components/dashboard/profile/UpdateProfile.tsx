"use client";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import UploadImage from "@/components/modals/UploadImage";
import useProfile from "@/hooks/useProfile";
import api from "@/utils/axiosInstance";
import { ProfileFormValues } from "@/utils/types";
import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const UpdateProfile: React.FC = () => {
  const { data, isLoading } = useProfile();
  const router = useRouter();
  const [uploadedImage, setUploadedImage] = React.useState<File | null>(null);

  if (isLoading) return <p>Fetching your information, please wait....</p>;

  const userData = data?.data;
  // function to update user profile

  return (
    <Box>
      <Flex justify="center">
        <Box textAlign="center">
          <Image
            src="/user.svg"
            alt=""
            boxSize={"5rem"}
            display="block"
            mx="auto"
            objectFit="cover"
          />
          <Text fontSize="1.3125rem" fontWeight="400" mt="0.75rem">
            Please upload image
          </Text>

          <UploadImage onUpload={(file) => setUploadedImage(file)} />

          <Text fontSize="1.3125rem" fontWeight="400" mt="2rem">
            Welcome back {userData?.fullName} 😊
          </Text>
        </Box>
      </Flex>

      <Box mt="4.6rem">
        <Text fontSize={"1.5rem"} fontWeight="700">
          Personal Details
        </Text>

        <Formik
          initialValues={{
            fullName: userData?.fullName ?? "",
            email: userData?.email ?? "",
            dob: userData?.dob ?? "",
            phone: userData?.phone ?? "",
          }}
          validate={(values: ProfileFormValues) => {
            const errors: Partial<ProfileFormValues> = {};
            if (!values.fullName) {
              errors.fullName = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            }
            // if (!values.dob) {
            //     errors.dob = "Required";
            // }
            if (!values.phone) {
              errors.phone = "Required";
            }

            return errors;
          }}
          onSubmit={async (values: ProfileFormValues) => {
            const formData = new FormData();
            formData.append("image", uploadedImage as Blob);
            formData.append("fullName", values.fullName);
            formData.append("email", values.email);
            formData.append("dob", values.dob);
            formData.append("phone", values.phone);

            try {
              const response = await api.patch("/user/update", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              });
              if (response.status === 200) {
                const msg = response?.data.message;
                toast.success(msg);
                router.push("/dashboard");
              }
              // Handle the response as needed
            } catch (error) {
              console.error("Error uploading data:", error);
            }
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* Name secton */}

              <Stack spacing="1.5rem">
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
                  disabled={true}
                />

                <Flex
                  flexDir={["column", null, "row"]}
                  justify="center"
                  gap={["12px", "2rem"]}
                >
                  {/* DOB section */}
                  <Box w={["100%"]} mt="12px">
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.84375rem",
                        margin: "0px 12px 8px 0px",
                      }}
                      htmlFor="dob"
                    >
                      Date of Birth
                    </label>
                    <Field
                      // {...props}
                      // as={Field}
                      id={"dob"}
                      name={"dob"}
                      type="date"
                      disabled
                      placeholder={"date of birth"}
                      style={{
                        fontSize: "0.75rem",
                        padding: "12px 20px",
                        display: "block",
                        border: "1px solid #ACB5BD",
                        width: "100%",
                        height: "3.23438rem",
                        color: "#353945",
                        borderRadius: "5px",
                      }}
                    />
                  </Box>

                  {/* Phone number */}
                  <CustomInput
                    label="Phone number"
                    name="phone"
                    placeholder="+234"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                </Flex>

                {/* Submit section  */}
                <Flex maxW="34rem" mx="auto" gap="1.12rem">
                  <CustomButton
                    mt="1.59rem"
                    h="3.2rem"
                    w="100%"
                    // isLoading={isLoading}
                    // isDisabled={isAccept}
                  >
                    Cancel
                  </CustomButton>

                  <CustomButton
                    type="submit"
                    mt="1.59rem"
                    h="3.2rem"
                    w="100%"
                    isLoading={isLoading}
                    // isDisabled={isAccept}
                  >
                    Update
                  </CustomButton>
                </Flex>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default UpdateProfile;
