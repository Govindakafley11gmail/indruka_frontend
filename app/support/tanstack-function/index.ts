/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/app/connect-backend/api-client";
import TRAVELAGENTSAPI from "@/app/connect-backend/api";
import type { errorResponse } from "@/app/error";
import type { CreateResponseAttributes } from "@/app/view-details/booking-backend/interface";
import type { EnquiryPayloadInterface } from "../interface";


interface MutationOptions {
  onSuccess?: (data: CreateResponseAttributes) => void;
  onError?: (error: errorResponse) => void;
}

// ============= API CALLS =============

// CreateBooking
const createContact = async (data: EnquiryPayloadInterface) => {
  const response = await apiClient.post(TRAVELAGENTSAPI.contact, data);

  if (response.data?.success === false) {
    throw { data: response.data };
  }
  return response.data;
};





export const useContactMutations = (options?: MutationOptions) => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<
    CreateResponseAttributes,
    errorResponse,
    EnquiryPayloadInterface
  >({
    mutationFn: createContact,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["callback-list"] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });



  return {
    createContact: createMutation.mutate,
    isCreating: createMutation.isPending,
   
    isLoading:createMutation.isPending 

  };
};
