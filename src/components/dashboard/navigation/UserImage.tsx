import Typography from "@/components/common/Typograph";
import useProfile from "@/hooks/useProfile";
import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";

const UserImage = () => {
  const { data } = useProfile();

  const fullName = data?.data?.fullName;
  return (
    <Box textAlign="center">
      <Image
        src="/user.svg"
        alt=""
        boxSize="3.167rem"
        objectFit={"cover"}
        display="block"
        mx="auto"
      />
      <Typography mt="0.42rem" fontSize="0.92419rem">
        {" "}
        {fullName}{" "}
      </Typography>
      <Link
        href="/dashboard/profile"
        color="primary"
        fontWeight="400"
        fontSize="0.7625rem"
      >
        {" "}
        Update Account
      </Link>
    </Box>
  );
};

export default UserImage;
