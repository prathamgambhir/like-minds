import { client } from "@/lib/app-client";
import { useQuery } from "@tanstack/react-query";

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
  console.log("fetchhhhhh")

  return useQuery({
    queryKey: ["communityGoals"],
    queryFn: async () => {
      const res = await client.api.communities[":communityId"].goals.$get({
        param: {
          communityId: communityId!,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch all communities");
      }

      const data = await res.json();
      return data;
    },
  });
};
