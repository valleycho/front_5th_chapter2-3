import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "@/shared/lib/tanstackQueryKeys"

export const useGetAllUsersQuery = () => {
  return useQuery(queryKeys.users.allUser())
}

export const useGetUserByIdQuery = (userId?: number) => {
  return useQuery({
    ...queryKeys.users.userById(userId!),
    enabled: !!userId,
  })
}
