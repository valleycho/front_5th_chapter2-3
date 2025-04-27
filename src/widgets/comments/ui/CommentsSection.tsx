import AddCommentDialogButton from "../../../features/comments/ui/AddCommentDialogButton"
import DeleteComment from "../../../features/comments/ui/DeleteComment"
import EditCommentDialogButton from "../../../features/comments/ui/EditCommentDialogButton"
import LikeComment from "../../../features/comments/ui/LikeComment"
import HighlightText from "../../../shared/ui/highlight/HighLightText"

interface CommentsSectionProps {
  comments: unknown[]
  postId: number
  searchQuery: string
  setComments: (comments: any) => void
  setNewComment: (comment: any) => void
  setShowAddCommentDialog: (show: boolean) => void
  setSelectedComment: (comment: any) => void
  setShowEditCommentDialog: (show: boolean) => void
}

const CommentsSection = ({
  comments,
  postId,
  searchQuery,
  setComments,
  setNewComment,
  setShowAddCommentDialog,
  setSelectedComment,
  setShowEditCommentDialog,
}: CommentsSectionProps) => {
  // 댓글 삭제
  const deleteComment = async (id, postId) => {
    try {
      await fetch(`/api/comments/${id}`, {
        method: "DELETE",
      })
      setComments((prev) => ({
        ...prev,
        [postId]: prev[postId].filter((comment) => comment.id !== id),
      }))
    } catch (error) {
      console.error("댓글 삭제 오류:", error)
    }
  }

  // 댓글 좋아요
  const likeComment = async (id, postId) => {
    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes: comments[postId].find((c) => c.id === id).likes + 1 }),
      })
      const data = await response.json()
      setComments((prev) => ({
        ...prev,
        [postId]: prev[postId].map((comment) =>
          comment.id === data.id ? { ...data, likes: comment.likes + 1 } : comment,
        ),
      }))
    } catch (error) {
      console.error("댓글 좋아요 오류:", error)
    }
  }

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">댓글</h3>
        <AddCommentDialogButton
          postId={postId}
          setNewComment={setNewComment}
          setShowAddCommentDialog={setShowAddCommentDialog}
        />
      </div>
      <div className="space-y-1">
        {comments[postId]?.map((comment) => (
          <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
            <div className="flex items-center space-x-2 overflow-hidden">
              <span className="font-medium truncate">{comment.user.username}:</span>
              <span className="truncate">
                <HighlightText text={comment.body} highlight={searchQuery} />
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <LikeComment comment={comment} postId={postId} likeComment={likeComment} />
              <EditCommentDialogButton
                comment={comment}
                setSelectedComment={setSelectedComment}
                setShowEditCommentDialog={setShowEditCommentDialog}
              />
              <DeleteComment commentId={comment.id} postId={postId} deleteComment={deleteComment} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsSection
