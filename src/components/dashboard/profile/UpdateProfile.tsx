"use client";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import UploadImage from "@/components/modals/UploadImage";
import useProfile from "@/hooks/useProfile";
import api from "@/utils/axiosInstance";
import { ProfileFormValues } from "@/utils/types";
import {
  Box,
  Flex,
  Image,
  Text,
  Stack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UpdateProfile: React.FC = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useProfile();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [uploadedImage, setUploadedImage] = React.useState<File | null>(null);

  if (isLoading)
    return (
      <Box padding="6" boxShadow="sm" bg="white">
        <SkeletonCircle size="10" alignItems={"center"} />
        <SkeletonText mt="4" noOfLines={10} spacing="4" skeletonHeight="2" />
      </Box>
    );

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
                queryClient.invalidateQueries(["user", userData?.userId]);
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
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
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
