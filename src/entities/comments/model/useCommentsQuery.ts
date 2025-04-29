import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addCommentApi, deleteCommentApi, getCommentsApi, likeCommentApi, updateCommentApi } from "../api/commentsApi"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { CommentResponse, CommentType, NewComment } from "../types/commentTypes"
import { usePostsStore } from "../../posts/model/usePostsStore"
import { useAddNewCommentStore } from "../../../features/comments/model/useAddNewCommentStore"
import { AllUserResponse } from "../../users/types/userTypes"

export const useGetCommentsQuery = (postId: number) => {
    return useQuery({
        queryKey: ["comments", postId],
        queryFn: async () => await getCommentsApi(postId),
    })
}

export const useAddCommentMutation = () => {
    const queryClient = useQueryClient()
    const { setShowAddCommentDialog } = useDialogStore()
    const { selectedPost } = usePostsStore()
    const { newComment } = useAddNewCommentStore()

    return useMutation({
        mutationFn: async (comment: NewComment) => await addCommentApi(comment),
        onSuccess: () => {
            const allUser = queryClient.getQueryData<AllUserResponse>(["allUser"])

            queryClient.setQueryData(["comments", selectedPost.id], (oldData: CommentResponse) => {
                return {
                    ...oldData,
                    comments: [...oldData.comments, {
                        ...newComment,
                        user: allUser?.users[0]
                    }],
                }
            })

            setShowAddCommentDialog(false)
        },
    })
}

export const useUpdateCommentMutation = () => {
    const queryClient = useQueryClient()
    const { selectedPost } = usePostsStore()
    const { setShowEditCommentDialog } = useDialogStore()

    return useMutation({
        mutationFn: async (selectedComment: CommentType) => {
            return await updateCommentApi(selectedComment.id, selectedComment.body)
        },
        onSuccess: (updateComment: CommentType) => {
            queryClient.setQueryData(["comments", selectedPost.id], (oldData: CommentResponse) => {
                return {
                    ...oldData,
                    comments: oldData.comments.map((comment) => comment.id === updateComment.id ? updateComment : comment),
                }
            })

            setShowEditCommentDialog(false)
        },
    })
}

export const useLikeCommentMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (comment: CommentType) => await likeCommentApi(comment),
        onSuccess: (likeComment: CommentType) => {
            queryClient.setQueryData(["comments", likeComment.postId], (oldData: CommentResponse) => {
                return {
                    ...oldData,
                    comments: oldData.comments.map((comment) => comment.id === likeComment.id ? {
                        ...likeComment,
                        likes: likeComment.likes + 1
                    } : comment),
                }
            })
        },
    })
}

export const useDeleteCommentMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (comment: CommentType) => await deleteCommentApi(comment),
        onSuccess: (deleteComment: CommentType) => {
            queryClient.setQueryData(["comments", deleteComment.postId], (oldData: CommentResponse) => {
                return {
                    ...oldData,
                    comments: oldData.comments.filter((comment) => comment.id !== deleteComment.id),
                }
            })
        },
    })
}