import Typography from "@/components/common/Typograph";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";

const AuthLayout = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <Flex {...props} minH="100vh" justify={"center"}>
      <Flex
        display={["none", "flex"]}
        w="100%"
        maxW="33.75625rem"
        pt="2.83rem"
        px="3.14rem"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0.6)), url('/auth.svg')",
          backgroundRepeat: "no-repeat",
        }}
        minH="100%"
        backgroundSize="cover"
        bgRepeat={"no-repeat"}
        backgroundPosition="center"
        flexDir="column"
        justify="space-between"
        pb="5.2rem"
      >
        <Link href="/">
          <Image src="/logo.png" />
        </Link>
        <Box maxW="22.5rem">
          <Typography
            variant="heading2"
            fontSize={["xl", "3xl", "2rem"]}
            color={"white"}
          >
            Welcome To Clouder
          </Typography>
          <Typography fontSize="0.84375rem" color={"white"} mt="1.12rem">
            A platform that allows you to create and manage your medical
            e-portfolio with ease
          </Typography>
        </Box>
      </Flex>

      <Flex
        // background={[
        //     "linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0.6)), url('/auth.svg')",
        //     "white",
        // ]}
        // backgroundSize="cover"
        // bgRepeat={"no-repeat"}
        // backgroundPosition="center"
        bg="white"
        justify="center"
        align="center"
        w="100%"
      >
        <Box maxW="28.4rem" w="100%">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
