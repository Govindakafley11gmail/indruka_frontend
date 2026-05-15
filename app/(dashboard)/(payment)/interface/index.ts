/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";

export const collectionbreadcrumb = [
  { label: "Dashboard", href: "/" },
  { label: "Party", href: "/party" },
  { label: "Collection" },
];

// -----------------------------
// API Response Interfaces
// -----------------------------

export interface PaymentDetail {
  id: string;
  amount: string;
  method: "CASH" | "CHEQUE" | "ONLINE";
  referenceNumber: string | null;
  bankName: string | null;
}

export interface BookingInfo {
  id: string;
  number_of_travellers: number;
  trip_name: string;
  country: string;
  start_date: string;
  end_date: string;
  total_price: string;
  paid_amount: string;
  due_amount: string;
  quotation_number: string;
  status: string;
  payment_status: "PARTIAL" | "PAID" | "UNPAID";
}

export interface PremiumCollectionData {
  id: string;
  booking: BookingInfo;
  booking_id: string;
  collection_amount: string;
  collection_date: string;
  registration_no: string;
  status: "PENDING" | "APPROVED" | "REVERSED";
  details: PaymentDetail[];
  createdAt: string;
  updatedAt: string;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PremiumCollectionDataResponse {
  status: string;
  message: string;
  data: {
    data: PremiumCollectionData[];
    meta: PaginationMeta;
  };
}

// -----------------------------
// Form Interfaces
// -----------------------------

export interface TransactionDetail {
  collection_mode: "CASH" | "CHEQUE" | "ONLINE" | "";
  amount: number;
  instrument_number: string;
  bank_name: string;
  instrument_date: Date;
}

export interface PremiumCollectionFormValues {
  booking_id: string;
  collection_amount: number;
  collection_date: string;
  transactionDetails: TransactionDetail[];
}

export interface PremiumCollectionDataAttributes {
  booking_id: string;
  collection_amount: number;
  collection_date?: string;
  transactionDetails?: {
    collection_mode: "CASH" | "CHEQUE" | "ONLINE";
    amount?: number;
    instrument_number?: string;
    bank_name?: string;
    instrument_date?: string;
  }[];
}

// -----------------------------
// Component Props
// -----------------------------

export interface PremiumCollectionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: PremiumCollectionFormValues) => void;
  defaultValues?: Partial<PremiumCollectionFormValues>;
}

// -----------------------------
// Initial Values
// -----------------------------

export const getInitialValues = (
  defaultValues?: Partial<PremiumCollectionFormValues>
): PremiumCollectionFormValues => ({
  booking_id: defaultValues?.booking_id || "",
  collection_amount: defaultValues?.collection_amount || 0,
  collection_date: defaultValues?.collection_date || "",
  transactionDetails: defaultValues?.transactionDetails || [
    {
      collection_mode: "",
      amount: 0,
      instrument_number: "",
      bank_name: "",
      instrument_date: new Date(),
    },
  ],
});

// -----------------------------
// Validation Schema
// -----------------------------

export const premiumCollectionValidationSchema = Yup.object({
  booking_id: Yup.string().required("Booking is required"),
  collection_amount: Yup.number()
    .required("Amount is required")
    .min(1, "Amount must be greater than 0"),
  collection_date: Yup.date().required("Date is required"),
  transactionDetails: Yup.array().of(
    Yup.object({
      collection_mode: Yup.string().required("Collection mode is required"),
      amount: Yup.number()
        .required("Amount is required")
        .min(1, "Amount must be greater than 0"),
      instrument_number: Yup.string().when("collection_mode", {
        is: (val: string) => val === "CHEQUE" || val === "ONLINE",
        then: (schema) => schema.required("Instrument number is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
      bank_name: Yup.string().when("collection_mode", {
        is: (val: string) => val === "CHEQUE" || val === "ONLINE",
        then: (schema) => schema.required("Bank name is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
      instrument_date: Yup.date().when("collection_mode", {
        is: (val: string) => val === "CHEQUE",
        then: (schema) => schema.required("Cheque date is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
    })
  ),
});

// -----------------------------
// Invoice Interfaces
// -----------------------------

export interface InvoiceItem {
  description: string;
  dueDate: string;
  amount: number;
}

export interface RiskDetailsProps {
  party_name: string;
  party_identity_no: string;
  policy_premium: number;
}

export interface InvoiceData {
  invoiceNo?: string;
  invoiceDate?: string;
  policyNumber?: string;
  riskDetails?: RiskDetailsProps[];
  items?: InvoiceItem[];
  gstApplicable?: string;
}