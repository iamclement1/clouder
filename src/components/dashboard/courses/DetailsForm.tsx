import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import UploadFile from "@/components/modals/UploadFile";
import { coursesDataProps, useCourses } from "@/context/CoursesProvider";

import { universitiesData } from "@/utils/data";

import { Box, Flex, Text } from "@chakra-ui/react";
// import { State } from "country-state-city";
import { Form, Formik } from "formik";
import React, { useState } from "react";

const DetailsForm = () => {
  const {
    formSteps,
    handleFormSteps,
    handleFillForm,
    coursesData,
    handleCoursesData,
  } = useCourses();

  // const currentLocations = State.getStatesOfCountry("NG");
  const [selectedFile, setSelectedFile] = useState<
    File | null | Blob | MediaSource
  >(null);

  return (
    <Box>
      <Box>
        <Flex align="center" justify="space-between">
          <Text fontSize="1.4rem" color="grey_1" fontWeight="500">
            Kindly share details about courses acquired
          </Text>
        </Flex>

        <Formik
          initialValues={{
            courseTitle: coursesData?.courseTitle || "",
            certificateNo: coursesData?.certificateNo || "",

            year: coursesData?.year || "",
            school: coursesData?.school || "",
            imageFile: coursesData?.imageFile || selectedFile,
          }}
          validate={(values) => {
            const errors: Partial<coursesDataProps> = {};

            if (!values.courseTitle) {
              errors.courseTitle = "Required";
            }
            if (!values.certificateNo) {
              errors.certificateNo = "Required";
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
            handleCoursesData({
              ...coursesData,
              ...values,
            });

            handleFormSteps(formSteps + 1);
            console.log(coursesData);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* Course title */}
              <CustomInput
                label="Course title"
                placeholder="Input the title of the course"
                name="courseTitle"
                type="number"
                errors={errors}
                touched={touched}
              />

              <CustomSelect
                name="school"
                label="Institution"
                errors={errors}
                touched={touched}
                options={universitiesData}
                placeholder="Select your location"
                type="school"
              />

              <CustomInput
                label="Year"
                placeholder="YYYY"
                name="year"
                type="number"
                errors={errors}
                touched={touched}
              />

              <CustomInput
                label="Certificate no."
                placeholder="Input your certificate number"
                name="certificateNo"
                type="number"
                errors={errors}
                touched={touched}
              />

              <Flex mt="1.88rem" justify={"space-between"}>
                <UploadFile
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                />
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
