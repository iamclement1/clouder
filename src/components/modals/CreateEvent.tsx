import { CreateEventFormValues } from "@/utils/types";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Text,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik, FieldProps } from "formik";
import React from "react";
import { HiMiniCalendarDays } from "react-icons/hi2";
import CustomTextarea from "../common/CustomTextarea";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomButton from "../common/CustomButton";

const CreateEvent: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack spacing={"0.38rem"} mt="0.56rem">
      <Box>
        <Flex
          fontSize={"0.84375rem"}
          color="primary"
          cursor={"pointer"}
          onClick={onOpen}
        >
          + Add to my Calender
        </Flex>
      </Box>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={"lg"}
      >
        <ModalOverlay />
        <ModalContent mt="1.8rem">
          <ModalHeader>Add to Calender </ModalHeader>
          <ModalCloseButton top="1rem" />
          <ModalBody mb="2rem">
            <Box>
              <Formik
                initialValues={{
                  eventDes: "",
                  startDate: new Date(),
                }}
                validate={(values: CreateEventFormValues) => {
                  const errors: Partial<CreateEventFormValues> = {};

                  if (!values.eventDes) {
                    errors.eventDes = "Required";
                  }
                  if (!values.startDate) {
                    errors.startDate = "Required";
                  }

                  return errors;
                }}
                onSubmit={(values: CreateEventFormValues) => {
                  console.log(values);
                  onClose();
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <Form onSubmit={handleSubmit}>
                    {/* Email Address */}
                    <CustomTextarea
                      label="About the Event"
                      placeholder="Advanced medical workshop"
                      name="eventDes"
                      errors={errors}
                      touched={touched}
                    />

                    <Box mt="1.88rem">
                      <Text fontSize="0.75rem" fontWeight="500">
                        Pick a Date and Time for the Upcoming Event
                      </Text>

                      <Box mt="1.12rem">
                        <Box pos="relative">
                          <Icon
                            as={HiMiniCalendarDays}
                            position="absolute"
                            top="50%"
                            left="1rem"
                            zIndex={"800"}
                            transform={"auto"}
                            translateY={"-50%"}
                          />
                          <Field name="startDate">
                            {({ field, form }: FieldProps<Date>) => (
                              <DatePicker
                                selected={field.value}
                                showTimeSelect
                                onChange={(date) =>
                                  form.setFieldValue("startDate", date)
                                }
                                dateFormat="Pp"
                                id="startDate"
                              />
                            )}
                          </Field>
                        </Box>
                        <ErrorMessage
                          className="err"
                          name="startDate"
                          component="div"
                        />
                      </Box>
                    </Box>

                    <CustomButton
                      type="submit"
                      mt="1.5rem"
                      maxW={"11rem"}
                      w="100%"
                      // h="3.23438rem"
                      fontSize={["0.75rem"]}
                      handleClick={onOpen}
                      mx="auto"
                      display="block"
                    >
                      {" "}
                      Update My Calendar
                    </CustomButton>
                  </Form>
                )}
              </Formik>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default CreateEvent;
