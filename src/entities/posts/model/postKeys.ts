import { AllUserResponse } from "@/entities/users/types/userTypes";
import { getPostByTagFilterApi } from "@/features/posts/api/filterPostApi";
import { searchPostApi } from "@/features/posts/api/searchPostApi";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getPostsApi } from "../api/postApi";

interface PostFiltersType {
   limit: number
   skip: number
   searchQuery: string
   selectedTag: string
}


export const postKeys = createQueryKeys('posts', {
    list: (filters: PostFiltersType, allUser?: AllUserResponse) => ({
        queryKey: [{ ...filters }],
        queryFn: async () => {
            if (filters.searchQuery) {
              const postResposne = await searchPostApi(filters.searchQuery)
              const postWithAuthor = {
                ...postResposne,
                posts: postResposne.posts.map((post) => ({ ...post, author: allUser?.users?.find((user) => user.id === post.userId) }))
              }
      
              return postWithAuthor
            } 
            
            if (filters.selectedTag && filters.selectedTag !== "all") {
              const postResposne = await getPostByTagFilterApi(filters.selectedTag)
              const postWithAuthor = {
                ...postResposne,
                posts: postResposne.posts.map((post) => ({ ...post, author: allUser?.users?.find((user) => user.id === post.userId) }))
              }
      
              return postWithAuthor
            }
      
            
            const postResposne = await getPostsApi(filters.limit, filters.skip)
            const postWithAuthor = {
              ...postResposne,
              posts: postResposne.posts.map((post) => ({ ...post, author: allUser?.users?.find((user) => user.id === post.userId) }))
            }
      
            return postWithAuthor
        },
    }),
})
