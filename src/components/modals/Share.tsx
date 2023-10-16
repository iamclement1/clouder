import { ShareFormValues } from "@/utils/types";
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
  Divider,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import Suggestion from "../dashboard/Suggestion";

const Share: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box>
        <CustomButton
          w={"4.1rem"}
          h="2.2rem"
          fontSize={"0.75rem"}
          handleClick={onOpen}
        >
          {" "}
          Share
        </CustomButton>
      </Box>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={"lg"}
      >
        <ModalOverlay />
        <ModalContent mt="1.8rem" minH="23rem" pb="1.1rem">
          <ModalHeader>
            Invite
            <Divider />
          </ModalHeader>
          <ModalCloseButton top="0.7rem" />
          <ModalBody>
            <Box>
              <Formik
                initialValues={{
                  email: "",
                }}
                validate={(values: ShareFormValues) => {
                  const errors: Partial<ShareFormValues> = {};

                  if (!values.email) {
                    errors.email = "Required";
                  }

                  return errors;
                }}
                onSubmit={(values: ShareFormValues) => {
                  console.log(values);
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <Form onSubmit={handleSubmit}>
                    <Box>
                      <Text fontSize="0.9375rem" fontWeight="400">
                        Give access to your supervisor or an individual to view
                        your portfolio
                      </Text>

                      <Flex
                        // align={"center"}
                        gap="0.98rem"
                      >
                        <CustomInput
                          placeholder="Supervisor/individuals email address"
                          name="email"
                          type="email"
                          errors={errors}
                          touched={touched}
                        />
                        <CustomButton
                          type="submit"
                          mt="12px"
                          maxW={"5rem"}
                          w="100%"
                          h="3.23438rem"
                          fontSize={["0.75rem", "1.125rem"]}
                          handleClick={onOpen}
                        >
                          {" "}
                          Share
                        </CustomButton>
                      </Flex>
                    </Box>
                  </Form>
                )}
              </Formik>

              <Suggestion />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Share;
