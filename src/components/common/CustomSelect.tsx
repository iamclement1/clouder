import React from "react";
import { Box, FormLabel, Select, Text } from "@chakra-ui/react";
import { Field, FieldProps } from "formik";

type Option = {
  countryCode: string;
  isoCode: string;
  latitude: string;
  longitude: string;
  name: string;
};

type CustomSelectProps = {
  name: string;
  label: string;
  options: (Option | { name: string } | string)[];
  placeholder?: string;
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
  type?: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  options,
  placeholder = "Select Category",
  errors,
  touched,
}) => {
  return (
    <Box mt="16px" w="100%">
      <Field name={name}>
        {({ field }: FieldProps) => (
          <>
            <FormLabel
              htmlFor={name}
              fontSize="0.84375rem"
              color="grey_5"
              fontWeight={"600"}
            >
              {label}
            </FormLabel>
            <Select
              {...field}
              id={name}
              bgColor="white"
              placeholder={placeholder}
              display="inline-block"
              _focusVisible={{
                border: "1px",
                borderColor: "grey_3",
              }}
              _active={{
                border: "1px",
                borderColor: "grey_3",
              }}
              border="1px"
              borderColor={
                errors[name] && touched[name]
                  ? "red" // Change to your error color
                  : "grey_3"
              }
              rounded="5px"
              color="grey_6"
              h="3.23438rem"
              fontSize={"0.75rem"}
            >
              {options.map((item, index) => {
                if (typeof item === "string") {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                } else {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                }
              })}
            </Select>
            {errors[name] && touched[name] && (
              <Box mt="4px">
                <Text fontSize="12px" color="red">
                  Required
                </Text>
              </Box>
            )}
          </>
        )}
      </Field>
    </Box>
  );
};

export default CustomSelect;
