import { Trash2 } from "lucide-react"
import Button from "../../../shared/ui/button"

interface DeleteCommentProps {
  commentId: number
  postId: number
  deleteComment: (commentId: number, postId: number) => void
}

const DeleteComment = ({ commentId, postId, deleteComment }: DeleteCommentProps) => {
  return (
    <Button variant="ghost" size="sm" onClick={() => deleteComment(commentId, postId)}>
      <Trash2 className="w-3 h-3" />
    </Button>
  )
}

export default DeleteComment
