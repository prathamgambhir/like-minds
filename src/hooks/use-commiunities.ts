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

      return res.json();
    },
  });
};

export const useAllCommunities = () => {
  return (
    useQuery({
      queryKey: ["allCommunities"],
      queryFn: async () => {
        const res = await client.api.communities.all.$get();
        
        if(!res.ok){
          throw new Error("Failed to fetch all communities")
        }
        return res.json();
      }
    })
  )
}
