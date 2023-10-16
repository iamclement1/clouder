"use client";
import React, { useState } from "react";
import {
  IconButton,
  // Avatar,
  Box,
  CloseButton,
  Flex,
  // HStack,
  // VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  // Menu,
  // MenuButton,
  // MenuDivider,
  // MenuItem,
  // MenuList,
  Image,
  Link,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import AuthGuard from "../auth/AuthGuard";
import { BsChevronDown, BsFillCaretDownFill } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";

import SearchBox from "../dashboard/navigation/SearchBox";
import UserImage from "../dashboard/navigation/UserImage";
import { useRouter } from "next/navigation";
import Share from "../modals/Share";

interface SidebarWithHeaderProps {
  passedActive: string;
  children?: React.ReactNode;
}

interface LinkItemProps {
  id?: number;
  name: string;
  icon: IconType;
  href?: string;
  children?: LinkItemProps[];
}

interface NavItemProps extends FlexProps {
  icon: React.ElementType;
  children?: React.ReactNode;
  passedActive: string;
  subNav: LinkItemProps[] | null;
  navName: string;
  href: string;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  passedActive: string;
}

type RouteChangeHandler = (newRoute: string) => void;

const LinkItems: Array<LinkItemProps> = [
  { id: 1, name: "Dashboard", href: "/dashboard", icon: FiHome },
  {
    id: 2,
    name: "Qualifications",
    href: "/dashboard/qualification",
    icon: FiTrendingUp,
  },
  { id: 3, name: "Courses", href: "/dashboard/courses", icon: FiCompass },
  {
    id: 4,
    name: "Quality Improvement Activity",
    href: "/dashboard/quality_improvement",
    icon: FiStar,
    children: [
      {
        id: 1,
        name: "Morbidity/Mortality",
        href: "#",
        icon: FiStar,
      },
      {
        id: 2,
        name: "Clinical audit",
        href: "#",
        icon: FiStar,
      },
      {
        id: 3,
        name: "Case review",
        href: "#",
        icon: FiStar,
      },
    ],
  },
  {
    id: 4,
    name: "Leadership",
    href: "/dashboard/leadership",
    icon: FiSettings,
  },
  { id: 5, name: "Research", href: "/dashboard/research", icon: FiSettings },
  {
    id: 6,
    name: "Logbook",
    href: "/dashboard/logbook",
    icon: FiSettings,
    children: [
      {
        id: 1,
        name: "Medical LogBook",
        href: "#",
        icon: FiSettings,
      },
      {
        id: 1,
        name: "Surgical Logbook",
        href: "#",
        icon: FiSettings,
      },
    ],
  },
  { id: 7, name: "Teaching", href: "/dashboard/teaching", icon: FiSettings },
  { id: 8, name: "Log out", href: "/dashboard/logout", icon: FiSettings },
];

const SidebarContent = ({ onClose, passedActive, ...rest }: SidebarProps) => {
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
        <Link href="/dashboard">
          <Image src="/logo.png" alt="Clouder Logo" />
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Box mt="1.54rem">
        <UserImage />
      </Box>

      <Box mt="1.25rem">
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            subNav={link.children || null}
            navName={link.name}
            href={link.href || ""}
            passedActive={passedActive}
          />
        ))}
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
    <AuthGuard>
      <Box
        onClick={() => {
          if (subNav) {
            handleShowSubNav();
          } else {
            handleRouteChange("/dashboard");
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
    </AuthGuard>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: "17.6rem" }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
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
          <Share />
          <Flex
            gap="10px"
            align={"center"}
            fontSize={"0.65625rem"}
            display={{ base: "none", md: "block" }}
          >
            English <Icon as={BsFillCaretDownFill} cursor={"pointer"} />{" "}
          </Flex>

          <Link href="/dashboard/notification">
            <Icon as={BiBell} />
          </Link>

          <Icon as={FaRegEnvelope} cursor={"pointer"} />
          <Link href="/dashboard/profile">
            <Flex align="center" gap="0.3rem">
              <Image src={"/user.svg"} alt={"user image"} boxSize="1.3rem" />
              <Text fontSize="0.65625rem" fontWeight={"500"}>
                John Doe
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

const SidebarWithHeader = ({
  passedActive = "/dashboard",
  children,
}: SidebarWithHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
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
          <SidebarContent onClose={onClose} passedActive={passedActive} />
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

export default SidebarWithHeader;
