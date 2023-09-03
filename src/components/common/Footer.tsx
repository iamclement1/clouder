"use client";
import React from "react";
import {
  Box,
  Divider,
  Flex,
  SimpleGrid,
  Link,
  Stack,
  Icon,
} from "@chakra-ui/react";
import Logo from "@/assests/images/logo.png";
import Image from "next/image";
import ScreenSize from "@/layouts/ScreenSize";
import Typography from "./Typograph";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import {
  TWITTER_LINK,
  LINKDLE_LINK,
  INSTRAGRAM_LINK,
  FACEBOOK_LINK,
  YOUTUBE_LINK,
} from "../../config/constant";
import NewsLetter from "../homepage/NewsLetter";

const Footer = () => {
  return (
    <Box mt="5.4rem" py="5.4rem" bgColor={"primary_2"}>
      <ScreenSize>
        <SimpleGrid columns={[1, 1, 2]} gap={"2rem"}>
          <Box maxW={"30.75rem"} color={"white_1"}>
            <Image src={Logo} alt="logo" />
            <Box mt="1.54rem">
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography mt="2.49rem">
                Get exclusive news about upcoming events by subscribing to
                receive our monthly newsletter.
              </Typography>
              <Box mt="1.87rem">
                <NewsLetter />
              </Box>
            </Box>
          </Box>

          {/* Colun two  */}
          <Box>
            <SimpleGrid columns={[1, 2, 2, 3]} spacing={"2.81rem"}>
              <Box color={"white_1"}>
                <Typography fontWeight={600}>Company</Typography>
                <Stack spacing={"0.55rem"} mt="1.11rem" fontSize={"0.9375rem"}>
                  {FooterData?.company.map(
                    ({ text, href }: { text: string; href: string }, i) => {
                      return (
                        <Link key={i} href={href}>
                          {" "}
                          {text}{" "}
                        </Link>
                      );
                    },
                  )}
                </Stack>
              </Box>

              <Box color={"white_1"}>
                <Typography fontWeight={600}>Terms and Privacy</Typography>
                <Stack spacing={"0.55rem"} mt="1.11rem" fontSize={"0.9375rem"}>
                  {FooterData?.terms.map(
                    ({ text, href }: { text: string; href: string }, i) => {
                      return (
                        <Link key={i} href={href}>
                          {" "}
                          {text}{" "}
                        </Link>
                      );
                    },
                  )}
                </Stack>
              </Box>

              <Box color={"white_1"}>
                <Typography fontWeight={600}>Contact us</Typography>
                <Stack spacing={"0.55rem"} mt="1.11rem" fontSize={"0.9375rem"}>
                  {FooterData?.contact.map(
                    ({ text, href }: { text: string; href: string }, i) => {
                      return (
                        <Link key={i} href={href}>
                          {" "}
                          {text}{" "}
                        </Link>
                      );
                    },
                  )}
                </Stack>
                <Flex align={"center"} gap={"0.75rem"} mt="1.5rem">
                  {FooterData?.socials.map(
                    (
                      {
                        icon,
                        href,
                        label,
                      }: {
                        icon: React.ReactElement;
                        href: string;
                        label: string;
                      },
                      i,
                    ) => {
                      return (
                        <Link key={i} href={href} target="_blank">
                          <Icon
                            aria-label={label}
                            boxSize={"1.71875rem"}
                            cursor={"pointer"}
                          >
                            {icon}
                          </Icon>
                        </Link>
                      );
                    },
                  )}
                </Flex>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        <Box>
          <Divider mt="5.34rem" />
        </Box>
      </ScreenSize>
    </Box>
  );
};

export default Footer;

const FooterData = {
  company: [
    { text: "About us", href: "/about" },
    { text: "Contact us", href: "/contact" },
  ],
  terms: [
    { text: "Terms of use", href: "" },
    { text: "Privacy policy", href: "" },
    { text: "Bye-law", href: "" },
    { text: "Disclaimer", href: "" },
  ],
  contact: [
    {
      text: "support@Clouder.com",
      href: "",
    },
  ],
  socials: [
    {
      icon: <FaLinkedin />,
      href: LINKDLE_LINK,
      label: "Linkdle Account",
    },

    {
      icon: <FaInstagram />,
      href: INSTRAGRAM_LINK,
      label: "Instagram Account",
    },
    {
      icon: <FaTwitter />,
      href: TWITTER_LINK,
      label: "Twitter Account",
    },
    {
      icon: <FaFacebook />,
      href: FACEBOOK_LINK,
      label: "Twitter Account",
    },
    {
      icon: <FaYoutube />,
      href: YOUTUBE_LINK,
      label: "Twitter Account",
    },
  ],
};
