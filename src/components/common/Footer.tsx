"use client";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Logo from "@/assests/images/logo.png";
import Image from "next/image";

// import {
//     ANALYTICS_LINK,
//     DISCORD_INVITE_LINK,
//     GITHUB_LINK,
//     TWITTER_LINK,
//     FIGMA_LINK,
//     CONTRIBUTORS_LINK,
//     TWITTER_LINK_ACHIM,
//     BUY_ME_A_COFFEE_LINK,
// } from "../../config/constant";

// const SOCIAL_LINKS = [
//     {
//         label: "Discord Community",
//         href: DISCORD_INVITE_LINK,
//     },
//     {
//         label: "GitHub Repository",
//         href: GITHUB_LINK,
//     },
//     {
//         label: "Twitter Account",
//         href: TWITTER_LINK,
//     },
//     {
//         label: "Figma Design Resources",
//         href: FIGMA_LINK,
//     },
// ];

const Footer = () => {
  return (
    <Box mt="5.4rem">
      <Flex>
        <Box>
          <Image src={Logo} alt="logo" />
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default Footer;
