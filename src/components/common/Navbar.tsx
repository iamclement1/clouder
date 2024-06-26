"use client";
import React from "react";

import {
  Box,
  Flex,
  HStack,
  useDisclosure,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Logo from "@/assests/images/logo.png";
import ScreenSize from "@/layouts/ScreenSize";
import CustomButton from "./CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Links } from "@/utils/data";

interface Props {
  text?: string;
  href?: string;
}

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
      bgColor="white"
    >
      {text}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useRouter();
  return (
    <Box pos="relative" zIndex="1000">
      <Box
        bg={"white"}
        color={"black"}
        py={2}
        shadow={"sm"}
        id="top"
        zIndex={"1000"}
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
              bgColor="white"
            >
              {Links.map((link) => (
                <NavLink key={link.id} text={link.text} href={link.href} />
              ))}
            </HStack>

            <CustomButton
              handleClick={() => navigate.push("/auth/login")}
              maxW="fit-content"
              display={["none", null, "block"]}
              h="2.5rem"
            >
              Login
            </CustomButton>

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
              px="10px"
              pb={4}
              display={{ md: "none" }}
              pos="absolute"
              right={0}
              left={0}
              top={"5.4rem"}
              bg={"white"}
            >
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link.id} text={link.text} href={link.href} />
                ))}
                <CustomButton
                  display={["block", null, "none"]}
                  handleClick={() => navigate.push("/auth/login")}
                  mx="16px"
                >
                  Register Now
                </CustomButton>
              </Stack>
            </Box>
          ) : null}
        </ScreenSize>
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </Box>
  );
}
