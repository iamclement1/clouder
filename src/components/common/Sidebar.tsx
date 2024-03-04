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
  BoxProps,
  FlexProps,
  Image,
  Link,
  DrawerBody,
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
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import SearchBox from "../dashboard/navigation/SearchBox";
import UserImage from "../dashboard/navigation/UserImage";
import Share from "../modals/Share";
import useProfile from "@/hooks/useProfile";
import { BiLogOut, BiBell } from "react-icons/bi";
import PageLoader from "./PageLoader";
import useSignOut from "@/hooks/useSignOut";
import NavItem from "./NavItem";

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
  btnFunc?: () => void;
}

// interface NavItemProps extends FlexProps {
//     icon: React.ElementType;
//     children?: React.ReactNode;
//     passedActive: string;
//     subNav: LinkItemProps[] | null;
//     navName: string;
//     href: string;
//     navType: string;
// }

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  passedActive: string;
}

// type RouteChangeHandler = (newRoute: string) => void;

const LinkItems: Array<LinkItemProps> = [
  { id: 1, name: "Dashboard", href: "/dashboard", icon: FiHome },
  {
    id: 2,
    name: "Qualifications",
    href: "/dashboard/qualifications",
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
        href: "/dashboard/quality_improvement/mobility",
        icon: FiStar,
      },
      {
        id: 2,
        name: "Clinical audit",
        href: "/dashboard/quality_improvement/clinical_audit",
        icon: FiStar,
      },
      {
        id: 3,
        name: "Case review",
        href: "/dashboard/quality_improvement/case_review",
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
  {
    id: 5,
    name: "Research",
    href: "/dashboard/research",
    icon: FiSettings,
  },
  {
    id: 6,
    name: "Logbook",
    href: "/dashboard/logbook",
    icon: FiSettings,
    children: [
      {
        id: 1,
        name: "Medical LogBook",
        href: "/dashboard/logbook/medical_logbook",
        icon: FiSettings,
        btnFunc: () => {
          console.log("Medical LogBook");
        },
      },
      {
        id: 2,
        name: "Surgical Logbook",
        href: "/dashboard/logbook/surgical_logbook",
        icon: FiSettings,
        btnFunc: () => {
          console.log("Surgical Logbook");
        },
      },
    ],
  },
  {
    id: 7,
    name: "Teaching",
    href: "/dashboard/teaching",
    icon: FiSettings,
  },
  // { id: 8, name: "Log out", href: "/dashboard/logout", icon: FiSettings },
];
const SidebarContent = ({ onClose, passedActive, ...rest }: SidebarProps) => {
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
      h="100vh"
      overflowY={"auto"}
      py="3rem"
      {...rest}
    >
      <Flex
        // h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
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
            // navType={link.name}
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
          <DrawerBody>
            <SidebarContent onClose={onClose} passedActive={passedActive} />
          </DrawerBody>
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
