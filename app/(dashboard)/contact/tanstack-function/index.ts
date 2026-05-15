import apiClient from "@/app/connect-backend/api-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { errorResponse } from "@/app/connect-backend/error-interface";
import { ContactListResponse, ContactResponse } from "../interface";

// ─── API Functions ─────────────────────────────────────────────

const getAllContacts = async (): Promise<ContactListResponse> => {
  try {
    const response = await apiClient.get<ContactListResponse>("/contact");

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

const getContactById = async (id: number): Promise<ContactResponse> => {
  try {
    const response = await apiClient.get<ContactResponse>(`/contact/${id}`);

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

const updateContactStatus = async ({
  id,
  status,
}: {
  id: number;
  status: "active" | "closed";
}): Promise<ContactResponse> => {
  try {
    const response = await apiClient.patch<ContactResponse>(`/contact/${id}`, {
      status,
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
export const useGetAllContacts = () => {
  return useQuery<ContactListResponse>({
    queryKey: ["contacts"],
    queryFn: getAllContacts,
    staleTime: 5 * 60 * 1000,
  });
};

// GET BY ID — useQuery
export const useGetContactById = (id?: number) => {
  return useQuery<ContactResponse>({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id!),
    enabled: !!id,
  });
};

// UPDATE STATUS — useMutation
// UPDATE STATUS — useMutation
export const useUpdateContactStatusMutation = (
  options?: MutationOptions<ContactResponse, errorResponse>
) => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: updateContactStatus,
    onSuccess: (data: ContactResponse) => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      options?.onSuccess?.(data);
    },
    onError: (error: errorResponse) => {
      options?.onError?.(error);
    },
  });

  return {
    updateContactStatus: updateMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
    isUpdateError: updateMutation.isError,
    updateError: updateMutation.error,
  };
};