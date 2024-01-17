import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import { researchDataProps, useResearch } from "@/context/ResearchProvider";

import { Box, Flex, Icon, Stack } from "@chakra-ui/react";

import { Form, Formik } from "formik";
import React from "react";
import { BsDash } from "react-icons/bs";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const ResearchDetailsForm = () => {
  const {
    formSteps,
    handleFormSteps,
    handleFillForm,
    researchData,
    handleResearchData,
    addToAuthor,
    minusFromAuthor,
    noOfAuthor,
  } = useResearch();

  return (
    <Box>
      <Box>
        {/* <Flex align="center" justify="space-between">
                    <Text fontSize="1.4rem" color="grey_1" fontWeight="500">
                        Kindly share details about courses acquired
                    </Text>
                </Flex> */}

        <Formik
          initialValues={{
            researchTittle: researchData?.researchTittle || "",
            year: researchData?.year || "",
            author: researchData?.author || "",
            authorII: researchData?.authorII || "",
            authorIII: researchData?.authorIII || "",
            authorIV: researchData?.authorIV || "",
          }}
          validate={(values) => {
            const errors: Partial<researchDataProps> = {};

            if (!values.researchTittle) {
              errors.researchTittle = "Required";
            }
            if (!values.year) {
              errors.year = "Required";
            }

            if (!values.author) {
              errors.author = "Required";
            }
            if (noOfAuthor > 1 && !values.authorII) {
              errors.authorII = "Required";
            }
            if (noOfAuthor > 2 && !values.authorIII) {
              errors.authorIII = "Required";
            }
            if (noOfAuthor > 3 && !values.authorIV) {
              errors.authorIV = "Required";
            }

            return errors;
          }}
          onSubmit={(values) => {
            handleResearchData({
              ...researchData,
              ...values,
            });

            handleFormSteps(formSteps + 1);
            console.log(researchData);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* Input the research title */}
              <CustomInput
                label="Research title"
                placeholder="Input the research title"
                name="researchTittle"
                type="text"
                errors={errors}
                touched={touched}
              />
              <CustomInput
                label="Year"
                placeholder="DD/MM/YY"
                name="year"
                type="number"
                errors={errors}
                touched={touched}
              />{" "}
              {/* ********** Authour Section  ********** */}
              <Stack spacing="0px">
                {noOfAuthor >= 1 && (
                  <CustomInput
                    label="Author"
                    placeholder="Full name of the author"
                    name="author"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                )}
                {noOfAuthor > 1 && (
                  <CustomInput
                    label="Author ii"
                    placeholder="Full name of the author"
                    name="authorII"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                )}
                {noOfAuthor > 2 && (
                  <CustomInput
                    label="Author iii"
                    placeholder="Full name of the author"
                    name="authorIII"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                )}
                {noOfAuthor > 3 && (
                  <CustomInput
                    label="Author iv"
                    placeholder="Full name of the author"
                    name="authorIV"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                )}

                <Flex align="center" justify="space-between" gap="1.5rem">
                  {noOfAuthor < 4 && (
                    <Flex
                      mt="0.73rem"
                      gap="0.38rem"
                      fontSize={"0.84375rem"}
                      color="primary"
                      cursor={"pointer"}
                      align="center"
                      fontWeight="600"
                      onClick={addToAuthor}
                      as="button"
                      type="button"
                    >
                      <Icon as={MdOutlineAddCircleOutline} /> add more authors
                    </Flex>
                  )}
                  {/* Remove Author */}
                  {noOfAuthor !== 1 && (
                    <Flex
                      mt="0.73rem"
                      gap="0.38rem"
                      fontSize={"0.84375rem"}
                      color="red"
                      cursor={"pointer"}
                      align="center"
                      fontWeight="600"
                      onClick={minusFromAuthor}
                      as="button"
                      type="button"
                    >
                      <Icon as={BsDash} /> remove authors
                    </Flex>
                  )}
                </Flex>
              </Stack>
              {/* *** Submit buttom *** */}
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

export default ResearchDetailsForm;
