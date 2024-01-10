"use client";
import React, { useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image,
  Link,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { BsChevronDown, BsFillCaretDownFill } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";
import SearchBox from "../dashboard/navigation/SearchBox";
import UserImage from "../dashboard/navigation/UserImage";
import { useRouter } from "next/navigation";
import useProfile from "@/hooks/useProfile";
import { BiLogOut } from "react-icons/bi";
import PageLoader from "./PageLoader";
import useSignOut from "@/hooks/useSignOut";
import {
  MobileProps,
  NavItemProps,
  RouteChangeHandler,
  SidebarProps,
  SidebarWithHeaderProps,
} from "@/utils/types";
import { SupervisorLinkItems } from "@/utils/data";

const SupervisorSidebarContent = ({
  onClose,
  passedActive,
  ...rest
}: SidebarProps) => {
  const { isLoading, handleLogOut } = useSignOut();

  if (isLoading) return <PageLoader />;

  return (
    <Box
      transition="3s ease"
      bg={"grey_9"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full" }}
      maxW={{ base: "full", md: "17.6rem" }}
      pos="fixed"
      minH="full"
      overflowY={"auto"}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link href="/supervisor">
          <Image src="/logo.png" alt="Clouder Logo" />
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Box mt="1.54rem">
        <UserImage />
      </Box>

      <Box mt="1.25rem">
        {SupervisorLinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            subNav={link.children ?? null}
            navName={link.name}
            href={link.href ?? ""}
            passedActive={passedActive}
          />
        ))}

        {/* Log out button */}

        <Flex
          pl="1rem"
          gap="0.9rem"
          align="center"
          mt="2rem"
          cursor={"pointer"}
        >
          <Flex
            flexShrink={0}
            align="center"
            // p="4"
            // px="4"
            justify={"center"}
            borderRadius="full"
            cursor="pointer"
            color="grey_1"
            boxSize="2.5rem"
            bgColor={"white"}
          >
            <Icon fontSize="16px" as={BiLogOut} />
          </Flex>
          <Text
            fontSize="0.9375rem"
            color="red_2"
            flexShrink={0}
            // w="100%"
            onClick={handleLogOut}
          >
            {" "}
            Log out{" "}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

const NavItem = ({
  icon,
  passedActive,
  subNav,
  navName,
  href,
  ...rest
}: NavItemProps) => {
  const router = useRouter();
  const [showSubNav, setShowSubNav] = useState<boolean>(false);
  const handleRouteChange: RouteChangeHandler = (newRoute) => {
    router.push(newRoute);
  };

  const handleShowSubNav = () => {
    setShowSubNav(!showSubNav);
  };

  return (
    <Box>
      <Box
        onClick={() => {
          if (subNav) {
            handleShowSubNav();
          } else {
            handleRouteChange(href);
          }
        }}
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          px="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          color="grey_1"
          bgColor={passedActive === href || showSubNav ? "white" : "grey_9"}
          _hover={{
            bg: "white",
          }}
          gap="0.9rem"
          {...rest}
        >
          {icon && (
            <Flex
              align="center"
              justify="center"
              minW="2rem"
              minH="2rem"
              rounded="full"
              bgColor={
                passedActive === href || showSubNav ? "primary" : "white"
              }
              _groupHover={{
                bgColor: "primary",
              }}
            >
              <Icon
                fontSize="16"
                _groupHover={{
                  color: "white",
                }}
                as={icon}
                color={
                  passedActive === href || showSubNav ? "white" : "primary"
                }
              />
            </Flex>
          )}
          <Text
            fontSize="0.9375rem"
            color={passedActive === href || showSubNav ? "black" : "grey_1"}
            fontWeight={passedActive === href || showSubNav ? "700" : "normal"}
          >
            {navName}
          </Text>

          {subNav && <Icon as={BsChevronDown} />}
        </Flex>
      </Box>
      {subNav && (
        <>
          {showSubNav && (
            <Box>
              {subNav.map((item) => (
                <Box
                  pl="4rem"
                  _hover={{
                    bgColor: "white",
                    cursor: "pointer",
                  }}
                  key={item.name}
                  fontSize="0.9375rem"
                  py="0.47rem"
                  mb="0.47rem"
                >
                  {" "}
                  {item.name}{" "}
                </Box>
              ))}
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { data } = useProfile();

  const fullName = data?.data?.fullName;
  const [showLogOut, setShowLogOut] = useState<boolean>(false);
  const toggleShowLogOut = () => {
    setShowLogOut(!showLogOut);
  };
  const { isLoading, handleLogOut } = useSignOut();

  if (isLoading) return <PageLoader />;
  return (
    <Flex
      ml={{ base: 0, md: "17.6rem" }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      justifyContent={{ base: "space-between" }}
      {...rest}
      gap="1rem"
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Flex justify={"space-between"} w="100%" gap="1rem">
        {/* <Image src="/logo.png" alt="Clouder Logo" width={150} height={50} /> */}

        <SearchBox display={{ base: "none", md: "block" }} />

        <Flex align={"center"} gap={"20px"}>
          <Flex
            gap="10px"
            align={"center"}
            fontSize={"0.65625rem"}
            display={{ base: "none", md: "block" }}
          >
            English <Icon as={BsFillCaretDownFill} cursor={"pointer"} />{" "}
          </Flex>

          <Link href="/supervisor/notification">
            <Icon as={BiBell} />
          </Link>

          {/* <Link href=""> */}
          <Box pos="relative">
            <Flex
              align="center"
              gap="0.3rem"
              onClick={toggleShowLogOut}
              cursor="pointer"
            >
              <Image src={"/user.svg"} alt={"user image"} boxSize="1.3rem" />
              <Text fontSize="0.65625rem" fontWeight={"500"}>
                {fullName}
              </Text>
            </Flex>
            {showLogOut && (
              <Flex
                border="1px"
                borderColor={"red"}
                py="0.5rem"
                px="1.38rem"
                align="center"
                justify="center"
                gap=".5rem"
                fontSize=".7rem"
                color="red"
                pos="absolute"
                top="1.8rem"
                bgColor="white"
                w="100%"
                cursor="pointer"
                onClick={handleLogOut}
              >
                <Icon as={RiLogoutCircleLine} />
                <Text>Logout</Text>
              </Flex>
            )}
          </Box>
          {/* </Link> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

const SupervisorSidebarWithHeader = ({
  passedActive = "/supervisor",
  children,
}: SidebarWithHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SupervisorSidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        passedActive={passedActive}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SupervisorSidebarContent
            onClose={onClose}
            passedActive={passedActive}
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: "17.6rem" }} p="4">
        {/* Content */}
        {children}
      </Box>
    </Box>
  );
};

export default SupervisorSidebarWithHeader;
