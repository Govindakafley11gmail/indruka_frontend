/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient, UseMutationOptions } from "@tanstack/react-query";
import apiClient from "@/app/connect-backend/api-client";
import { POLICY_API_URL } from "@/app/connect-backend/api";
import { PremiumCollectionDataAttributes, PremiumCollectionDataResponse } from "../interface";

export interface GetPremiumCollectionParams {
  search: string;
  page?: number;
  limit?: number;
}

export const useGetPremiumCollectionByPolicy = ({
  search,
  page = 1,
  limit = 10,
}: GetPremiumCollectionParams) => {
  return useQuery<PremiumCollectionDataResponse>({
    queryKey: ["premium-collection", search, page, limit],
    queryFn: async () => {
      const response = await apiClient.get(POLICY_API_URL.premium_collection, {
        params: {
          search,
          page,
          limit,
        },
      });

      // ✅ Fix: check "status" string instead of "success" boolean
      if (response.data.status !== "success") {
        throw new Error(response.data.message);
      }

      return response.data;
    },
    enabled: !!search,
    staleTime: 5 * 60 * 1000,
  });
};

const createPremiumCollection = async (data: PremiumCollectionDataAttributes) => {
  const response = await apiClient.post(POLICY_API_URL.premium_collection, data);
  return response.data;
};

export const usePremiumCollectionMutations = (
  options?: UseMutationOptions<PremiumCollectionDataResponse, any, PremiumCollectionDataAttributes>
) => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<PremiumCollectionDataResponse, any, PremiumCollectionDataAttributes>({
    mutationFn: createPremiumCollection,
    // ✅ Fix: v5 callbacks only have 3 params (data, variables, context)
 onSuccess: (data, variables, onMutateResult, context) => {
  queryClient.invalidateQueries({ queryKey: ["premium-collection"] });
  options?.onSuccess?.(data, variables, onMutateResult, context);
},
onError: (error, variables, onMutateResult, context) => {
  options?.onError?.(error, variables, onMutateResult, context);
},
  });

  return {
    createCollection: createMutation.mutate,
    createCollectionAsync: createMutation.mutateAsync,
    isCreating: createMutation.isPending,
    isError: createMutation.isError,
    error: createMutation.error,
    createSuccess: createMutation.isSuccess,
    data: createMutation.data,
  };
};