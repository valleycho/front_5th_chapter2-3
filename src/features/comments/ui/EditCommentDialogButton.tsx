import { Edit2 } from "lucide-react"
import Button from "../../../shared/ui/button"
import { useCommentsStore } from "../../../entities/comments/model/useCommentStore"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { CommentType } from "../../../entities/comments/types/commentTypes"

interface EditCommentDialogButtonProps {
  comment: CommentType
}

const EditCommentDialogButton = ({ comment }: EditCommentDialogButtonProps) => {
  const { setSelectedComment } = useCommentsStore()
  const { setShowEditCommentDialog } = useDialogStore()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        setSelectedComment(comment)
        setShowEditCommentDialog(true)
      }}
    >
      <Edit2 className="w-3 h-3" />
    </Button>
  )
}

export default EditCommentDialogButton
