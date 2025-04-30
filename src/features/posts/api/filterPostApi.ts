import { PostResponse } from "../../../entities/posts/types/postsType"

export const getPostByTagFilterApi = async (tag: string): Promise<PostResponse> => {
  const response = await fetch(`/api/posts/tag/${tag}`)

  if (!response.ok) {
    console.error("게시물 태그 필터 오류:", response.statusText)
  }

  return await response.json()
}


