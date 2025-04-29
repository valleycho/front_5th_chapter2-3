import { Trash2 } from "lucide-react"
import Button from "../../../shared/ui/button"
import { CommentType } from "../../../entities/comments/types/commentTypes"
import { useDeleteCommentMutation } from "../../../entities/comments/model/useCommentsQuery"

interface DeleteCommentProps {
  comment: CommentType
}

const DeleteComment = ({ comment }: DeleteCommentProps) => {
  const { mutate: deleteComment } = useDeleteCommentMutation()

  return (
    <Button variant="ghost" size="sm" onClick={() => deleteComment(comment)}>
      <Trash2 className="w-3 h-3" />
    </Button>
  )
}

export default DeleteComment
