import { ThumbsUp } from "lucide-react"
import Button from "../../../shared/ui/button"

interface LikeCommentProps {
  comment: any
  postId: number
  likeComment: (commentId: number, postId: number) => void
}

const LikeComment = ({ comment, postId, likeComment }: LikeCommentProps) => {
  return (
    <Button variant="ghost" size="sm" onClick={() => likeComment(comment.id, postId)}>
      <ThumbsUp className="w-3 h-3" />
      <span className="ml-1 text-xs">{comment.likes}</span>
    </Button>
  )
}

export default LikeComment
