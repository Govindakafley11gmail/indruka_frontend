/* eslint-disable @typescript-eslint/no-explicit-any */


import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  PermissionGetResponseAttributes,
  PermissionInputFormValues,
} from "../interface";
import apiClient from "@/app/connect-backend/api-client";
import { ACL_API_URL } from "@/app/connect-backend/api";
import { errorResponse } from "@/app/connect-backend/error-interface";
import { CreateResponseAttributes } from "@/app/connect-backend/error-interface/successresponse";

interface MutationOptions {
  onSuccess?: (data: CreateResponseAttributes) => void;
  onError?: (error: errorResponse) => void;
}

// ============= API CALLS =============

// Create Permission
const createPermission = async (data: PermissionInputFormValues) => {
  const response = await apiClient.post(`${ACL_API_URL.Permission}`, data);

  if (response.data?.success === false) {
    throw { data: response.data };
  }
  return response.data;
};

// Update Permission
const updatePermission = async ({
  id,
  data,
}: {
  id: number | string;
  data: PermissionInputFormValues;
}) => {
  const response = await apiClient.patch(`${ACL_API_URL.Permission}/${id}`, data);

  if (response.data?.success === false) {
    throw { data: response.data };
  }
  return response.data;
};

// Delete Permission
const deletePermission = async (id: number | string) => {
  const response = await apiClient.delete(`${ACL_API_URL.Permission}/${id}`);

  if (response.data?.success === false) {
    throw { data: response.data };
  }
  return response.data;
};

// Get Permissions List

// ============= HOOKS =============

// Hook for all Permission mutations
export const usePermissionMutations = (options?: MutationOptions) => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<
    CreateResponseAttributes,
    errorResponse,
    PermissionInputFormValues
  >({
    mutationFn: createPermission,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["permission-list"] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });

  const updateMutation = useMutation<
    CreateResponseAttributes,
    errorResponse,
    { id: number | string; data: PermissionInputFormValues }
  >({
    mutationFn: updatePermission,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["permission-list"] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });

  const deleteMutation = useMutation<
    CreateResponseAttributes,
    errorResponse,
    number | string
  >({
    mutationFn: deletePermission,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["permission-list"] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });

  return {
    createPermission: createMutation.mutate,
    isCreating: createMutation.isPending,
    updatePermission: updateMutation.mutate,
    isUpdating: updateMutation.isPending,
    deletePermission: deleteMutation.mutate,
    isDeleting: deleteMutation.isPending,
    isLoading:
      createMutation.isPending ||
      updateMutation.isPending ||
      deleteMutation.isPending,
  };
};
export const useGetPermissions = (page: number = 1, limit: number = 10) => {
  return useQuery<PermissionGetResponseAttributes, errorResponse>({
    queryKey: ["permission-list", page, limit],
    queryFn: () => getPermissions(page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
    // keepPreviousData: true,    // ✅ keep old data while fetching new page
  });
};

const getPermissions = async (page: number, limit: number): Promise<PermissionGetResponseAttributes> => {
  const response = await apiClient.get(
    `${ACL_API_URL.Permission}?page=${page}&limit=${limit}`
  );

  if (response.data?.success === false) {
    throw { data: response.data };
  }

  return response.data;
};
