"use client";
import React from "react";
import { Field } from "formik";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

interface CustomTextareaProps {
  label?: string;
  name: string;
  // type: string;
  placeholder?: string;
  errors: {
    [key: string]: string | undefined;
  };
  touched: {
    [key: string]: boolean | undefined;
  };
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  name,

  placeholder,

  errors,
  touched,
  ...props
}) => {
  return (
    <FormControl isInvalid={!!errors[name] && touched[name]} mt="12px">
      <FormLabel
        htmlFor={name}
        fontSize="0.84375rem"
        color="grey_5"
        fontWeight={"500"}
      >
        {label}
      </FormLabel>
      <Box pos="relative">
        <Textarea
          {...props}
          as={Field}
          component="textarea"
          id={name}
          name={name}
          placeholder={placeholder}
          fontSize={"0.75rem"}
          // px={"20px"}
          py="12px"
          // display="inline-block"
          _focusVisible={{
            border: "1px",
            borderColor: "grey_3",
          }}
          border="1px"
          borderColor="grey_3"
          color="grey_4"
          rounded="5px"
        />
      </Box>

      <FormErrorMessage fontSize={["12px"]}>{errors[name]}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomTextarea;
