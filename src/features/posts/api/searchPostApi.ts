import { PostResponse } from "../../../entities/posts/types/postTypes"
import { getMswUrl } from "@/shared/lib/mswUrl"

export const searchPostApi = async (searchQuery: string): Promise<PostResponse> => {
  const response = await fetch(`${getMswUrl}/posts/search?q=${searchQuery}`)

  if (!response.ok) {
    console.error("게시물 검색 오류:", response.statusText)
  }

  return await response.json()
}