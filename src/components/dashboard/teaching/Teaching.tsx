import Typography from "@/components/common/Typograph";
import { Box, Flex, Icon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

import CustomButton from "@/components/common/CustomButton";

import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useTeaching } from "@/context/TeachingProvider";
import TeachingForm from "./TeachingForm";
import TeachingPreview from "./TeachingPreview";
import useGetTeaching from "@/hooks/useGetTeaching";
import LoadingSkeleton from "@/components/common/Skeleton";
import { TeachingResType } from "@/utils/types";
import { toast } from "sonner";
interface CustomPageClickEvent extends React.MouseEvent<HTMLButtonElement> {
  selected: number;
}

const Teaching = () => {
  const { fillForm, handleFillForm, preview, totalData } = useTeaching();

  const router = useRouter();
  let isErrorShown = false;
  const { isLoading, error, data } = useGetTeaching();

  useEffect(() => {
    if (error && !isErrorShown) {
      toast.error("Error fetching data");
      isErrorShown = true;
    }
  }, [error, isErrorShown]);

  const teaching = data?.data;
  // ******************************************
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const items = totalData;

  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  // Run when user click to request another page.
  const handlePageClick = (event: CustomPageClickEvent) => {
    setCurrentPage(event.selected);
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    console.log(
      `User requested page number ${
        event.selected
      }, which is offset ${newOffset} current page is ${
        currentPage + 1
      } and total page is ${pageCount}`,
    );

    setItemOffset(newOffset);
  };
  // ******************************************

  if (isLoading) return <LoadingSkeleton />;
  return (
    <Box>
      <Box pb="3rem">
        {preview ? (
          <TeachingPreview />
        ) : (
          <>
            <Flex align="center" justify="space-between" gap="1rem">
              <Typography variant="heading2">Teaching</Typography>
              {teaching?.length >= 1 && fillForm !== true && (
                <CustomButton
                  bgColor={"transparent"}
                  border="1px"
                  borderColor="primary"
                  color="primary"
                  w="6rem"
                  h="2.1rem"
                  handleClick={() => handleFillForm(true)}
                >
                  Add New
                </CustomButton>
              )}
            </Flex>
            {fillForm ? (
              <TeachingForm />
            ) : (
              <Box
                mt="1rem"
                bgColor="white"
                minH="80vh"
                borderRadius="0.46875rem"
              >
                {teaching?.length >= 1 ? (
                  <Box py="2.44rem" px="2.39rem">
                    <Flex
                      justify="center"
                      align="center"
                      py="1.125rem"
                      w="100%"
                      rounded="0.375rem"
                      bgColor="grey_14"
                    >
                      <Text fontSize="1.125rem" fontWeight="700">
                        Teaching Entries
                      </Text>
                    </Flex>

                    <OrderedList mt="2.2rem">
                      {teaching
                        ?.slice()
                        .reverse() // Reverse the array to display the recent data first
                        .map((item: TeachingResType) => {
                          return (
                            <ListItem
                              mb={"1rem"}
                              color="grey_1"
                              key={item?.id}
                              fontSize="1.125rem"
                              fontWeight="600"
                              display="flex"
                              alignItems="center"
                              justifyContent={"space-between"}
                            >
                              <Text
                                onClick={() =>
                                  router.push(
                                    `/dashboard/teaching/teaching_aquired/${item?.id}`,
                                  )
                                }
                                cursor={"pointer"}
                              >{`${item?.title}
                                                            `}</Text>

                              <Text
                                bgColor="danger_2"
                                fontSize="0.75rem"
                                color="danger_1"
                                fontWeight="normal"
                                w="fit-content"
                                p="0.8rem 1rem"
                                rounded={"1.35938rem"}
                                cursor="pointer"
                                as="a"
                                href={`/dashboard/teaching/request_feed_back/${item?.id}`}
                              >
                                Request feedback
                              </Text>
                            </ListItem>
                          );
                        })}
                    </OrderedList>
                  </Box>
                ) : (
                  <Flex align="center" justify="center" flexDir={"column"}>
                    <Text fontSize="1.3125rem" color="grey_1" mt="3.75rem">
                      You currently do not have any data supplied
                    </Text>

                    <Flex
                      as="button"
                      mt="1rem"
                      gap="0.38rem"
                      fontSize={"0.84375rem"}
                      color="primary"
                      cursor={"pointer"}
                      align="center"
                      fontWeight="600"
                      onClick={() => {
                        handleFillForm(true);
                      }}
                    >
                      <Icon as={MdOutlineAddCircleOutline} />
                      Add Teaching
                    </Flex>
                  </Flex>
                )}
              </Box>
            )}
          </>
        )}
      </Box>

      <Flex align="center" justify="center">
        <ReactPaginate
          nextLabel={<Icon as={BsChevronRight} color="primary" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel={<Icon as={BsChevronLeft} />}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="of"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          // eslint-disable-next-line no-unused-vars
          // hrefBuilder={(page, pageCount, selected) =>
          //     page >= 1 && page <= pageCount ? `/page/${page}` : "#"
          // }
          // hrefAllControls
        />
      </Flex>
    </Box>
  );
};
export default Teaching;
