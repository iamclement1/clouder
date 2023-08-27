"use client";
import Typography from "@/components/common/Typograph";
import Testimonies from "@/components/homepage/Testimonies";
import ScreenSize from "@/layouts/ScreenSize";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <Box>
      <ScreenSize>
        <Box py="5.27rem">
          <Typography variant="heading1">
            <Text textAlign={"center"}>
              About{" "}
              <Text as="span" color="primary">
                {" "}
                Us
              </Text>{" "}
            </Text>
          </Typography>
          <Typography color={"grey_1"} mt="1.87rem" mx={"3rem"}>
            Clouder is Nigeria’s first continuing medical education e-portfolio
            platform for students and professionals in healthcare. We have a
            commitment to ensure our users get a pleasurable experience curating
            their own academic and professional progress, reflecting on the
            lessons learned, granting and obtaining feedback from colleagues and
            teachers.
          </Typography>
          <Typography color={"grey_1"} mt="1.87rem" mx={"3rem"}>
            Our platform offers a user-friendly interface that allows you to
            create and manage your e-portfolio with ease. With just a few
            clicks, you can upload documents, images, videos, and other evidence
            of your clinical skills and achievements. This means you can easily
            demonstrate your progress and competence to future employers,
            mentors, and colleagues.
          </Typography>
          <Typography color={"grey_1"} mt="1.87rem" mx={"3rem"}>
            Clouder was created out of the maxim ‘create something you would
            have used if you had access to it’. The creators understand how an
            e-portfolio can be the best way to develop, one entry at a time,
            into a professional that is deeply grounded and engaged in
            continuing development.
          </Typography>
          <Typography color={"grey_1"} mt="1.87rem" mx={"3rem"}>
            We are an ethical platform that offers no adverts and do not share
            any information that has been entrusted with us with a third party.
          </Typography>
        </Box>
      </ScreenSize>
      <Box>
        <Testimonies />
      </Box>
    </Box>
  );
};

export default page;
