"use client";
import React from "react";
import { useState } from "react";
import { Field } from "formik";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";

import { FiEye, FiEyeOff } from "react-icons/fi";

interface CustomInputProps {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  errors: {
    [key: string]: string | undefined;
  };
  touched: {
    [key: string]: boolean | undefined;
  };
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type,
  placeholder,

  errors,
  touched,
  ...props
}) => {
  const [showPassWord, setShowPassWord] = useState(false);
  const handleShowPassword = () => {
    setShowPassWord(!showPassWord);
  };
  return (
    <FormControl isInvalid={!!errors[name] && touched[name]} mt="12px">
      <FormLabel
        htmlFor={name}
        fontSize="0.84375rem"
        color="grey_5"
        fontWeight={"normal"}
      >
        {label}
      </FormLabel>
      <Box pos="relative">
        <Input
          {...props}
          as={Field}
          id={name}
          name={name}
          type={
            type === "password" ? (showPassWord ? "text" : "password") : "text"
          }
          placeholder={placeholder}
          fontSize={"0.75rem"}
          px={"20px"}
          py="12px"
          display="inline-block"
          _focusVisible={{
            border: "1px",
            borderColor: "grey_3",
          }}
          border="1px"
          borderColor="grey_3"
          color="grey_4"
          rounded="5px"
          h="3.23438rem"
        />
        {type === "password" && (
          <Icon
            transform={"auto"}
            pos="absolute"
            translateY={"-50%"}
            top="50%"
            right="22px"
            as={showPassWord ? FiEyeOff : FiEye}
            cursor="pointer"
            onClick={handleShowPassword}
          />
        )}

        {name === "phone_number" && (
          <Flex
            w="100%"
            maxW="67px"
            bg={"white"}
            transform={"auto"}
            borderRight="1px"
            bgColor="transparent"
            borderColor="dark_4"
            pos="absolute"
            borderLeftRadius={"8px"}
            top="9px"
            bottom="9px"
            left="1px"
            fontSize="0.75rem"
            justify="center"
            align="center"
            color="accent_2"
          >
            <Text>+234</Text>
          </Flex>
        )}
      </Box>

      <FormErrorMessage fontSize={["12px"]}>{errors[name]}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
