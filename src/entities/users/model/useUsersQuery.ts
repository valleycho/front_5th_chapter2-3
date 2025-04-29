import { useQuery } from "@tanstack/react-query"
import { getAllUserApi, getUserByIdApi } from "../api/usersApi"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { useUsers } from "./useUsers"

export const useGetAllUsersQuery = () => {
  return useQuery({
    queryKey: ["allUser"],
    queryFn: async () => await getAllUserApi(),
  })
}


export const useGetUserByIdQuery = (userId?: number) => {
  const { setShowUserInfoDialog } = useDialogStore()
  const { setSelectedUser } = useUsers()

  return useQuery({
    queryKey: ["users", userId],
    queryFn: async () => {
        const user = await getUserByIdApi(userId!)

        setSelectedUser(user)
        setShowUserInfoDialog(true)

        return user;
    },
    enabled: false,
  })
}
