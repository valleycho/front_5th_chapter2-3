import { CommentType, NewComment } from "../types/commentTypes";


export const getCommentsApi = async (postId: number) => {
  const response = await fetch(`/api/comments/post/${postId}`)
  
  if (!response.ok) {
    console.error("댓글 가져오기 실패:", response.statusText);
  }
  
  return await response.json()
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

  return await response.json()
}

export const updateCommentApi = async (commentId: number, body: string) => {
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  })

  if (!response.ok) {
    console.error("댓글 업데이트 오류:", response.statusText)
  }

  return await response.json()
}

export const likeCommentApi = async (comment: CommentType) => {
  const response = await fetch(`/api/comments/${comment.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ likes: comment.likes + 1 }),
  })

  if (!response.ok) {
    console.error("댓글 좋아요 오류:", response.statusText)
  }

  return await response.json()
}
