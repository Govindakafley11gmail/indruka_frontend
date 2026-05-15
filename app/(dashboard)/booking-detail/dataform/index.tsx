/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "@/app/components/table";
import { BookingIndexAttributes } from "../interface";

import {
  DeleteIcon,
  DownloadIcon,
  MoreHorizontalIcon,
  EyeIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FieldConfig } from "@/app/components/custom-dialog-box";

/* ---------------- BOOKING COLUMNS ---------------- */

export const BookingColumns: Column<BookingIndexAttributes>[] = [
  { header: "Customer Name", accessor: "user_name" },
  { header: "Mobile Number", accessor: "mobile_number" },
  { header: "Email", accessor: "email" },
  { header: "Adults", accessor: "adults" },
  { header: "Total Amount", accessor: "amount" },
];

/* ---------------- CONFIRMED BOOKING COLUMNS ---------------- */

export const ConfirmedBookingColumns = (
  onDownloadTicket: (row: BookingIndexAttributes) => void,
  onViewDetails?: (row: BookingIndexAttributes) => void,
  onCancelBooking?: (row: BookingIndexAttributes) => void
): Column<BookingIndexAttributes>[] => [
    { header: "Customer Name", accessor: "user_name" },
    { header: "Mobile Number", accessor: "mobile_number" },
    { header: "Email", accessor: "email" },
    { header: "Adults", accessor: "adults" },
    { header: "Amount", accessor: "amount" },

    {
      header: "Action",
      render: (_value, row) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onDownloadTicket(row)}>
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download Ticket
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => onViewDetails?.(row)}>
              <EyeIcon className="mr-2 h-4 w-4" />
              View Details
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => onCancelBooking?.(row)}
              className="text-red-600"
            >
              <DeleteIcon className="mr-2 h-4 w-4" />
              Cancel Booking
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

/* ---------------- BOOKING DIALOG FIELDS ---------------- */

export const BookingDialogFields: FieldConfig[] = [
  {
    name: "user_name",
    label: "Customer Name",
    type: "input",
  },
  {
    name: "mobile_number",
    label: "Mobile Number",
    type: "input",
  },
  {
    name: "email",
    label: "Email",
    type: "input",
  },
  {
    name: "adults",
    label: "Adults",
    type: "input",
  },
  {
    name: "amount",
    label: "Total Amount",
    type: "input",
  },
];

export const DocumentDialogFields: FieldConfig[] = [
  {
    name: "type",
    label: "Customer Name",
    type: "select",
    options: [
      { label: 'Passport', value: 'PASSPORT' },
      { label: 'Permit Card', value: 'PERMIT' },
      { label: 'Others', value: 'OTHERS' },

    ]
  },
  {
    name: "document_number",
    label: "Document Number",
    type: "input",
  },
  {
    name: "expiry_date",
    label: "Expiry Date",
    type: "date",
  }
 , {
    name: "file",
    label: "Document Upload",
    type: "file",
  }
];

export const DocumentColumns = [
  {
    accessor: "type",
    header: "Type",
  },
  {
    accessor: "document_number",
    header: "Document No",
  },
  {
    accessor: "expiry_date",
    header: "Expiry Date",
  },
  {
    accessor: "file",
    header: "File",
    cell: ({ row }: any) => {
      const file = row.original.file;
      return file ? (
        <a
          href={file}
          target="_blank"
          className="text-blue-600 underline"
        >
          View
        </a>
      ) : (
        "-"
      );
    },
  },
];