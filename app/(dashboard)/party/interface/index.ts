// Booking party (traveller)
export interface BookingParty {
  id: string;
  user_name: string;
  mobile_number: string;
  email: string;
  adults: number;
  bookingId: string;
  amount: number;
  booking: {
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
    payment_status: string;
  };
  documents: unknown[];
};
export interface BookingPartyAttributes {
  id: string;
  user_name: string;
  mobile_number: string;
  email: string;
  adults: number;
  amount: number;
}
// Full booking with nested parties
export interface Booking {
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
  status: "PENDING" | "ONGOING" | "CONFIRMED" | "CANCELLED";
  payment_status: "PENDING" | "PARTIAL" | "PAID";
  parties: BookingParty[];
}

// API returns Booking[]
export interface BookingSearchResponse {
  success: boolean;
  message: string;
  status_code: number;
  data: Booking[];
  timestamp: string;
}

// Search payload
export interface BookingSearchDto {
  bookingId?: string;
  user_name?: string;
  registration_number?: string;
  country?: string;
  mobile_number?: string;
  email?: string;
  document_number?: string;
}

// Party/Traveller type
export interface BookingParty {
  id: string;
  user_name: string;
  mobile_number: string;
  email: string;
  adults: number;
}

// Main booking data type
export interface BookingData {
  country: string;
  due_amount: string;
  end_date: string;        // ISO date string "YYYY-MM-DD"
  id: string;
  number_of_travellers: number;
  paid_amount: string;
  parties: BookingParty[];
  payment_status: "PAID" | "UNPAID" | "PARTIAL";
  quotation_number: string;
  start_date: string;      // ISO date string "YYYY-MM-DD"
  status: "CONFIRMED" | "PENDING" | "CANCELLED";
  total_price: string;
  trip_name: string;
}

// Full API response wrapper
export interface SearchBookingResponse {
  data: BookingData;
  message: string;
  status: boolean;
}