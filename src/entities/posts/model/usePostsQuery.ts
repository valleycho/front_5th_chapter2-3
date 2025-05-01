import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addPostApi, deletePostApi, updatePostApi } from "../api/postApi"
import { AddNewPostType, PostResponse, PostType } from "../types/postTypes"
import { AllUserResponse } from "../../users/types/userTypes"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { postKeys } from "./postKeys"
import { useSearchParams } from "react-router-dom"

export const useGetPostsQuery = (allUser?: AllUserResponse) => {
  const [searchParams] = useSearchParams()

  return useQuery({
    ...postKeys.list({ limit: searchParams.get("limit") || "10", skip: searchParams.get("skip") || "0", searchQuery: searchParams.get("search") || "", selectedTag: searchParams.get("tag") || "" }, allUser),
    enabled: !!allUser,
  })
}

export const useDeletePostMutation = () => {
  const [searchParams] = useSearchParams()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (postId: number) => await deletePostApi(postId),
    onSuccess: (postResponse: PostType) => {
      queryClient.setQueryData(postKeys.list({ limit: searchParams.get("limit") || "10", skip: searchParams.get("skip") || "0", searchQuery: searchParams.get("search") || "", selectedTag: searchParams.get("tag") || "" }).queryKey, (old: PostResponse) => {
        return {
          ...old,
          posts: old.posts.filter((post) => post.id !== postResponse.id)
        }
      })
    },
  })
}

export const useAddPostMutation = () => {
  const [searchParams] = useSearchParams()
  const queryClient = useQueryClient()
  const { setShowAddDialog } = useDialogStore()
  
  return useMutation({
    mutationFn: async (newPost: AddNewPostType) => await addPostApi(newPost),
    onSuccess: (postResponse: PostType) => {
      queryClient.setQueryData(postKeys.list({ limit: searchParams.get("limit") || "10", skip: searchParams.get("skip") || "0", searchQuery: searchParams.get("search") || "", selectedTag: searchParams.get("tag") || "" }).queryKey, (old: PostResponse) => {
        return {
          ...old,
          posts: [postResponse, ...old.posts]
        } 
      })

      setShowAddDialog(false)
    }
  })
}

export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()
  const { setShowEditDialog } = useDialogStore()

  return useMutation({  
    mutationFn: async (selectedPost: PostType) => await updatePostApi(selectedPost.id, selectedPost),
    onSuccess: (postResponse: PostType) => {
      queryClient.setQueryData(postKeys.list({ limit: searchParams.get("limit") || "10", skip: searchParams.get("skip") || "0", searchQuery: searchParams.get("search") || "", selectedTag: searchParams.get("tag") || "" }).queryKey, (old: PostResponse) => {
        return {
          ...old,
          posts: old.posts.map((post) => (post.id === postResponse.id ? postResponse : post))
        }
      })

      setShowEditDialog(false)
    }
  })
}