import Typography from "@/components/common/Typograph";
import {
  Box,
  Flex,
  Icon,
  ListItem,
  OrderedList,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import QualificationForm from "./QualificationForm";
import { useQualification } from "@/context/QualificationProvider";
import CustomButton from "@/components/common/CustomButton";
import QualificationPreview from "./QualificationPreview";
import useQualifications from "@/hooks/useQualification";
import { QualificationProps } from "@/utils/types";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import LoadingSkeleton from "@/components/common/Skeleton";

interface CustomPageClickEvent extends React.MouseEvent<HTMLButtonElement> {
  selected: number;
}

const Qualifications = () => {
  const { fillForm, handleFillForm, preview } = useQualification();

  const { data: qualificationsData, isLoading } = useQualifications();
  const qualification: QualificationProps[] = qualificationsData?.data?.data;

  // *******************************************************

  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const items = qualification;
  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items?.slice(itemOffset, endOffset);
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

  // *****************************************************

  if (isLoading) return <LoadingSkeleton />;

  return (
    <Box>
      {/* <SidebarWithHeader passedActive="/dashboard/qualifications"> */}
      <Box pb="3rem">
        {preview ? (
          <QualificationPreview />
        ) : (
          <>
            <Flex align="center" justify="space-between" gap="1rem">
              <Typography variant="heading2">Qualifications</Typography>
              {qualification?.length >= 1 && fillForm !== true && (
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
              <QualificationForm />
            ) : (
              <Box
                mt="1rem"
                bgColor="white"
                minH="80vh"
                borderRadius="0.46875rem"
              >
                {qualification?.length >= 1 ? (
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
                        Qualification Entries
                      </Text>
                    </Flex>
                    {isLoading ? (
                      <Stack>
                        <Skeleton height="50px" />
                        <Skeleton height="50px" />
                        <Skeleton height="50px" />
                      </Stack>
                    ) : (
                      <OrderedList mt="2.2rem" spacing={"1rem"}>
                        {currentItems
                          ?.slice() // Create a copy of the array to avoid mutating the original array
                          .reverse() // Reverse the array to display the recent data first
                          .map((item) => (
                            <ListItem
                              color="grey_1"
                              key={item?.id}
                              mb={"1rem"}
                              fontSize="1 rem"
                              fontWeight="600"
                            >
                              {`${item.education[0]?.institution}`}
                            </ListItem>
                          ))}
                        {/* ** 8 8 8 */}
                      </OrderedList>
                    )}
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
                      <Icon as={MdOutlineAddCircleOutline} /> Add qualifications
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
      {/* </SidebarWithHeader> */}
    </Box>
  );
};
export default Qualifications;
