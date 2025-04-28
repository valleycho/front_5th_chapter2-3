import { Edit2 } from "lucide-react"
import Button from "../../../shared/ui/button"
import { useCommentsStore } from "../../../entities/comments/model/useCommentsStore"

interface EditCommentDialogButtonProps {
  comment: any
  setShowEditCommentDialog: (show: boolean) => void
}

const EditCommentDialogButton = ({ comment, setShowEditCommentDialog }: EditCommentDialogButtonProps) => {
  const { setSelectedComment } = useCommentsStore()

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
