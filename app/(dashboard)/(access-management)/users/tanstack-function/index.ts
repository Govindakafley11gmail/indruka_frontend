/* eslint-disable @typescript-eslint/no-explicit-any */


import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/app/connect-backend/api-client";
import { UserGetResponse, UserInputFormValues, UserRolePermissionByIdGetResponse } from "../interface";
import { MutationOptions } from "../../roles/tanstack-function";
import { errorResponse } from "@/app/connect-backend/error-interface";
import { CreateResponseAttributes } from "@/app/connect-backend/error-interface/successresponse";
import ACL_API_URL from "@/app/connect-backend/api/acl-route";

// Update User
const updateUser = async ({
  id,
  data,
}: {
  id: number | string;
  data: UserInputFormValues;
}) => {
  const response = await apiClient.put(`${ACL_API_URL.User}/${id}/update-user`, data);

  if (response.data?.success === false) {
    throw { data: response.data };
  }
  return response.data;
};
// Hook for all User mutations
export const useUserMutations = (options?: MutationOptions) => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation<
    CreateResponseAttributes,
    errorResponse,
    { id: number | string; data: UserInputFormValues }
  >({
    mutationFn: updateUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["User-list"], exact: false });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });

  return {
    updateUser: updateMutation.mutate,
    isUpdating: updateMutation.isPending,

    isLoading: updateMutation.isPending,
  };
};
export const useGetUsers = (page: number = 1, limit: number = 10) => {
  return useQuery<UserGetResponse, errorResponse>({
    queryKey: ["User-list", page, limit],
    queryFn: () => getUsers(page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
    // keepPreviousData: true,    // ✅ keep old data while fetching new page
  });
};

const getUsers = async (
  page: number,
  limit: number,
): Promise<UserGetResponse> => {
  const response = await apiClient.get(
    `${ACL_API_URL.User}?page=${page}&limit=${limit}`,
  );

  if (response.data?.success === false) {
    throw { data: response.data };
  }

  return response.data;
};
export const useGetUserRolePermissionById = (id: string) => {
  return useQuery<UserRolePermissionByIdGetResponse, errorResponse>({
    queryKey: ["User-list", id],
    queryFn: () => getUserRolePermissionById(id),
    enabled: !!id, // ✅ only fetch when id exists

    staleTime: 5 * 60 * 1000, // 5 minutes
    // keepPreviousData: true,    // ✅ keep old data while fetching new page
  });
};

const getUserRolePermissionById = async (
  id: string,
): Promise<UserRolePermissionByIdGetResponse> => {
  const response = await apiClient.get(`${ACL_API_URL.User}/${id}/details`);

  if (response.data?.success === false) {
    throw { data: response.data };
  }

  return response.data;
};
