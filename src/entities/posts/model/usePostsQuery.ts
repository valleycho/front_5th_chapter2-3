import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addPostApi, deletePostApi, getPostsApi, updatePostApi } from "../api/postsApi"
import { AddNewPostType, PostResponse, PostType } from "../types/postsType"
import { useQueryParamsHook } from "../../../shared/lib/useQueryParamsHook"
import { AllUserResponse } from "../../users/types/userTypes"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { searchPostApi } from "../../../features/posts/api/searchPostApi"
import { getPostByTagFilterApi } from "../../../features/posts/api/filterPostApi"

export const useGetPostsQuery = (allUser?: AllUserResponse) => {
  
  const { limit, skip, searchQuery, selectedTag } = useQueryParamsHook()
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ["posts", { limit, skip, searchQuery, selectedTag }],
    queryFn: async () => {
      const allUserResponse = await queryClient.getQueryData<AllUserResponse>(["allUser"])


      if (searchQuery) {
        const postResposne = await searchPostApi(searchQuery)
        const postWithAuthor = {
          ...postResposne,
          posts: postResposne.posts.map((post) => ({ ...post, author: allUserResponse?.users?.find((user) => user.id === post.userId) }))
        }

        return postWithAuthor
      } 
      
      if (selectedTag) {
        const postResposne = await getPostByTagFilterApi(selectedTag)
        const postWithAuthor = {
          ...postResposne,
          posts: postResposne.posts.map((post) => ({ ...post, author: allUserResponse?.users?.find((user) => user.id === post.userId) }))
        }

        return postWithAuthor
      }

      
      const postResposne = await getPostsApi(limit, skip)
      const postWithAuthor = {
        ...postResposne,
        posts: postResposne.posts.map((post) => ({ ...post, author: allUserResponse?.users?.find((user) => user.id === post.userId) }))
      }

      return postWithAuthor
    },
    enabled: !!allUser,
  })
}

export const useDeletePostMutation = () => {
  const { limit, skip, searchQuery, selectedTag } = useQueryParamsHook()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (postId: number) => await deletePostApi(postId),
    onSuccess: (postResponse: PostType) => {
      queryClient.setQueryData(["posts", { limit, skip, searchQuery, selectedTag }], (old: PostResponse) => {
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
      queryClient.setQueryData(["posts", { limit, skip, searchQuery, selectedTag }], (old: PostResponse) => {
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
      queryClient.setQueryData(["posts", { limit, skip, searchQuery, selectedTag }], (old: PostResponse) => {
        return {
          ...old,
          posts: old.posts.map((post) => (post.id === postResponse.id ? postResponse : post))
        }
      })

      setShowEditDialog(false)
    }
  })
}