import { useQuery } from "@tanstack/react-query"
import { getUserByIdApi } from "../api/usersApi"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { useUsers } from "./useUsers"


export const useGetUserByIdQuery = (userId?: number) => {
  const { setShowUserInfoDialog } = useDialogStore()
  const { setSelectedUser } = useUsers()

  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => {
        const user = getUserByIdApi(userId!)

        setSelectedUser(user)
        setShowUserInfoDialog(true)
    },
    enabled: false,
  })
}
