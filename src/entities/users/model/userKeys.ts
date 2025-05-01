import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getAllUserApi, getUserByIdApi } from "../api/userApi";


export const userKeys = createQueryKeys('users', {
    allUser: () => ({
        queryKey: ['allUser'],
        queryFn: async () => await getAllUserApi(),
    }),
    userById: (userId: number) => ({
        queryKey: [userId],
        queryFn: async () => await getUserByIdApi(userId),
    }),
})