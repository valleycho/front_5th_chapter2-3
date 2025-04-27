import Button from "../../../shared/ui/button"
import { Plus } from "lucide-react"

interface AddCommentDialogButtonProps {
  postId: number
  setNewComment: (comment: any) => void
  setShowAddCommentDialog: (show: boolean) => void
}

const AddCommentDialogButton = ({ postId, setNewComment, setShowAddCommentDialog }: AddCommentDialogButtonProps) => {
  return (
    <Button
      size="sm"
      onClick={() => {
        setNewComment((prev) => ({ ...prev, postId }))
        setShowAddCommentDialog(true)
      }}
    >
      <Plus className="w-3 h-3 mr-1" />
      댓글 추가
    </Button>
  )
}

export default AddCommentDialogButton
