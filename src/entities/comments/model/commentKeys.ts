import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getCommentsApi } from "../api/commentApi";

export const commentKeys = createQueryKeys('comments', {
    list: (postId: number) => ({
        queryKey: [postId],
        queryFn: async () => await getCommentsApi(postId),
    }),
})