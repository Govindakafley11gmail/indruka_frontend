/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  BookingModal,
  useBookingModal,
  type BookingModalConfig,
} from "@/custom-components/custom-form";
import { useBookingMutations } from "./booking-backend/tanstack-function";
import { showToast } from "nextjs-toast-notify";
import type { BookingPayload } from "./booking-backend/interface";

export const SPECIALITIES_BY_COUNTRY: Record<string, string[]> = {
  India: [
    "Honeymoon packages",
    "Religious yatras",
    "Luxury stays",
    "Budget backpacking trips",
    "Hill Stations & Nature Destinations",
    "Beach Holidays",
    "Corporate tours",
    "School/college trips",
    "Weekend Delhi-to-hills tours",
  ],
  Bhutan: [
    "Cultural",
    "Festival",
    "Trekking",
    "Luxury",
    "Birdwatching",
    "Private Tour",
  ],
};

export default function BookingPage({
  price,
  tourName,
  country, // ← add this prop
}: {
  price: any;
  tourName: any;
  country?: string;
}) {
  const bhutan = useBookingModal();

  const {
    createBooking,
  
    isLoading,
  } = useBookingMutations({
    onSuccess: (data) => {
      showToast.success(data.message, {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
      
    },
    onError: (error) => {
      showToast.error(error?.data?.message, {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
    },
  });
const tripTypeOptions: string[] = SPECIALITIES_BY_COUNTRY[country ?? ""] ?? [];
  const bookingConfig: BookingModalConfig = {
    title: `Book ${tourName}`,
    subtitle: "Complete your details to request a booking",
    estimatedTotal: "",
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
        options: tripTypeOptions, // ← dynamically set from country
      },
      {
        id: "nationality",
        type: "select",
        label: "Nationality",
        placeholder: "Select nationality",
        required: true,
        colSpan: 2,
        options: [
          "Bangladesh",
          "India",
          "Nepal",
          "Sri Lanka",
          "United States",
          "United Kingdom",
          "Australia",
          "Canada",
          "Germany",
          "France",
          "Japan",
          "Singapore",
        ],
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

  const numberOfTravellers = Number(data.travelers) || 1;

  // Build parties array — one entry per traveller
  const parties = Array.from({ length: numberOfTravellers }, () => ({
    user_name: `${data.firstName} ${data.lastName}`,
    mobile_number: data.phone ?? "",
    email: data.email,
    amount: price ?? 0,
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
  };

  return (
    <main className="z-10 flex flex-col items-center justify-center gap-6 p-8">
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={bhutan.openModal}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold shadow-lg transition-all"
        >
          Book {tourName}
        </button>
      </div>

      <BookingModal
        config={bookingConfig}
        open={bhutan.open}
        onClose={bhutan.closeModal}
        pricePerPerson={price}
        guestsFieldId="number_of_travellers"
        tourName={tourName}
        price={price}
      />
    </main>
  );
}