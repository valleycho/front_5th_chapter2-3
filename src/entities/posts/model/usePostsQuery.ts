import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addPostApi, deletePostApi, updatePostApi } from "../api/postApi"
import { AddNewPostType, PostResponse, PostType } from "../types/postTypes"
import { useQueryParamsHook } from "../../../shared/lib/useQueryParamsHook"
import { AllUserResponse } from "../../users/types/userTypes"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { postKeys } from "./postKeys"

export const useGetPostsQuery = (allUser?: AllUserResponse) => {
  const { limit, skip, searchQuery, selectedTag } = useQueryParamsHook()

  return useQuery({
    ...postKeys.list({ limit, skip, searchQuery, selectedTag }, allUser),
    enabled: !!allUser,
  })
}

export const useDeletePostMutation = () => {
  const { limit, skip, searchQuery, selectedTag } = useQueryParamsHook()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (postId: number) => await deletePostApi(postId),
    onSuccess: (postResponse: PostType) => {
      queryClient.setQueryData(postKeys.list({ limit, skip, searchQuery, selectedTag }).queryKey, (old: PostResponse) => {
        return {
          ...old,
          posts: old.posts.filter((post) => post.id !== postResponse.id)
        }
      })
    },
  })
}

export const useAddPostMutation = () => {
  const queryClient = useQueryClient()
  const { limit, skip, searchQuery, selectedTag } = useQueryParamsHook()
  const { setShowAddDialog } = useDialogStore()
  
  return useMutation({
    mutationFn: async (newPost: AddNewPostType) => await addPostApi(newPost),
    onSuccess: (postResponse: PostType) => {
      queryClient.setQueryData(postKeys.list({ limit, skip, searchQuery, selectedTag }).queryKey, (old: PostResponse) => {
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
  const { limit, skip, searchQuery, selectedTag } = useQueryParamsHook()
  const { setShowEditDialog } = useDialogStore()

  return useMutation({
    mutationFn: async (selectedPost: PostType) => await updatePostApi(selectedPost.id, selectedPost),
    onSuccess: (postResponse: PostType) => {
      queryClient.setQueryData(postKeys.list({ limit, skip, searchQuery, selectedTag }).queryKey, (old: PostResponse) => {
        return {
          ...old,
          posts: old.posts.map((post) => (post.id === postResponse.id ? postResponse : post))
        }
      })

      setShowEditDialog(false)
    }
  })
}