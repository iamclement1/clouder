import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
import CustomPagination from "./CustomPagination";
import { testimoniesData } from "@/utils/data";
import Typography from "../common/Typograph";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const TestimoniesSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(3);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2, // Change this to 1
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Change this to 1
        },
      },
    ],
    afterChange: (currentSlide: number) => setActiveSlide(currentSlide),
  };

  const goToSlide = (slideIndex: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(slideIndex);
      setActiveSlide(slideIndex);
    }
  };

  return (
    <Box>
      <Slider ref={sliderRef} {...settings}>
        {testimoniesData.map(({ text, pic, name, job }, i) => {
          return (
            <Box key={i} px="1rem">
              <Box className="testimonyBox" p="1.85rem">
                <Box maxW="14.02563rem">
                  <Typography fontSize="0.94769rem" noOfLines={5}>
                    {text}
                  </Typography>
                </Box>

                <Box mt="0.63rem">
                  <Flex align="center" gap="0.24rem">
                    {[1, 2, 3, 4, 5].map((i) => {
                      return (
                        <Icon
                          color="primary"
                          key={i}
                          as={FaStar}
                          boxSize={"1.14rem"}
                        />
                      );
                    })}
                  </Flex>
                </Box>

                <Flex mt="0.62rem" pl="2.4rem" gap="0.52rem" mb="1.4rem">
                  <Box maxW="10.8rem" h="2.7rem">
                    <Image src={pic} alt={name} layout="" />
                  </Box>
                  <Box>
                    <Text
                      color="black"
                      fontWeight={600}
                      variant="heading5"
                      fontSize={"0.94769rem"}
                    >
                      {name}
                    </Text>
                    <Typography fontSize={"0.75813rem"}>{job}</Typography>
                  </Box>
                </Flex>
              </Box>
            </Box>
          );
        })}
      </Slider>
      <CustomPagination
        totalSlides={7}
        activeSlide={activeSlide}
        goToSlide={goToSlide}
      />
    </Box>
  );
};

export default TestimoniesSlider;
