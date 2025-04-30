import { useQuery } from "@tanstack/react-query"
import { getTagApi } from "../api/tagApi"

export const useGetTagsQuery = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: async () => await getTagApi(),
  })
}
