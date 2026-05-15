import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ACL_API_URL } from "@/app/connect-backend/api";
import apiClient from "@/app/connect-backend/api-client";
import {
  SignInAttributes,
  SignUpResponseAttributes,
} from "../interface/interface";
import { errorResponse } from "@/app/connect-backend/error-interface";

export interface MutationOptions<TData = unknown, TError = unknown> {
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
}

// API call
const loginUser = async (
  data: SignInAttributes,
): Promise<SignUpResponseAttributes> => {
  const response = await apiClient.post(ACL_API_URL.Login, data);

  if (response.data?.success === false) {
    throw response.data as errorResponse;
  }
  return response.data;
};

// Hook
export const useLoginMutation = (
  options?: MutationOptions<SignUpResponseAttributes, errorResponse>,
) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    SignUpResponseAttributes,
    errorResponse,
    SignInAttributes
  >({
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Login-User"] }); // if needed
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
