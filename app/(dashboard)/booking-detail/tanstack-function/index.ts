/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "@/app/connect-backend/api-client";
import { ACL_API_URL } from "@/app/connect-backend/api";

import { useQuery } from "@tanstack/react-query";
import { BookingResponse } from "../interface";
import { errorResponse } from "@/app/connect-backend/error-interface";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BookingPartyAttributes } from "../../party/interface";

/* ---------------------------------- */
/* TYPES */
/* ---------------------------------- */

export interface BookingFilters {
  search?: string;
  booking_status?: string;
  page?: number;
  limit?: number;
}
export interface UpdateBookingPayload {
  booking_id: string;
  data: {
    user_name?: string;
    mobile_number?: string;
    email?: string;
    adults?: number;
    amount?: number;
  };
}
/* ---------------------------------- */
/* GET BOOKINGS */
/* ---------------------------------- */

export const useGetBookings = (
  party_id: string,
  filters?: BookingFilters,
) => {
  return useQuery<BookingResponse, errorResponse>({
    queryKey: [
      "booking-list",
      party_id,
      filters?.search,
      filters?.booking_status,
      filters?.page,
      filters?.limit,
    ],

    queryFn: () =>
      getBookingsByPartyId(party_id, filters),

    enabled: !!party_id, // 🔥 must depend on party_id
  });
};

/* ---------------------------------- */
/* API CALL */
/* ---------------------------------- */

const getBookingsByPartyId = async (
  party_id: string,
  filters?: BookingFilters,
): Promise<BookingResponse> => {
  const params: Record<string, any> = {
    party_id,
    ...filters,
  };

  const response = await apiClient.get(
    ACL_API_URL.bookings, // 👉 change if your API name differs
    { params },
  );

  if (response.data?.success === false) {
    throw { data: response.data };
  }

  return response.data;
};
const postDocument = async (formData: FormData) => {
  const response = await apiClient.post(
    ACL_API_URL.documents,
    formData,
    // ✅ Remove headers entirely — axios sets multipart + boundary automatically
  );

  if (response.data?.success === false) {
    throw { data: response.data };
  }

  return response.data;
};

export const usePostDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => postDocument(formData),

    onSuccess: () => {
      // 🔥 refresh booking list or document list
      queryClient.invalidateQueries({ queryKey: ["booking-list"] });
    },
  });
};
const getDocuments = async (partyId: string) => {
  const response = await apiClient.get(`${ACL_API_URL.documents}`, {
    params: { party_id: partyId },
  });
  return response.data.data;
};

// Query hook
export const useGetDocuments = (partyId: string) => {
  return useQuery({
    queryKey: ["documents", partyId],
    queryFn: () => getDocuments(partyId),
    enabled: !!partyId, // only runs when partyId exists
  });
};

export const useUpdateRegBooking = () => {
  const queryClient = useQueryClient();

  return useMutation<BookingPartyAttributes, errorResponse, UpdateBookingPayload>({
    mutationFn: updateRegBooking,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["booking-list"] });
    },

    onError: (error) => {
      console.error("Failed to update booking:", error);
    },
  });
};
const updateRegBooking = async ({
  booking_id,
  data,
}: UpdateBookingPayload): Promise<BookingPartyAttributes> => {
  console.log("hgdhgdhs", booking_id, 'value', data)
  const response = await apiClient.patch(
    `${ACL_API_URL.bookings}/${booking_id}`,
    data,
  );

  if (response.data?.success === false) {
    throw { data: response.data };
  }

  return response.data;
};


export const useUpdateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation<BookingPartyAttributes, errorResponse, UpdateBookingPayload>({
    mutationFn: updateBooking,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["booking-list"] });
    },

    onError: (error) => {
      console.error("Failed to update booking:", error);
    },
  });
};

export const useCreateParty = () => {
  const queryClient = useQueryClient();

  return useMutation<BookingPartyAttributes, errorResponse, UpdateBookingPayload>({
    mutationFn: createParty,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["booking-list"] });
    },

    onError: (error) => {
      console.error("Failed to create party:", error);
    },
  });
};
const createParty = async (payload: UpdateBookingPayload) => {
  const response = await apiClient.post(
    `/bookings/${payload.booking_id}/party`,
    payload.data
  );
  return response.data;
};
const updateBooking = async ({
  booking_id,
  data,
}: UpdateBookingPayload): Promise<BookingPartyAttributes> => {
  console.log("hgdhgdhs", booking_id, 'value', data)
  const response = await apiClient.patch(
    `${ACL_API_URL.bookings}/party/${booking_id}`,
    data,
  );

  if (response.data?.success === false) {
    throw { data: response.data };
  }

  return response.data;
};