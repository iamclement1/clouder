import { Box, Skeleton, Text } from "@chakra-ui/react";
import React from "react";
import Typography from "../common/Typograph";
import useFetchLogbook from "@/hooks/useLogbook";

const LogBookEntries = () => {
  const { data: logbook, isLoading: isLogbookLoading } = useFetchLogbook();
  const log = logbook?.data?.data?.length;

  return (
    <Box
      maxW="22rem"
      // maxH="10rem"
      overflowY={"hidden"}
      py="1.34rem"
      px="1.36rem"
      rounded={"0.54844rem"}
      style={{ border: "0.8px solid #DEEBFD" }}
      bgColor={"white"}
      boxShadow={
        "-7.02019px 10.53028px 15.79542px 0px rgba(218, 222, 232, 0.50)"
      }
    >
      <Typography fontSize={"0.9375rem"} fontWeight={"600"}>
        {" "}
        Logbook Entries
      </Typography>
      <Box>
        {isLogbookLoading ? (
          <>
            <Skeleton height="0.15rem" />
            <Skeleton height="0.15rem" />
            <Skeleton height="0.15rem" />
          </>
        ) : (
          <Text
            color="green_3"
            fontSize={"5.19494rem"}
            fontWeight={600}
            textAlign={"center"}
          >
            {log ?? "0"}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default LogBookEntries;
