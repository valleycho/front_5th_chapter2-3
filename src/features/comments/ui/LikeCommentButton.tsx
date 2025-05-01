import { ThumbsUp } from "lucide-react"
import Button from "../../../shared/ui/button"
import { CommentType } from "../../../entities/comments/types/commentTypes"
import { useLikeCommentMutation } from "../../../entities/comments/model/useCommentsQuery"

interface LikeCommentProps {
  comment: CommentType
}

const LikeCommentButton = ({ comment }: LikeCommentProps) => {
  const { mutate: likeComment } = useLikeCommentMutation()

  return (
    <Button variant="ghost" size="sm" onClick={() => likeComment(comment)}>
      <ThumbsUp className="w-3 h-3" />
      <span className="ml-1 text-xs">{comment.likes}</span>
    </Button>
  )
}

export default LikeCommentButton
