import { PostResponse } from "../../../entities/posts/types/postsType"

export const searchPostApi = async (searchQuery: string): Promise<PostResponse> => {
  const response = await fetch(`/api/posts/search?q=${searchQuery}`)

  if (!response.ok) {
    console.error("게시물 검색 오류:", response.statusText)
  }

  return await response.json()
}