import React from "react";
import { Box, FormLabel, Select } from "@chakra-ui/react";
import { ErrorMessage, Field, FieldProps } from "formik";

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
  options: Option[] | { name: string }[];
  placeholder?: string;
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
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
              fontWeight={"normal"}
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
              {options.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </Select>
            {errors[name] && touched[name] && (
              <ErrorMessage
                name={name}
                component="div"
                className="error-message"
              />
            )}
          </>
        )}
      </Field>
    </Box>
  );
};

export default CustomSelect;
