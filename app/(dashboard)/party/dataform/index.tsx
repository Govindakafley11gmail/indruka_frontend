import { Column } from "@/app/components/table";
import {
  CreditCard,
  Flag,
  Hash,
  Mail,
  Phone,
  Search,
  User,
} from "lucide-react";
import { BookingParty, BookingSearchDto } from "../interface";

// ── Party table columns ───────────────────────────────────────────────────

export const PartyColumns: Column<BookingParty>[] = [
  
  //   {
  //   header: "Registration No",
  //   render: (_, row) =>
  //     row. ,
  // },
  {
    header: "Name",
    accessor: "user_name",
  },
  {
    header: "Email",
    accessor: "email",
  },
  {
    header: "Mobile",
    accessor: "mobile_number",
  },
  {
    header: "Adults",
    accessor: "adults",
  },
  {
    header: "Amount",
    render: (_, row) =>
      row.amount ? `Nu. ${Number(row.amount).toLocaleString()}` : "-",
  },

];

// ── Search fields ─────────────────────────────────────────────────────────

export const SearchFieldsFields = [
  {
    type: "inputwithicon",
    name: "name" as keyof BookingSearchDto,
    label: "Name",
    placeholder: "Search by traveller name",
    Icon: User,
  },
  {
    type: "inputwithicon",
    name: "registration_number" as keyof BookingSearchDto,
    label: "Registration No",
    placeholder: "Search by registration number",
    Icon: Hash,
  },
  {
    type: "inputwithicon",
    name: "country" as keyof BookingSearchDto,
    label: "Country",
    placeholder: "Search by country",
    Icon: Flag,
  },
  {
    type: "inputwithicon",
    name: "mobile_number" as keyof BookingSearchDto,
    label: "Mobile Number",
    placeholder: "Search by mobile number",
    Icon: Phone,
  },
  {
    type: "inputwithicon",
    name: "email" as keyof BookingSearchDto,
    label: "Email",
    placeholder: "Search by email",
    Icon: Mail,
  },
  {
    type: "inputwithicon",
    name: "document_number" as keyof BookingSearchDto,
    label: "Document Number",
    placeholder: "Search by document number",
    Icon: CreditCard,
  },
  {
    type: "inputwithicon",
    name: "bookingId" as keyof BookingSearchDto,
    label: "Booking ID",
    placeholder: "Search by booking ID",
    Icon: Search,
  },
];


export const SearchFields = [
 
  {
    type: "inputwithicon",
    name: "registration_number" as keyof BookingSearchDto,
    label: "Registration No",
    placeholder: "Search by registration number",
    Icon: Hash,
  },
 
 

 

];
// ── Initial search values ─────────────────────────────────────────────────

export const initialSearchValues: BookingSearchDto = {
  bookingId: "",
  user_name: "",
  registration_number: "",
  country: "",
  mobile_number: "",
  email: "",
  document_number: "",
};

// ── Breadcrumb ────────────────────────────────────────────────────────────

export const partybreadcrumb = [
  { label: "Dashboard", href: "/" },
  { label: "Booking", href: "/booking" },
  { label: "Booking Search" },
];