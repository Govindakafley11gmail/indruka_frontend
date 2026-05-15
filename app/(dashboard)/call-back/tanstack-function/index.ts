import apiClient from "@/app/connect-backend/api-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { errorResponse } from "@/app/connect-backend/error-interface";
import { CallBackListResponse, CallBackResponse } from "../interface";

// ─── API Functions ─────────────────────────────────────────────

const getAllCallBacks = async (): Promise<CallBackListResponse> => {
  try {
    const response = await apiClient.get<CallBackListResponse>("/call-back");

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

const getCallBackById = async (id: number): Promise<CallBackResponse> => {
  try {
    const response = await apiClient.get<CallBackResponse>(`/call-back/${id}`);

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

const updateCallBack = async ({
  id,
  name,
  contact,
  status
}: {
  id: number;
  name: string;
  contact: string;
  status: string
}): Promise<CallBackResponse> => {
  try {
    const response = await apiClient.patch<CallBackResponse>(`/call-back/${id}`, {
      name,
      contact,
      status
    });

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

// ─── Hooks ─────────────────────────────────────────────────────

export interface MutationOptions<TData = unknown, TError = unknown> {
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
}

// GET ALL — useQuery (auto fetch)
export const useGetAllCallBacks = () => {
  return useQuery<CallBackListResponse>({
    queryKey: ["callBacks"],
    queryFn: getAllCallBacks,
    staleTime: 5 * 60 * 1000,
  });
};

// GET BY ID — useQuery
export const useGetCallBackById = (id?: number) => {
  return useQuery<CallBackResponse>({
    queryKey: ["callBack", id],
    queryFn: () => getCallBackById(id!),
    enabled: !!id,
  });
};

// UPDATE — useMutation
export const useUpdateCallBackMutation = (
  options?: MutationOptions<CallBackResponse, errorResponse>
) => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: updateCallBack,
    onSuccess: (data: CallBackResponse) => {
      queryClient.invalidateQueries({ queryKey: ["callBacks"] });
      options?.onSuccess?.(data);
    },
    onError: (error: errorResponse) => {
      options?.onError?.(error);
    },
  });

  return {
    updateCallBack: updateMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
    isUpdateError: updateMutation.isError,
    updateError: updateMutation.error,
  };
};