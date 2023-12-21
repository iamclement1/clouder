import Typography from "@/components/common/Typograph";
import ScreenSize from "@/layouts/ScreenSize";
import { Box, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
};
const page = () => {
  return (
    <div>
      {" "}
      <Box>
        <ScreenSize>
          <Box py="5.27rem">
            <Typography variant="heading1">
              <Text textAlign={"center"}>
                Contact{" "}
                <Text as="span" color="primary">
                  {" "}
                  Us
                </Text>{" "}
              </Text>
            </Typography>
            <Typography color={"grey_1"} mt="1.87rem" mx={"27rem"}>
              If you have any question or issues to use our product. Fill the
              form below. We’ll be glad to help you
            </Typography>
          </Box>
        </ScreenSize>
      </Box>
    </div>
  );
};

export default page;
