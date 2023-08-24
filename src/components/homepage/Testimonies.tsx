"use client";
import ScreenSize from "@/layouts/ScreenSize";
import { Box } from "@chakra-ui/react";
import React from "react";
import Typography from "../common/Typograph";
import TestimoniesSlider from "./TestimoniesSlider";

const Testimonies = () => {
  return (
    <Box py="5rem" bgColor={"white"}>
      <ScreenSize>
        <Box>
          <Box>
            <Typography variant="heading2" color="black">
              Testimonials
            </Typography>
            <Typography
              variant="body"
              color="grey_2"
              mt="0.66rem"
              fontSize={["1rem", "1.13719rem"]}
            >
              What our clients are saying......
            </Typography>
          </Box>

          <Box mt="3.75rem">
            <TestimoniesSlider />
          </Box>
        </Box>
      </ScreenSize>
    </Box>
  );
};

export default Testimonies;
