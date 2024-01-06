import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="50px" />
      <Skeleton height="50px" />
      <Skeleton height="50px" />
    </Stack>
  );
};

export default LoadingSkeleton;
