import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "@/shared/lib/tanstackQueryKeys"

export const useGetTagsQuery = () => {
  return useQuery(queryKeys.tags.list())
}
