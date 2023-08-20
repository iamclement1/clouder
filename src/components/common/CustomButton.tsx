import React from "react";
import { Button, ButtonProps, Spinner } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  width?: string;
  color?: string;
  isLoading?: boolean;
  customText?: string;
  fontSize?: string[];
  fontWeight?: string | number;
  px?: string[] | number;
  py?: string[] | number;
  handleClick?: NonNullable<unknown>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  width = "100%",
  isLoading,
  customText,
  color,
  fontSize,
  fontWeight,
  px,
  py,
  ...rest
}) => {
  return (
    <Button
      width={width || "100%"}
      bgColor={"primary"}
      isDisabled={isLoading}
      {...rest}
      px={px || "1.5rem"}
      py={py || "0.7rem"}
      rounded="0.375rem"
      color={color || "white"}
      _hover={{}}
      _active={{ opacity: "0.5" }}
      fontSize={fontSize || "0.9375rem"}
      fontWeight={fontWeight || "500"}
    >
      {isLoading ? <Spinner width="sm" /> : customText || children}
    </Button>
  );
};

export default CustomButton;
