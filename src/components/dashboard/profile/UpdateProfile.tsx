"use client";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import UploadImage from "@/components/modals/UploadImage";
import useProfile from "@/hooks/useProfile";
import api from "@/utils/axiosInstance";
import { ProfileFormValues } from "@/utils/types";
import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UpdateProfile: React.FC = () => {
  const { data, isLoading } = useProfile();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [uploadedImage, setUploadedImage] = React.useState<File | null>(null);
  console.log(data);

  if (isLoading) return <p>Fetching your information, please wait....</p>;

  const userData = data?.data;
  // function to update user profile

  // const handleImageSave = () => {
  //   // Handle image save logic if needed
  //   console.log("Image saved!");
  // };
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
            if (!values.phone) {
              errors.phone = "Required";
            }

            return errors;
          }}
          onSubmit={async (values: ProfileFormValues) => {
            const formData = new FormData();

            switch (true) {
              case !!uploadedImage:
                formData.append("image", uploadedImage as Blob);
                break;
              case values.fullName !== userData?.fullName:
                formData.append("fullName", values.fullName);
                break;
              case values.email !== userData?.email:
                formData.append("email", values.email);
                break;
              case values.phone !== userData?.phone:
                formData.append("phone", values.phone);
                break;
              default:
                break;
            }

            try {
              setLoading(true);
              const response = await api.patch("/user/update", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              });

              if (response.status === 200) {
                setLoading(false);
                const msg = response?.data.message;
                toast.success(msg);
                router.push("/dashboard");
              }

              console.log(response);
            } catch (error) {
              setLoading(false);
              console.error("Error uploading data:", error);
            }
          }}
          // onSubmit={async (values: ProfileFormValues) => {
          //   const formData = new FormData();
          //   const changedFields: string[] = [];

          //   // Check if each field has changed and append it to the FormData
          //   if (values.fullName !== userData?.fullName) {
          //     formData.append("fullName", values.fullName);
          //     changedFields.push("fullName");
          //   }

          //   if (values.email !== userData?.email) {
          //     formData.append("email", values.email);
          //     changedFields.push("email");
          //   }

          //   if (values.phone !== userData?.phone) {
          //     formData.append("phone", values.phone);
          //     changedFields.push("phone");
          //   }

          //   // Append image if it has changed
          //   if (!!uploadedImage) {
          //     formData.append("image", uploadedImage as Blob);
          //     changedFields.push("image");
          //   }

          //   // Check if any fields have changed
          //   if (changedFields.length === 0) {
          //     console.log("No changes detected");
          //     return;
          //   }

          //   try {
          //     setLoading(true);
          //     const response = await api.patch("/user/update", formData, {
          //       headers: {
          //         "Content-Type": "multipart/form-data",
          //       },
          //     });

          //     if (response.status === 200) {
          //       setLoading(false);
          //       const msg = response?.data.message;
          //       toast.success(msg);
          //       router.push("/dashboard");
          //     }

          //     console.log(response);
          //   } catch (error) {
          //     setLoading(false);
          //     console.error("Error uploading data:", error);
          //   }
          // }}
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
                    isLoading={loading}
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
