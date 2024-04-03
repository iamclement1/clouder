import * as React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Box,
  Text,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { UserDataType } from "@/utils/types";

export type DataTableProps<Data extends object> = {
  data: Data[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<Data, any>[];
};

export function DataTable<Data extends object>({
  data,
  columns,
}: Readonly<DataTableProps<Data>>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  const navigate = useRouter();

  const handleRowClick = (rowData: UserDataType) => {
    // Extract the ID from the clicked row data
    const { id } = rowData;
    // Navigate to the user details page with the ID as a query parameter
    navigate.push(`/supervisor/users/${id}`);
  };

  return (
    <Box p="2rem" overflowX={"auto"}>
      <Table>
        <Thead textAlign="center">
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th
                  textAlign="center"
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  fontSize="0.625rem"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}

                  <chakra.span pl="4">
                    {header.column.getIsSorted() &&
                      (header.column.getIsSorted() === "desc" ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      ))}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr
              key={row.id}
              cursor="pointer"
              onClick={() => handleRowClick(row.original as UserDataType)}
            >
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id} textAlign="center" fontSize="0.875rem">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Box mt="2.8125rem">
        <Text fontSize="0.75rem" color="#B5B7C0">
          {`Showing data ${1} to ${8} of  ${256}K entries`}
        </Text>
      </Box>
    </Box>
  );
}
