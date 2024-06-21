import { NavItemProps } from "@/utils/types";
import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import clsx from "clsx";

const NavItem = ({
  icon,
  passedActive,
  subNav,
  navName,
  href,
  // navType,
  ...rest
}: NavItemProps) => {
  // const router = useRouter();
  // const { handleLogbookMode } = useLogbook();
  const [showSubNav, setShowSubNav] = useState<boolean>(false);
  // const handleRouteChange: RouteChangeHandler = (newRoute) => {
  //     router.push(newRoute);
  // };
  const pathname = usePathname();
  const handleShowSubNav = () => {
    setShowSubNav(!showSubNav);
  };

  return (
    <Box>
      {!subNav ? (
        <Link
          href={href}
          // onClick={() => {
          //     if (subNav) {
          //         handleShowSubNav();
          //     } else {
          //         handleRouteChange(href);
          //     }
          // }}
          display="block"
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
            bgColor={clsx(pathname === href || showSubNav ? "white" : "grey_9")}
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
              fontWeight={
                passedActive === href || showSubNav ? "700" : "normal"
              }
            >
              {navName}
            </Text>

            {subNav && <Icon as={BsChevronDown} />}
          </Flex>
        </Link>
      ) : (
        <Box
          onClick={() => {
            if (subNav) {
              handleShowSubNav();
            }
            // else {
            //     handleRouteChange(href);
            // }
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
              fontWeight={
                passedActive === href || showSubNav ? "700" : "normal"
              }
            >
              {navName}
            </Text>

            {subNav && <Icon as={BsChevronDown} />}
          </Flex>
        </Box>
      )}

      {subNav && (
        <>
          {showSubNav && (
            <Box>
              {subNav.map((item) => (
                <Link
                  display={"block"}
                  href={item?.href}
                  pl="4rem"
                  _hover={{
                    bgColor: "white",
                    cursor: "pointer",
                  }}
                  key={item?.name}
                  fontSize="0.9375rem"
                  py="0.47rem"
                  mb="0.47rem"
                  // onClick={() => {
                  //     if (
                  //         navType === "Logbook" &&
                  //         item.href
                  //     ) {
                  //         // handleLogbookMode(item?.name);
                  //         handleRouteChange(item.href);
                  //     }
                  // }}
                >
                  {" "}
                  {item?.name}{" "}
                </Link>
              ))}
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default NavItem;
