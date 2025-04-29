import { AddNewPostType, PostResponse, PostType } from "../types/postsType"


export const getPostsApi = async (limit: number, skip: number): Promise<PostResponse> => {
  const response = await fetch(`/api/posts?limit=${limit}&skip=${skip}`)

  if (!response.ok) {
    console.error("게시물 가져오기 오류:", response.statusText)
  }

  return await response.json()
}

export const deletePostApi = async (postId: number) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    console.error("게시물 삭제 오류:", response.statusText)
    return {
      id: postId 
    }
  }

  return await response.json()
}

export const addPostApi = async (newPost: AddNewPostType) => {
  const response = await fetch("/api/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  })
  
  if (!response.ok) {
    console.error("게시물 추가 오류:", response.statusText)
  }

  return await response.json()
}

export const updatePostApi = async (postId: number, selectedPost: PostType) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(selectedPost),
  })

  if (!response.ok) {
    console.error("게시물 업데이트 오류:", response.statusText)
  }

  return await response.json()
}
