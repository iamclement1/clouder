import { Text, TextProps } from "@chakra-ui/react";
import React from "react";
interface Props {
  children: React.ReactNode;
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "bodyBold"
    | "bodyLight"
    | "body";
  fontSize?: string[] | string;
  fontWeight?: string | number;
  mt?: string | string[];
  color?: string | string[];
  noOfLines?: number | number[];
}

const Typography = ({
  variant = "body",
  fontSize,
  fontWeight,
  children,
  mt,
  color,
  noOfLines,
  ...rest
}: Props) => {
  const getVariantStyle = () => {
    switch (variant) {
      case "heading1":
        return {
          as: "h1",
          fontSize: fontSize ?? ["2xl", "3xl", "4xl", "2.8125rem"],
          fontWeight: fontWeight ?? "600",
        };
      case "heading2":
        return {
          as: "h2",
          fontSize: fontSize ?? ["xl", "3xl", "3xlx", "3xlx"],
          fontWeight: fontWeight ?? "bold",
        };
      case "heading3":
        return {
          as: "h3",
          fontSize: fontSize ?? ["lg", "xl", "2xl", "1.6875rem"],
          fontWeight: fontWeight ?? "bold",
        };
      case "heading4":
        return {
          as: "h4",
          fontSize: fontSize ?? ["lg", "lg", "xl", "2xl"],
          fontWeight: fontWeight ?? "500",
        };

      case "heading5":
        return {
          as: "h5",
          fontSize: fontSize ?? ["lg"],
          fontWeight: fontWeight ?? "bold",
        };
      case "body":
        return {
          fontSize: fontSize ?? ["0.9rem", null, "1.125rem"],
          fontWeight: fontWeight ?? "regular",
        };
      case "bodyBold":
        return {
          fontSize: fontSize ?? ["md", "lg", "md", "lg"],
          fontWeight: fontWeight ?? "bold",
        };
      case "bodyLight":
        return {
          fontSize: fontSize ?? ["md", "lg", "md", "lg"],
          fontWeight: fontWeight ?? "light",
        };
      default:
        return {
          fontSize: fontSize ?? ["md"],
          fontWeight: fontWeight ?? "regular",
        };
    }
  };

  const variantStyle = getVariantStyle() as TextProps;

  return (
    <Text
      {...rest}
      {...variantStyle}
      mt={mt}
      color={color}
      noOfLines={noOfLines}
    >
      {children}
    </Text>
  );
};

export default Typography;
