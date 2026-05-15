import apiClient from "@/app/connect-backend/api-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { errorResponse } from "@/app/connect-backend/error-interface";
import { BookingSearchResponse, SearchBookingResponse } from "../interface";
import ACL_API_URL, { API_EndPoints } from "@/app/connect-backend/api/acl-route";

export interface BookingSearchDto {
  bookingId?: string;
  name?: string;
  registration_number?: string;
  country?: string;
  mobile_number?: string;
  email?: string;
  document_number?: string;
}
export interface PendingBooking {

    id: string;
    trip_name: string;
    start_date: string;
    number_of_travellers: string;
    country: string
    end_date: string;
    status: string;
    quotation_number: string;
    payment_status: string
    paid_amount: number;
    due_amount: number;
    total_price: string;
}

interface PendingBookingsResponse {
  status: string;
  message: string;
  data: PendingBooking[];
}

export interface MutationOptions<TData = unknown, TError = unknown> {
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
}
export const useGetPendingBookings = (status: string) => {
  return useQuery<PendingBookingsResponse>({
    queryKey: ["pending-bookings", status],
    queryFn: async () => {
      const response = await apiClient.get(`/bookings/status/${status}`); // ✅ path param

      if (response.data.status !== true) {
        throw new Error(response.data.message);
      }

      return response.data;
    },
    enabled: !!status, // ✅ only fetch when status is provided
    staleTime: 5 * 60 * 1000,
  });
};

const searchBooking = async (filters: BookingSearchDto) => {
  try {
    const params = new URLSearchParams();

    if (filters.bookingId) params.append("bookingId", filters.bookingId);
    if (filters.name) params.append("name", filters.name);
    if (filters.registration_number) params.append("registration_number", filters.registration_number);
    if (filters.country) params.append("country", filters.country);
    if (filters.mobile_number) params.append("mobile_number", filters.mobile_number);
    if (filters.email) params.append("email", filters.email);
    if (filters.document_number) params.append("document_number", filters.document_number);

    const response = await apiClient.get(`/bookings?${params.toString()}`);

    if (response.data?.success === false) {
      throw { data: response.data };
    }

    return response.data 
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw { data: error.response.data };
    }
    throw error;
  }
};



const searchBookingBYID = async (bookingId: string): Promise<SearchBookingResponse> => {
  try {
    const response = await apiClient.get<SearchBookingResponse>(
      `${ACL_API_URL.bookings}/${bookingId}/booking`
    );

    if (response.data?.status === false) {
      throw { data: response.data };
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw { data: error.response.data };
    }
    throw error;
  }
};

export const useSearchBookingQuery = (bookingId?: string) => {
  return useQuery<SearchBookingResponse>({
    queryKey: ["booking", bookingId],
    queryFn: () => searchBookingBYID(bookingId ?? ""),
    enabled: !!bookingId,
  });
};

export const useSearchPartyMutations = (
  options?: MutationOptions<BookingSearchResponse, errorResponse>
) => {
  const queryClient = useQueryClient();

  const bookingMutation = useMutation<BookingSearchResponse, errorResponse, BookingSearchDto>({
    mutationFn: searchBooking,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["booking-list"] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });


  return {
    searchBooking: bookingMutation.mutateAsync,

    bookingData: bookingMutation.data,
    isBookingLoading: bookingMutation.isPending,
    isError: bookingMutation.isError,
    error: bookingMutation.error,
  };
};