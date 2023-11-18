import { Image, Link, Flex } from "@chakra-ui/react";
import React from "react";

const LoginWithIcon = () => {
  return (
    <Flex align="center" mt="0.94rem" justify="center" gap="2rem">
      {dataSet.map(
        ({
          id,
          // href,
          image,
        }: {
          id: number;
          // href: string | ()=>void;
          image: string;
        }) => {
          return (
            <Link href="" key={id}>
              <Image src={`/${image}.svg`} alt={`${image} logo`} />
            </Link>
          );
        },
      )}
    </Flex>
  );
};

export default LoginWithIcon;

const dataSet = [
  {
    id: 1,
    image: "google",
    // href: "#",
  },
  {
    id: 2,
    image: "fb",
    // href: () => {

    // },
  },

  {
    id: 3,
    image: "apple",
    // href: () => {

    // },
  },
];
