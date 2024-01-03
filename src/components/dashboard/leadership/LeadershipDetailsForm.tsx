import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";

import {
  leadershipDataProps,
  useLeadership,
} from "@/context/LeadershipProvider";

import { Box, Flex, Text } from "@chakra-ui/react";

import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const LeadershipDetailsForm = () => {
  const {
    formSteps,
    handleFormSteps,
    handleFillForm,
    leadershipData,
    handleLeadershipData,
  } = useLeadership();

  //  content editatble code

  const [err, setErr] = useState<boolean>(false);

  //   const navigate = useRouter();
  const text = useRef("");
  text.current = "";
  text.current = leadershipData?.solvedPro;
  const handleChange = (event: ContentEditableEvent) => {
    text.current = event.target.value;
    if (text.current !== "") {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handleBlur = () => {
    if (text.current === "" || text.current.length < 16) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  //

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
            leadershipTittle: leadershipData?.leadershipTittle || "",
            startYear: leadershipData?.startYear || "",

            endYear: leadershipData?.endYear || "",
            solvedPro: leadershipData?.solvedPro || "",
          }}
          validate={(values) => {
            const errors: Partial<leadershipDataProps> = {};

            if (!values.leadershipTittle) {
              errors.leadershipTittle = "Required";
            }
            if (!values.startYear) {
              errors.startYear = "Required";
            }

            if (!values.endYear) {
              errors.endYear = "Required";
            }

            if (err) {
              setErr(true);
              errors.solvedPro = "Required";
            } else {
              setErr(false);
            }

            return errors;
          }}
          onSubmit={(values) => {
            values.solvedPro = text.current;
            handleLeadershipData({
              ...leadershipData,
              ...values,
            });

            handleFormSteps(formSteps + 1);
            console.log(leadershipData);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {/* Course title */}
              <CustomInput
                label="Leadership tittle"
                placeholder="Input the leadership"
                name="leadershipTittle"
                type="text"
                errors={errors}
                touched={touched}
              />

              <Flex justify="space-between" gap={[".8rem", "1.8rem"]}>
                <CustomInput
                  label="Start year"
                  placeholder="YYYY"
                  name="startYear"
                  type="number"
                  errors={errors}
                  touched={touched}
                />

                <CustomInput
                  label="End year"
                  placeholder="YYYY"
                  name="endYear"
                  type="number"
                  errors={errors}
                  touched={touched}
                />
              </Flex>

              <Box mt="2rem">
                <Text
                  fontWeight="600"
                  color="grey_1"
                  maxW="20rem"
                  fontSize="1rem"
                >
                  Tell us how you used your leadership role to solve a
                  particular problem
                </Text>
                <Box mt=".8rem">
                  <ContentEditable
                    className={`texteditor ${err ? "errMode" : ""}`}
                    html={text.current}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Box>

                {err && (
                  <Text
                    color="red"
                    fontSize="12px"
                    mt="2"
                    px="2px"
                    fontWeight="500"
                  >
                    Required
                  </Text>
                )}
              </Box>

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

export default LeadershipDetailsForm;
