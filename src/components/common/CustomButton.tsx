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
  bg?: string | string[];
  h?: string | string[];
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
  bg = "primary",
  handleClick,
  ...rest
}) => {
  return (
    <Button
      bg={bg}
      width={width || "100%"}
      bgColor={"primary"}
      isDisabled={isLoading}
      {...rest}
      px={px ?? ["0.75rem", "1.5rem"]}
      py={py ?? "0.7rem"}
      rounded="0.375rem"
      color={color ?? "white"}
      _hover={{}}
      _active={{ opacity: "0.5" }}
      fontSize={fontSize ?? ["0.82rem", null, "0.9375rem"]}
      fontWeight={fontWeight ?? "500"}
      onClick={handleClick}
      // h={h || ["2.5rem", null, "3.5rem"]}
    >
      {isLoading ? <Spinner width="sm" /> : customText ?? children}
    </Button>
  );
};

export default CustomButton;
