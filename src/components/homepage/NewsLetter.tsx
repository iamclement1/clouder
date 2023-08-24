"use client";
import React from "react";

import { FormEvent, ChangeEvent, useState } from "react";
import { Stack, Input, Flex } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import CustomButton from "../common/CustomButton";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial",
  );

  return (
    <Flex>
      <Stack
        direction={{ base: "column", md: "row" }}
        as={"form"}
        w="100%"
        spacing={"12px"}
        onSubmit={(e: FormEvent) => {
          e.preventDefault();

          setState("submitting");

          // remove this code and implement your submit logic right here
        }}
      >
        <Input
          variant={"solid"}
          borderWidth={1}
          color={"white_1"}
          bgColor={"rgba_2"}
          _placeholder={{
            color: "gray.400",
          }}
          id={"email"}
          type={"email"}
          required
          placeholder={"Your Email"}
          aria-label={"Your Email"}
          value={email}
          disabled={state !== "initial"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          border={"none"}
        />

        <CustomButton
          isLoading={state === "submitting"}
          w="30%"
          bgColor={"white"}
          color="primary"
        >
          {state === "success" ? <CheckIcon /> : "Subscribe"}
        </CustomButton>
      </Stack>
      {/* <Text
                mt={2}
                textAlign={"center"}
                color={error ? "red.500" : "gray.500"}
            >
                {error
                    ? "Oh no an error occured! 😢 Please try again later."
                    : "You won't receive any spam! ✌️"}
            </Text> */}
    </Flex>
  );
}
