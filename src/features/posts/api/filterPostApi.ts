import { PostResponse } from "../../../entities/posts/types/postTypes"
import { getMswUrl } from "@/shared/lib/mswUrl"

export const getPostByTagFilterApi = async (tag: string): Promise<PostResponse> => {
  const response = await fetch(`${getMswUrl}/posts/tag/${tag}`)

  if (!response.ok) {
    console.error("게시물 태그 필터 오류:", response.statusText)
  }

  return await response.json()
}


