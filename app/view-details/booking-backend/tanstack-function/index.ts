/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/app/connect-backend/api-client";
import TRAVELAGENTSAPI from "@/app/connect-backend/api";
import type { errorResponse } from "@/app/error";
import type { BookingPayload, CallBackPayloadInterface, CreateResponseAttributes } from "../interface";

interface MutationOptions {
  onSuccess?: (data: CreateResponseAttributes) => void;
  onError?: (error: errorResponse) => void;
}

// ============= API CALLS =============

// CreateBooking
const createBookings = async (data: BookingPayload) => {
  const response = await apiClient.post(TRAVELAGENTSAPI.bookingUser, data);

  if (response.data?.success === false) {
    throw { data: response.data };
  }
  return response.data;
};

const createCallBack = async (data: CallBackPayloadInterface) => {
  const response = await apiClient.post(TRAVELAGENTSAPI.callBack, data);

  if (response.data?.success === false) {
    throw { data: response.data };
  }
  return response.data;
};




export const useBookingMutations = (options?: MutationOptions) => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<
    CreateResponseAttributes,
    errorResponse,
    BookingPayload
  >({
    mutationFn: createBookings,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Booking-list"] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });



  return {
    createBooking: createMutation.mutate,
    isCreating: createMutation.isPending,
   
    isLoading:createMutation.isPending 

  };
};
