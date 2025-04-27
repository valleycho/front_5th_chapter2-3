import { Edit2 } from "lucide-react"
import Button from "../../../shared/ui/button"

interface EditCommentDialogProps {
  comment: any
  setSelectedComment: (comment: any) => void
  setShowEditCommentDialog: (show: boolean) => void
}

const EditCommentDialog = ({ comment, setSelectedComment, setShowEditCommentDialog }: EditCommentDialogProps) => {
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

export default EditCommentDialog
