/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/app/connect-backend/api-client";
import TRAVELAGENTSAPI from "@/app/connect-backend/api";
import type { errorResponse } from "@/app/error";
import type { CreateResponseAttributes, CallBackPayloadInterface, BookingPayload } from "../booking-backend/interface";

interface MutationOptions {
  onSuccess?: (data: CreateResponseAttributes) => void;
  onError?: (error: errorResponse) => void;
}



const createCallBack = async (data: CallBackPayloadInterface) => {
  const response = await apiClient.post(TRAVELAGENTSAPI.callBack, data);

  if (response.data?.success === false) {
    throw { data: response.data };
  }
  return response.data;
};




export const useCallBackMutations = (options?: MutationOptions) => {
  const queryClient = useQueryClient();

  const createCallBackMutation = useMutation<
    CreateResponseAttributes,
    errorResponse,
    CallBackPayloadInterface
  >({
    mutationFn: createCallBack,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Booking-list"] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });



  return {
    createCallBack: createCallBackMutation.mutate,
    isCreating: createCallBackMutation.isPending,
   
    isLoading:createCallBackMutation.isPending 

  };
};
