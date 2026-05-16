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
      id: "trip_name",
      type: "select",
      label: "Select the Trip Type",
      placeholder: "Select a trip type",
      required: true,
      colSpan: 2,
      options: SPECIALITIES_BY_COUNTRY[country] ?? [],
    },
    {
      id: "nationality",
      type: "select",
      label: "Nationality",
      placeholder: "Select nationality",
      required: true,
      colSpan: 2,
      options: nationalityOptions,
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
      id: "travellers",
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

    const parties = Array.from({ length: numberOfTravellers }, () => ({
      user_name: `${data.firstName} ${data.lastName}`,
      mobile_number: data.phone ?? "",
      email: data.email,
      amount: pricePerPerson ?? 0,
      adults: 1,
    }));

    const payload: BookingPayload = {
      number_of_travellers: numberOfTravellers,
      trip_name: data.trip_name,
      country: country ?? "",
      start_date: startDate,
      end_date: endDate,
      parties,
    };

    console.log("Payload to send:", payload);
    createBooking(payload);
  },
});