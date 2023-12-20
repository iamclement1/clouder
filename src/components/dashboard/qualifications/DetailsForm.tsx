import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import UploadCertificate from "@/components/modals/UploadCertificate";
import {
  QualificationData,
  useQualification,
} from "@/context/QualificationProvider";
import { universitiesData } from "@/utils/data";
// import { DetailsFormValues } from "@/utils/types";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";

const DetailsForm = () => {
  const {
    formSteps,
    handleFormSteps,
    handleFillForm,
    qualificationData,
    handleQualificationData,
  } = useQualification();

  const [selectedFile, setSelectedFile] = useState<
    File | null | Blob | MediaSource
  >(null);

  return (
    <Box>
      <Box>
        <Flex align="center" justify="space-between">
          <Text fontSize="1.4rem" color="grey_1" fontWeight="500">
            Kindly share details about your Qualifications
          </Text>
        </Flex>

        <Formik
          initialValues={{
            degree: qualificationData?.degree || "",
            year: qualificationData?.year || "",
            school: qualificationData?.school || "",
            imageFile: qualificationData?.imageFile || selectedFile,
          }}
          validate={(values) => {
            const errors: Partial<QualificationData> = {};

            if (!values.degree) {
              errors.degree = "Required";
            }
            if (!values.year) {
              errors.year = "Required";
            }
            if (!values.school) {
              errors.school = "Required";
            }

            return errors;
          }}
          onSubmit={(values) => {
            values.imageFile = selectedFile;
            handleQualificationData({
              ...qualificationData,
              ...values,
            });

            handleFormSteps(formSteps + 1);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* Degree */}

              <CustomInput
                label="Degree"
                placeholder="Input your degree"
                name="degree"
                type="number"
                errors={errors}
                touched={touched}
              />
              {/* Year */}
              <CustomInput
                label="Year of Graduation"
                placeholder="Input your year of graduation"
                name="year"
                type="number"
                errors={errors}
                touched={touched}
              />

              <CustomSelect
                name="school"
                label="Name of Institution"
                errors={errors}
                touched={touched}
                options={universitiesData}
                placeholder="Select your location"
                type="school"
              />

              <Flex mt="1.88rem" justify={"space-between"}>
                <UploadCertificate
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                />

                <Flex
                  fontSize={"0.84375rem"}
                  fontWeight="600"
                  color="primary"
                  cursor={"pointer"}
                >
                  + Add more qualifications
                </Flex>
              </Flex>

              <Flex maxW="35rem" mx="auto" gap="1.12rem" mt="3rem">
                <CustomButton
                  bgColor={"transparent"}
                  border="1px"
                  borderColor="grey_1"
                  color="grey_1"
                  handleClick={() => handleFillForm(false)}
                >
                  Cancel
                </CustomButton>
                <CustomButton type="submit">Next</CustomButton>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default DetailsForm;
