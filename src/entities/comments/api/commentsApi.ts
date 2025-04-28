import { NewComment } from "../types/commentTypes";


export const getCommentsApi = async (postId: number) => {
  const response = await fetch(`/api/comments/post/${postId}`)
  
  if (!response.ok) {
    console.error("댓글 가져오기 실패:", response.statusText);
  }
  
  return response.json()
}

export const addCommentApi = async (comment: NewComment) => {
  const response = await fetch("/api/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  })

  if (!response.ok) {
    console.error("댓글 추가 오류:", response.statusText);
  }

  return response.json()
}

