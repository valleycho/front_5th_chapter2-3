import { useQuery } from "@tanstack/react-query"
import { getAllUserApi, getUserByIdApi } from "../api/userApi"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { useUserStore } from "./useUserStore"

export const useGetAllUsersQuery = () => {
  return useQuery({
    queryKey: ["allUser"],
    queryFn: async () => await getAllUserApi(),
  })
}


export const useGetUserByIdQuery = (userId?: number) => {
  const { setShowUserInfoDialog } = useDialogStore()
  const { setSelectedUser } = useUserStore()

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
