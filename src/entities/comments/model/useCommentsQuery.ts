import {  useQuery } from "@tanstack/react-query"
import { getCommentsApi } from "../api/commentsApi"

export const useGetCommentsQuery = (postId: number) => {
    return useQuery({
        queryKey: ["comments", postId],
        queryFn: () => getCommentsApi(postId),
    })
}

