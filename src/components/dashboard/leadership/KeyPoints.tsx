import CustomButton from "@/components/common/CustomButton";
import { useLeadership } from "@/context/LeadershipProvider";
import api from "@/utils/axiosInstance";
import { LeadershipPayloadType } from "@/utils/types";

import { Box, Text, Flex } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import React, { useState, useRef } from "react";

import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { toast } from "react-toastify";

const KeyPoints = () => {
  const queryClient = useQueryClient();

  const [err, setErr] = useState<boolean>(false);
  const { leadershipData, handleLeadershipData, handlePreview } =
    useLeadership();

  const text = useRef("");
  text.current = leadershipData?.key_points;
  const handleChange = (event: ContentEditableEvent) => {
    text.current = event.target.value;
    if (text.current !== "") {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handleBlur = () => {
    if (text.current !== "" || text.current.length >= 6) {
      handleLeadershipData({
        ...leadershipData,
        key_points: text.current,
      });
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: (leaderships: LeadershipPayloadType) => {
      return api.post("/leaderships", leaderships);
    },
    onSuccess: ({ data }) => {
      if (data) {
        toast.success("Leadership Form Submitted Successfully", {
          theme: "dark",
        });
      }
      queryClient.invalidateQueries({ queryKey: ["leadership"] });
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg, {
        theme: "dark",
      });
    },
  });

  const payload: LeadershipPayloadType = {
    title: leadershipData?.leadershipTittle,
    startYear: leadershipData?.startYear,
    endYear: leadershipData?.endYear,
    challenges: leadershipData?.challenges,
    keyPositives: leadershipData?.key_points,
    doDifferently: leadershipData?.differentAction,
  };

  const handlePayload = () => {
    mutate(payload);
  };

  const handleSubmit = () => {
    if (text.current !== "") {
      setErr(false);
      handlePayload();
      console.log("leadershipData", leadershipData);
    } else {
      setErr(true);
    }
  };

  const onPreview = (values: string) => {
    if (text.current !== "") {
      setErr(false);
      handleLeadershipData({
        ...leadershipData,
        differentAction: values,
      });
      handlePreview(true);
    } else {
      setErr(true);
    }
  };

  return (
    <Box>
      <Box>
        <Flex align="center" justify="space-between" mb="1.7rem">
          <Text fontSize="1.4rem" color="grey_1" fontWeight="500" maxW="31rem">
            What are the key positives gotten from the course
          </Text>
        </Flex>
        <ContentEditable
          className={`texteditor ${err ? "errMode" : ""}`}
          html={text.current}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {err && (
          <Text color="red" fontSize="12px" mt="2" px="2px" fontWeight="500">
            Required
          </Text>
        )}
      </Box>

      {/* <Flex maxW="35rem" mx="auto" gap="1.12rem" mt="3rem">
                <CustomButton
                    w="100%"
                    bgColor={"transparent"}
                    border="1px"
                    borderColor="grey_1"
                    color="grey_1"
                    handleClick={() => handleFillForm(false)}
                >
                    Cancel
                </CustomButton>
                <CustomButton
                    w="100%"
                    handleClick={() => handleSubmit(text.current)}
                >
                    Next
                </CustomButton>
            </Flex> */}

      <Flex maxW="35rem" mx="auto" gap="1.12rem" mt="3rem">
        <CustomButton w="100%" isLoading={isLoading} handleClick={handleSubmit}>
          Save
        </CustomButton>
        <CustomButton
          w="100%"
          bgColor={"transparent"}
          border="1px"
          borderColor="primary"
          color="primary"
          handleClick={() => onPreview(text.current)}
        >
          Preview
        </CustomButton>
      </Flex>
    </Box>
  );
};

export default KeyPoints;
