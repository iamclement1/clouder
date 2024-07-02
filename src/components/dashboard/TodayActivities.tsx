"use client";
import { Box, Skeleton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Typography from "../common/Typograph";
import useGetResearch from "@/hooks/useGetResearch";
import useGetTeaching from "@/hooks/useGetTeaching";
import useFetchLogbook from "@/hooks/useLogbook";

const TodayActivities = () => {
  const { data: research, isLoading: isResearchLoading } = useGetResearch();
  const { data: teaching, isLoading: isTeachingLoading } = useGetTeaching();
  const { data: logbook, isLoading: isLogbookLoading } = useFetchLogbook();
  const log = logbook?.data?.data?.length;
  const teach = teaching?.data?.length;
  const res = research?.data?.length;

  const loading = isResearchLoading || isTeachingLoading || isLogbookLoading;

  const getEntryText = (count: number) => (count > 1 ? "entries" : "entry");
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
        Today’s Activities
      </Typography>

      <Stack spacing={"0.38rem"} mt="1.12rem">
        {loading ? (
          <>
            <Skeleton height="0.15rem" />
            <Skeleton height="0.15rem" />
            <Skeleton height="0.15rem" />
          </>
        ) : (
          <>
            <Text fontSize={"0.75rem"} color="grey_1" noOfLines={1}>
              You’ve made {log ?? "0"} logbook {getEntryText(log ?? 0)}
            </Text>
            <Text fontSize={"0.75rem"} color="grey_1" noOfLines={1}>
              You’ve made {res ?? "0"} {getEntryText(res ?? 0)} into Research
            </Text>
            <Text fontSize={"0.75rem"} color="grey_1" noOfLines={1}>
              You’ve made {teach ?? "0"} {getEntryText(teach ?? 0)} into
              Teaching
            </Text>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default TodayActivities;
