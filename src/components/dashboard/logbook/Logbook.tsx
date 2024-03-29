import Typography from "@/components/common/Typograph";
import { Box, Flex, Icon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

import CustomButton from "@/components/common/CustomButton";

import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { useLogbook } from "@/context/LogbookProvider";
import LogbookForm from "./LogbookForm";
import LogbookPreview from "./LogbookPreview";
import useFetchLogbook from "@/hooks/useLogbook";
import LoadingSkeleton from "@/components/common/Skeleton";
import { logbookResponseType } from "@/utils/types";
interface CustomPageClickEvent extends React.MouseEvent<HTMLButtonElement> {
  selected: number;
}

const Logbook = () => {
  const { fillForm, handleFillForm, preview, totalData, logBookMode } =
    useLogbook();

  const { data, isLoading } = useFetchLogbook();
  const logbook = data?.data;
  const router = useRouter();

  const filteredLogbookData = logbook?.filter((item: logbookResponseType) => {
    switch (logBookMode) {
      case "medical":
        return item.logBookType === "medical";
      case "surgical":
        return item.logBookType === "surgical";
      default:
        return false;
    }
  });

  // ******************************************
  // const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const items = totalData;

  const itemsPerPage = 4;
  // const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
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

    // setItemOffset(newOffset);
  };
  // ******************************************

  if (isLoading) return <LoadingSkeleton />;

  return (
    <Box>
      <Box pb="3rem">
        {preview ? (
          <div>
            <LogbookPreview />
          </div>
        ) : (
          <>
            <Flex align="center" justify="space-between" gap="1rem">
              <Box>
                <Typography variant="heading2" color="#000">
                  Logbook{" "}
                  <Text as="span" color="grey_1">
                    {logBookMode === "medical" ? "(Medical Logbook)" : ""}
                    {logBookMode === "surgical" ? "(Surgical Logbook)" : ""}
                  </Text>
                </Typography>

                {/* {fillForm && <ResearchRole />} */}
              </Box>
              {filteredLogbookData?.length >= 1 && fillForm !== true && (
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
            </Flex>{" "}
            {fillForm ? (
              <div>
                <LogbookForm />
              </div>
            ) : (
              <Box
                mt="1rem"
                bgColor="white"
                minH="80vh"
                borderRadius="0.46875rem"
              >
                {filteredLogbookData?.length >= 1 ? (
                  <Box py="2.44rem" px="2.39rem">
                    <Box>
                      <Flex
                        justify="center"
                        align="center"
                        py="1.125rem"
                        w="100%"
                        rounded="0.375rem"
                        bgColor="grey_14"
                      >
                        <Text fontSize="1.125rem" fontWeight="700">
                          Research Entries
                        </Text>
                      </Flex>
                    </Box>

                    <OrderedList mt="2.2rem">
                      {filteredLogbookData?.map((item: logbookResponseType) => {
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
                                  `/dashboard/logbook/logbook_aquired/${item?.id}`,
                                )
                              }
                              cursor={"pointer"}
                            >{`${item?.firstTitle}
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
                              href={`/dashboard/logbook/request_feed_back/${item?.firstTitle}`}
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
                      {" "}
                      You currently do not have any data supplied
                    </Text>

                    <Flex
                      mt="1rem"
                      gap="0.38rem"
                      fontSize={"0.84375rem"}
                      color="primary"
                      cursor={"pointer"}
                      align="center"
                      fontWeight="600"
                      onClick={() => handleFillForm(true)}
                    >
                      <Icon as={MdOutlineAddCircleOutline} /> Add Activities
                    </Flex>
                  </Flex>
                )}
              </Box>
            )}{" "}
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
export default Logbook;
