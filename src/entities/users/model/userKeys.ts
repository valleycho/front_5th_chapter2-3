import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getAllUserApi, getUserByIdApi } from "../api/userApi";
import { useDialogStore } from "@/shared/model/useDialogStore";
import { useUserStore } from "./useUserStore";


export const userKeys = createQueryKeys('users', {
    allUser: () => ({
        queryKey: ['allUser'],
        queryFn: async () => await getAllUserApi(),
    }),
    userById: (userId: number) => ({
        queryKey: [userId],
        queryFn: async () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { setShowUserInfoDialog } = useDialogStore()
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { setSelectedUser } = useUserStore()

            const user = await getUserByIdApi(userId)

            setSelectedUser(user)
            setShowUserInfoDialog(true)

            return user;
        },
    }),
})