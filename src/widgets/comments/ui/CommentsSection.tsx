import { useSearchParams } from "react-router-dom"
import { useGetCommentsQuery } from "../../../entities/comments/model/useCommentsQuery"
import { CommentType } from "../../../entities/comments/types/commentTypes"
import { usePostStore } from "../../../entities/posts/model/usePostStore"
import AddCommentDialogButton from "../../../features/comments/ui/AddCommentDialogButton"
import DeleteComment from "../../../features/comments/ui/DeleteComment"
import EditCommentDialogButton from "../../../features/comments/ui/EditCommentDialogButton"
import LikeComment from "../../../features/comments/ui/LikeComment"
import HighlightText from "../../../shared/ui/highlight/HighLightText"

const CommentsSection = () => {
  const { selectedPost } = usePostStore()
  const [searchParams] = useSearchParams()

  const { data: commentData } = useGetCommentsQuery(selectedPost!.id)

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">댓글</h3>
        <AddCommentDialogButton />
      </div>
      <div className="space-y-1">
        {commentData?.comments?.map((comment: CommentType, idx: number) => (
          <div key={idx} className="flex items-center justify-between text-sm border-b pb-1">
            <div className="flex items-center space-x-2 overflow-hidden">
              <span className="font-medium truncate">{comment?.user?.username}:</span>
              <span className="truncate">
                <HighlightText text={comment.body} highlight={searchParams.get("search") || ""} />
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <LikeComment comment={comment} />
              <EditCommentDialogButton comment={comment} />
              <DeleteComment comment={comment} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsSection
