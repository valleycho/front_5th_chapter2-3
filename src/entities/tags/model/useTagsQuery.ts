import { useQuery } from "@tanstack/react-query"
import { getTagApi } from "../api/tagsApi"

export const useGetTagsQuery = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: async () => await getTagApi(),
  })
}
