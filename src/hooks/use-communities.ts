import { client } from "@/lib/app-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCommunities = () => {
  return useQuery({
    queryKey: ["communities"],
    queryFn: async () => {
      const res = await client.api.communities.$get();
      if (!res.ok) {
        throw new Error("Failed to fetch communities");
      }

      const data = await res.json();
      return data;
    },
  });
};

export const useAllCommunities = () => {
  return useQuery({
    queryKey: ["allCommunities"],
    queryFn: async () => {
      const res = await client.api.communities.all.$get();

      if (!res.ok) {
        throw new Error("Failed to fetch all communities");
      }

      const data = await res.json();
      return data;
    },
  });
};

export const useCommunityGoals = (communityId: string | null) => {
  return useQuery({
    queryKey: ["communityGoals", communityId],
    enabled: !!communityId,
    queryFn: async () => {
      const res = await client.api.communities[":communityId"].goals.$get({
        param: {
          communityId: communityId!,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch community goals");
      }

      const data = await res.json();
      return data;
    },
  });
};


export const useJoinCommunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (communityId: string) => {
      const res = await client.api.communities[":communityId"].join.$post({
        param: {
          communityId: communityId
        }
      })

      if(!res.ok){
        throw new Error("Failed to join community");
      }

      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["communities"]})
    },
    onError: (error) => {
      console.error("Error joining community", error);
    }
  })
}