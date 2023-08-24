import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {scrollPosition > 700 && (
        <IconButton
          aria-label="back-to-top"
          pos={"fixed"}
          right={["1rem", "3rem", "4rem", "5rem"]}
          bottom={["1rem", "1.5rem", "2rem"]}
          icon={<FaArrowUp />}
          boxSize={["2.5rem", "3.5rem", ""]}
          fontSize={["1rem", null, "1.5rem"]}
          cursor={"pointer"}
          color={"white"}
          bgColor={"primary_2"}
          href="#top"
          as="a"
          rounded={"full"}
          _hover={{}}
          _active={{}}
          shadow={"2xl"}
        />
      )}
    </div>
  );
};

export default BackToTop;
