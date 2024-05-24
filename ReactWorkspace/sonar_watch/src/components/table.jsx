// import React, { useState } from "react";
// import { TableContainer, StyledTable } from "../../library/tableStyles";
// import Profile from "../../assets/icons/profile.svg";
// // import Example from "./modal";

// import {
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// const defaultData = [
//   {
//     Customer: { Name: "John Doe", Date: "August 03, 2023" },
//     Email: "johndoe@gmail.com",
//     Phone_number: "08064151712",
//     Gender: "Male",
//   },
//   {
//     Customer: { Name: "John Doe", Date: "August 03, 2023" },
//     Email: "johndoe@gmail.com",
//     Phone_number: "08064151712",
//     Gender: "Male",
//   },
//   {
//     Customer: { Name: "John Doe", Date: "August 03, 2023" },
//     Email: "johndoe@gmail.com",
//     Phone_number: "08064151712",
//     Gender: "Male",
//   },
//   {
//     Customer: { Name: "John Doe", Date: "August 03, 2023" },
//     Email: "johndoe@gmail.com",
//     Phone_number: "08064151712",
//     Gender: "Male",
//   },
//   {
//     Customer: { Name: "John Doe", Date: "August 03, 2023" },
//     Email: "johndoe@gmail.com",
//     Phone_number: "08064151712",
//     Gender: "Male",
//   },
//   {
//     Customer: { Name: "John Doe", Date: "August 03, 2023" },
//     Email: "johndoe@gmail.com",
//     Phone_number: "08064151712",
//     Gender: "Male",
//   },
// ];

// const columnHelper = createColumnHelper();
// const columns = [
//   columnHelper.accessor("profile", {
//     header: "",
//     cell: (info) => (
//       <img
//         src={Profile}
//         alt=".."
//         className="roundedFull w-10 h-10 object-cover"
//       />
//     ),
//   }),
//   columnHelper.accessor("Customer", {
//     header: "Customer",
//     cell: ({ getValue }) => {
//       const { Name, Date } = getValue();
//       return (
//         <div>
//           <p>{Name}</p>
//           <p className="dateName">{Date}</p>
//         </div>
//       );
//     },
//   }),
//   columnHelper.accessor("Email", {
//     header: "Email",
//     cell: (info) => info.getValue(),
//   }),
//   columnHelper.accessor("Phone_number", {
//     header: "Phone Number",
//     cell: (info) => info.getValue(),
//   }),
//   columnHelper.accessor("Gender", {
//     header: "Gender",
//     cell: (info) => info.getValue(),
//   }),
// ];

// export default function Table() {
//   const [data] = useState(defaultData);
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   const [showModal, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   console.log(showModal);
//   return (
//     <div>
//       <TableContainer>
//         <StyledTable>
//           <thead>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <tr key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <th key={header.id}>
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>

//           <tbody>
//             {table.getRowModel().rows.map((row) => (
//               <tr className="tableRow" key={row.id} onClick={handleShow}>
//                 {row.getVisibleCells().map((cell) => (
//                   <td key={cell.id}>
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </StyledTable>
//       </TableContainer>
//     </div>
//   );
// }