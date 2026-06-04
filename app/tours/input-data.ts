/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BookingModalConfig } from "@/custom-components/custom-form";
import { COUNTRIES } from "../view-details/callbacks-data";
import { SPECIALITIES_BY_COUNTRY } from "../view-details/booking-page";
import type { BookingPayload } from "../view-details/booking-backend/interface";

const nationalityOptions = COUNTRIES.map((c) => ({
  label: `${c.flag} ${c.name}`,
  value: c.code,
}));

export const bhutanTripConfig = (
  pricePerPerson: number,
  tourName: string,
  country: string = "Bhutan",
  createBooking: (payload: BookingPayload) => void,
): BookingModalConfig => ({
  title: `Book ${tourName}`,
  subtitle: "Complete your details to request a booking",
  estimatedTotal: `$${pricePerPerson.toLocaleString()}`,
  estimatedLabel: "Estimated total",
  submitLabel: "Request to Book",

  fields: [
    {
      id: "firstName",
      type: "text",
      label: "First Name",
      placeholder: "Enter First Name",
      required: true,
      colSpan: 1,
    },
    {
      id: "lastName",
      type: "text",
      label: "Last Name",
      placeholder: "Enter Last Name",
      required: true,
      colSpan: 1,
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      placeholder: "you@email.com",
      required: true,
      colSpan: 2,
    },
    {
      id: "phone",
      type: "phone",
      label: "Phone",
      placeholder: "Number",
      colSpan: 2,
    },
    {
      id: "dateRange",
      type: "daterange",
      label: "Preferred Start & End Date",
      required: true,
      colSpan: 2,
    },
    {
      id: "number_of_travellers",
      type: "number",
      label: "Number of Travelers",
      placeholder: "1",
      required: true,
      colSpan: 2,
      defaultValue: 1,
    },
    {
      id: "specialRequests",
      type: "textarea",
      label: "Special Requests",
      placeholder: "Any dietary needs, accessibility requirements, etc.",
      colSpan: 2,
    },
  ],

  onSubmit: (data: any) => {
  const startDate = data.dateRange?.from
    ? new Date(data.dateRange.from).toISOString().split("T")[0]
    : "";
  const endDate = data.dateRange?.to
    ? new Date(data.dateRange.to).toISOString().split("T")[0]
    : "";

  const numberOfTravellers = Number(data.number_of_travellers) || 1;
const parseAmount = (value: string | number): number => {
    if (typeof value === "number") return value;
    return Number(value.replace(/[^0-9.]/g, ""));
  };

  const pricePerPersonParsed = parseAmount(pricePerPerson ?? 0);

  // ✅ Read per-traveller fields
   const parties = [
    {
      user_name: `${data.firstName} ${data.lastName}`.trim(),
      mobile_number: data.phone ?? "",
      email: data.email,
      amount: pricePerPersonParsed * numberOfTravellers, // ✅ total amount
      adults: numberOfTravellers,                         // ✅ total travellers
    },
  ];


  const payload: BookingPayload = {
    number_of_travellers: numberOfTravellers,
    trip_name: tourName,
    country: data.phoneCountry as string,
    start_date: startDate,
    end_date: endDate,
    parties,
  };
   console.log("Booking Payload:", payload);
  createBooking(payload);
},
});