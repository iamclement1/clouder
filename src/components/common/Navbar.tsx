"use client";
import React from "react";

import {
  Box,
  Flex,
  HStack,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Logo from "@/assests/images/logo.png";
import ScreenSize from "@/layouts/ScreenSize";
import CustomButton from "./CustomButton";
import Link from "next/link";

interface Props {
  text?: string;
  href?: string;
}

const Links = [
  {
    id: 1,
    href: "/about",
    text: "About us",
  },
  {
    id: 2,
    href: "/contact",
    text: "Contact Us",
  },
  {
    id: 3,
    href: "/pricing",
    text: "Pricing",
  },
];

const NavLink = (props: Props) => {
  const { text, href } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      _hover={{ color: "primary" }}
      href={href}
      fontSize={"0.84375rem"}
      color={"grey_1"}
    >
      {text}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "white")}
        color={"black"}
        py={2}
        shadow={"sm"}
        id="top"
      >
        <ScreenSize>
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"14px"}
          >
            <HStack spacing={8} alignItems={"center"} cursor={"pointer"}>
              <Link href={"/"}>
                <Image src={Logo} alt="logo" width="200" />
              </Link>
            </HStack>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              shouldWrapChildren={false}
              flexShrink={0}
            >
              {Links.map((link) => (
                <NavLink key={link.id} text={link.text} href={link.href} />
              ))}
            </HStack>

            <Link href="/auth/login">
              <CustomButton
                handleClick={onOpen}
                maxW="fit-content"
                display={["none", null, "block"]}
                h="2.5rem"
              >
                Register Now
              </CustomButton>
            </Link>

            {/* humbuger  */}
            <Icon
              w="fit-content"
              as={isOpen ? CloseIcon : HamburgerIcon}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>

          {isOpen ? (
            <Box
              pb={4}
              display={{ md: "none" }}
              pos="absolute"
              right={0}
              left={0}
              top={"5.4rem"}
              bg={"white"}
            >
              <Stack as={"nav"} spacing={4}>
                {Links.map((link, i) => (
                  <NavLink key={i} text={link.text} href={link.href} />
                ))}
                <CustomButton display={["block", null, "none"]}>
                  Register Now
                </CustomButton>
              </Stack>
            </Box>
          ) : null}
        </ScreenSize>
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
