"use client";

import { Column } from "@/app/components/table";
import { BookingData } from "../../party/interface";

export const PartyColumns: Column<BookingData>[] = [
  {
    accessor: "trip_name",
    header: "Trip Name",
  },
  {
    accessor: "country",
    header: "Country",
  },
  {
    accessor: "quotation_number",
    header: "Quotation Number",
  },
  {
    accessor: "start_date",
    header: "Start Date",
  },
  {
    accessor: "end_date",
    header: "End Date",
  },
  {
    accessor: "number_of_travellers",
    header: "Travellers",
  },
  {
    accessor: "total_price",
    header: "Total Price",
  },
  {
    accessor: "paid_amount",
    header: "Paid Amount",
  },
  {
    accessor: "due_amount",
    header: "Due Amount",
  },
  {
    accessor: "payment_status",
    header: "Payment Status",
  },
  {
    accessor: "status",
    header: "Status",
  },
];