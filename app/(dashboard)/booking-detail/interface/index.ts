/* =========================
   PARTY MODULE
========================= */

export interface PartyTraveller {
  user_name: string;
  mobile_number: string;
  email: string;
  adults: number;
  amount: number;
}

export interface PartyDetailsInput {
  number_of_travellers: number;
  trip_name: string;
  country: string;

  start_date: string; // ISO date
  end_date: string;   // ISO date

  parties: PartyTraveller[];
}

/* =========================
   BOOKING INPUT (FORM MODEL)
========================= */

export interface BookingInputValues {
   user_name: string;
  mobile_number: string;
  email: string;
  adults: number | string;
  amount: number;
  bookingId: string;
}

/* =========================
   BOOKING UI MODEL (TABLE / FRONTEND)
========================= */

export interface BookingIndexAttributes {
  user_name: string;
  mobile_number: string;
  email: string;
  adults: number | string;
  amount: number;
  bookingId: string;
}

/* =========================
   BOOKING API RESPONSE
   (FIXED STRUCTURE)
========================= */

export interface BookingResponse {
  success: boolean;
  message: string;
  status_code: number;

  data: BookingInputValues[];
}