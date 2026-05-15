/* eslint-disable @typescript-eslint/no-explicit-any */
// data-form.ts

import * as Yup from "yup";
import { InvoiceData, PremiumCollectionData } from ".";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, MoreHorizontalIcon, MailCheckIcon, ArchiveIcon, ClockIcon, CalendarPlusIcon, ListFilterIcon, TagIcon, Trash2Icon, DeleteIcon, Download, DownloadIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { FieldConfig } from "@/app/components/custom-dialog-box";
import { Column } from "@/app/components/table";
export const Quotationfields = (): FieldConfig[] => [
  {
    name: "policy_no",
    label: "Policy No/Quotation no",
    type: "input",
    placeholder: "Policy No",
  },
  {
    name: 'policy_quotation_no',
    label: 'Quotation No',
    type: 'input',
    placeholder: 'Quotation No',
  },
  {
    name: "party_id",
    label: "Party Id",
    type: "input",
    placeholder: "Party Id",
  }
]

export const PremiumCollectionFields = (
): FieldConfig[] => [

    {
      name: "registration_no",
      label: "Registration no",
      type: "input",
      placeholder: "Policy No",
      validation: Yup.string().required("Policy No is required"),
    },

    {
      name: "bank_account_no",
      label: "Bank Account No",
      type: "select",
      options: [
        { label: "Account 1", value: "BOBL201225096" },
        { label: "Account 2", value: "ACC002" },
        { label: "Account 3", value: "ACC003" },
      ],
      placeholder: "Bank Account No",
      validation: Yup.string().required("Bank Account No is required"),
    },

    {
      name: "collection_amount",
      label: "Collection Amount",
      disabled: true,
      type: "number",
      placeholder: "Enter Collection Amount",
      validation: Yup.number().required("Amount is required").min(0),
    },
    {
      name: "collection_date",
      label: "Collection Date",
      type: "date",
      placeholder: "Select Collection Date",
      validation: Yup.date().required("Date is required"),
    },
    {
      name: "transactionDetails",
      label: "Transaction Details",
      type: "array", // dynamic array
      fields: [
        {
          name: "collection_mode",
          label: "Collection Mode",
          type: "select",
          options: [
            { label: "CASH", value: "CASH" },
            { label: "CARD", value: "CARD" },
            { label: "BANK_TRANSFER", value: "BANK_TRANSFER" },
            { label: "MOBILE_PAYMENT", value: "MOBILE_PAYMENT" },

          ],
          validation: Yup.string().required("Collection mode is required"),
        },
        //  { name: "cheque_cash_amount", label: "Deposit Amount", type: "input" },
        //  { name: "instrument_date", label: "Cash/Cheque Date", type: "date" },
        // {
        //   name: "instrument_number",
        //   label: "Instrument Number",
        //   type: "input",
        //   placeholder: "Instrument Number",
        //   validation: Yup.string().required("Instrument number is required"),
        // },
        // {
        //   name: "bank_name",
        //   label: "Bank Name",
        //   type: "text",
        //   placeholder: "Bank Name",
        //   validation: Yup.string().required("Bank name is required"),
        // },

      ],
    },
  ];

export const baseField: FieldConfig = {
  name: "collection_mode",
  label: "Collection Mode",
  type: "select",
  options: [
    { label: "CASH", value: "CASH" },
            { label: "CARD", value: "CARD" },
            { label: "BANK_TRANSFER", value: "BANK_TRANSFER" },
            { label: "MOBILE_PAYMENT", value: "MOBILE_PAYMENT" },

  ],
};

// Fields to show based on mode
export const getFieldsForMode = (mode: string): FieldConfig[] => {
  if (mode === "CASH") {
    return [
      { name: "instrument_date", label: "Cash Date", type: "date" },
      { name: "amount", label: "Deposit Amount", type: "input" }
    ];
  }
  else if (mode === "CARD" || mode === "BANK_TRANSFER") {
    return [
      { name: "instrument_number", label: "Instrument Number", type: "input" },
      { name: "amount", label: "Deposit Amount", type: "input" },
      { name: "bank_name", label: "Bank Name", type: "input" },
      { name: "instrument_date", label: "Cheque Date", type: "date" },
    ];
  }
  return [];
};

// Table column definition
export const getCollectionColumns = (
  onDelete: (row: PremiumCollectionData) => void,
  onGenerateInvoice: (row: PremiumCollectionData) => void,
  onDownload: (row: PremiumCollectionData) => void
): Column<PremiumCollectionData>[] => [
    {
      header: "Reference No",
      accessor: "registration_no",
      render: (_, row) => row.registration_no ?? "-",
    },
    {
      header: "Trip Name",
      accessor: "booking",
      render: (_, row) => row.booking?.trip_name ?? "-",
    },
    {
      header: "Country",
      accessor: "booking",
      render: (_, row) => row.booking?.country ?? "-",
    },
    {
      header: "Travellers",
      accessor: "booking",
      render: (_, row) => row.booking?.number_of_travellers ?? "-",
    },
    {
      header: "Collection Date",
      accessor: "collection_date",
      render: (_, row) =>
        row.collection_date
          ? new Date(row.collection_date).toLocaleDateString()
          : "-",
    },
    {
      header: "Collection Amount",
      accessor: "collection_amount",
      render: (_, row) => `BTN ${Number(row.collection_amount).toLocaleString()}`,
    },
    {
      header: "Payment Method",
      accessor: "details",
      render: (_, row) => row.details?.[0]?.method ?? "-",
    },
    {
      header: "Status",
      accessor: "status",
      render: (_, row) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === "PENDING"
              ? "bg-yellow-100 text-yellow-700"
              : row.status === "APPROVED"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "Action",
      render: (_, row) => (
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => onDelete(row)}
                className="text-red-600 focus:text-red-600"
              >
                <DeleteIcon className="mr-2 h-4 w-4" />
                Reverse
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onGenerateInvoice(row)}
                className="text-green-600 focus:text-green-600"
              >
                <DownloadIcon className="mr-2 h-4 w-4" />
                Tax Invoice
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDownload(row)}
                className="text-blue-600 focus:text-blue-600"
              >
                <DownloadIcon className="mr-2 h-4 w-4" />
                Money Receipt
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

export const mapResponseToInvoiceData = (response: any[]): InvoiceData[] => {
  return response.map((col) => ({
    invoiceNo: col.invoiceNo || `INV-${Date.now()}`,
    invoiceDate: col.collection_date,
    policyNumber: col.policy.policy_no,
    riskDetails: col.policy.policyRisks,
    items: [
      {
        description: `Premium - ${col.policy.policy_premium_mode} payment`,
        dueDate: col.collection_date,
        amount: col.collection_amount,
      },
    ],
    gstApplicable: col.policy.gst_applicable,
  }));
};