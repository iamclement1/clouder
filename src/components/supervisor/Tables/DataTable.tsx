// import {

//     Box,
//     Flex,
//     Icon,
//     Table,
//     Tbody,
//     Td,
//     Text,
//     Th,
//     Thead,
//     Tr,
// } from "@chakra-ui/react";
// import React from "react";
// import { BsPenFill, BsThreeDots, BsTrash3Fill } from "react-icons/bs";
// import { useTable } from "@tanstack/react-table";

// const columns = [
//     {
//         Header: "User’s Name",
//         accessor: "userName",
//     },

//     {
//         Header: "Phone Number",
//         accessor: "phoneNumber",
//     },
//     {
//         Header: "Email",
//         accessor: "email",
//     },
//     {
//         Header: "Location",
//         accessor: "location",
//     },
//     {
//         Header: "Status",
//         accessor: "status",
//     },

//     {
//         Header: "Action",
//         accessor: (row) => (
//             <Flex
//                 // boxSize={"1.3rem"}
//                 // bgColor={"status_2"}
//                 px="3px"
//                 py="2px"
//                 align="center"
//                 justify="center"
//                 rounded="3px"
//                 cursor="pointer"
//             >
//                 <Text>Active</Text>
//             </Flex>
//         ),
//     },
// ];

// const DataTable = () => {
//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//         useTable({
//             columns,
//             data,
//         });

//     return (
//         <Box bgColor={"blue_3"}>
//             <Flex
//                 p="1.25rem"
//                 style={{ borderBottom: "1px solid  #292d44" }}
//                 align={"center"}
//                 justify="space-between"
//                 gap="1rem"
//             >
//                 <Text fontSize={"1.125rem"} fontWeight={"700"}>
//                     Products
//                 </Text>
//             </Flex>

//             <Box p="2rem">
//                 <Table {...getTableProps()}>
//                     <Thead>
//                         {headerGroups.map((headerGroup) => (
//                             <Tr
//                                 key={headerGroup.id}
//                                 style={{ borderTop: "1px solid #292d44" }}
//                             >
//                                 {headerGroup.headers.map((column) => (
//                                     <Th key={column.id} border="none">
//                                         {column.render("Header")}
//                                     </Th>
//                                 ))}
//                             </Tr>
//                         ))}
//                     </Thead>
//                     <Tbody
//                         {...getTableBodyProps()}
//                         style={{ borderTop: "1px solid #292d44" }}
//                     >
//                         {rows.map((row, i) => {
//                             prepareRow(row);
//                             return (
//                                 <Tr
//                                     key={i}
//                                     {...row.getRowProps()}
//                                     borderBottom="1px solid #292d44"
//                                 >
//                                     {row.cells.map((cell) => (
//                                         <Td
//                                             key={cell.id}
//                                             border="none"
//                                             fontSize="0.875rem"
//                                         >
//                                             {cell.render("Cell")}
//                                         </Td>
//                                     ))}
//                                 </Tr>
//                             );
//                         })}
//                     </Tbody>
//                 </Table>
//             </Box>
//         </Box>
//     );
// };

// export default DataTable;

//  const products = [

//  ];

import React from "react";

const DataTable = () => {
  return <div>DataTable</div>;
};

export default DataTable;
