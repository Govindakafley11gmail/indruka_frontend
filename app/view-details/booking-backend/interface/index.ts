export interface Party {
  user_name: string;
  mobile_number: string;
  email: string;
  amount: number;
  adults: number;
}

export interface BookingPayload {
  number_of_travellers: number;
  trip_name: string;
  country: string;
  start_date: string; // ISO date string "YYYY-MM-DD"
  end_date: string;   // ISO date string "YYYY-MM-DD"
  parties: Party[];
}

export interface CallBackPayloadInterface{
    name:string;
    contact:string
}
//response
export interface PartyResponse {
  id: string;
  user_name: string;
  mobile_number: string;
  email: string;
  adults: number;
  bookingId: string;
  amount: number;
}

export interface BookingResponse {
  id: string;
  number_of_travellers: number;
  trip_name: string;
  country: string;
  start_date: string;        // "YYYY-MM-DD"
  end_date: string;          // "YYYY-MM-DD"
  total_price: number | null;
  paid_amount: string;
  due_amount: string;
  quotation_number: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
  payment_status: "PENDING" | "PAID" | "PARTIAL";
  parties: PartyResponse[];
}

export interface BookingApiResponse {
  status: boolean;
  message: string;
  data: BookingResponse;
}

export interface CreateResponseAttributes {
    success: boolean;
    message: string;
    status_code: number;
}