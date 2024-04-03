import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { DataTable } from "./Tables/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import ReactPaginate from "react-paginate";
import useAllUser from "@/hooks/useAllUser";
import LoadingSkeleton from "../common/Skeleton";
interface CustomPageClickEvent extends React.MouseEvent<HTMLButtonElement> {
  selected: number;
}

const AllUsers = () => {
  const [sortMenu, setSortMenu] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>("Newest");

  const { data: AllUserProfile, isLoading } = useAllUser();

  const allUsers = AllUserProfile?.data?.data;

  // Table pased data
  type UserDetailsType = {
    id: number;
    fullName: string;
    phone: string;
    email: string;
    location: string;
    status: string;
  };

  const columnHelper = createColumnHelper<UserDetailsType>();

  const columns = [
    columnHelper.accessor("fullName", {
      cell: (info) => info.getValue(),
      header: "User’s Name",
    }),
    columnHelper.accessor("phone", {
      cell: (info) => info.getValue(),
      header: "Phone Number",
    }),
    columnHelper.accessor("email", {
      cell: (info) => info.getValue(),
      header: "Email",
    }),
    columnHelper.accessor("location", {
      cell: (info) => info.getValue(),
      header: "Location",
    }),

    columnHelper.accessor("status", {
      cell: (info) => {
        const currentStatus = info.getValue();
        return (
          <Box>
            <Button
              h="auto"
              color={currentStatus === "active" ? "#008767" : "#DF0404"}
              fontSize="0.75rem"
              w="5.5625rem"
              bgColor={
                currentStatus === "active"
                  ? "rgba(22, 192,152,38%)"
                  : "rgb(255,197,197)"
              }
              border="1px"
              borderColor={currentStatus === "active" ? "#00B087" : "#DF0404"}
              py="3px"
              fontWeight={"medium"}
              rounded="14px"
              _hover={{}}
              _active={{}}
              _focus={{}}
            >
              {info.getValue()}
            </Button>
          </Box>
        );
      },
      header: "Status",
    }),
  ];

  // ******************************************
  // Pagination STart

  // const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const items = allUsers;

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
      <Box bgColor="white" rounded="0.5625rem">
        {/* Table Header */}
        <Flex
          py="1.6875rem"
          px="2.625rem"
          align="center"
          justify="space-between"
        >
          <Text fontWeight="semibold" fontSize={"1.03125rem"}>
            All Users
          </Text>

          <Box w="100%" maxW="13.6875rem" pos="relative">
            <Flex
              bgColor="#F9FBFF"
              py="0.625rem"
              px="0.6rem"
              rounded="0.5625rem"
              justify="space-between"
              align="center"
              onClick={() => setSortMenu(!sortMenu)}
              cursor="pointer"
            >
              <Text color="#7E7E7E" fontSize={"0.8625rem"}>
                Short by :{" "}
                <Text as="span" color="#3D3C42" fontWeight={"bold"}>
                  {sortOption}
                </Text>
              </Text>

              <BsChevronDown />
            </Flex>

            {sortMenu && (
              <Stack
                // minH="12.5rem"
                left="0"
                right="0"
                top="2.3rem"
                pos="absolute"
                bgColor="white"
                boxShadow={"md"}
                // py=".5rem"
                overflow={"hidden"}
                border="1px"
                borderColor="gray.200"
                rounded="0.5625rem"
              >
                <Text
                  py=".45rem"
                  fontSize={".9rem"}
                  px="1rem"
                  cursor="pointer"
                  _hover={{ bgColor: "gray.300" }}
                  onClick={() => {
                    setSortOption("Newest");
                    setSortMenu(!sortMenu);
                  }}
                >
                  Newest
                </Text>{" "}
                <Text
                  py=".45rem"
                  fontSize={".9rem"}
                  px="1rem"
                  cursor="pointer"
                  _hover={{ bgColor: "gray.300" }}
                  onClick={() => {
                    setSortOption("Oldest");
                    setSortMenu(!sortMenu);
                  }}
                >
                  Oldest
                </Text>{" "}
                <Text
                  py=".45rem"
                  fontSize={".9rem"}
                  px="1rem"
                  cursor="pointer"
                  _hover={{ bgColor: "gray.300" }}
                  onClick={() => {
                    setSortOption("Color");
                    setSortMenu(!sortMenu);
                  }}
                >
                  Color
                </Text>
              </Stack>
            )}
          </Box>
        </Flex>

        {/* Table Gangan */}

        <DataTable columns={columns} data={allUsers} />
      </Box>

      {/* Pagination */}

      <Flex align="center" justify="center" mt="21px">
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
        />
      </Flex>
    </Box>
  );
};

export default AllUsers;
