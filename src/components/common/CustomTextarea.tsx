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
  borderColor?: string;
  fontSize?: string;
  placeholder?: string;
  bgColor?: string;
  errors: {
    [key: string]: string | undefined;
  };
  touched: {
    [key: string]: boolean | undefined;
  };
  minH?: string;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  name,
  fontSize,
  placeholder,
  borderColor,
  errors,
  touched,
  bgColor,
  minH,
  ...props
}) => {
  return (
    <FormControl
      isInvalid={!!errors[name] && touched[name]}
      mt="12px"
      _invalid={{ border: "1px", borderColor: "red" }}
    >
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
          fontSize={fontSize || "0.75rem"}
          // px={"20px"}
          minH={minH}
          py="12px"
          // display="inline-block"
          _focusVisible={{
            border: "1px",
            borderColor: `${borderColor || "grey_3"}`,
          }}
          _focus={{
            border: "1px",
            borderColor: `${borderColor || "grey_3"}`,
          }}
          _hover={{
            borderColor: `${borderColor || "grey_3"}`,
          }}
          border="1px"
          borderColor={borderColor || "grey_3"}
          color="grey_4"
          rounded="5px"
          bgColor={bgColor}
        />
      </Box>

      <FormErrorMessage fontSize={["12px"]}>{errors[name]}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomTextarea;
