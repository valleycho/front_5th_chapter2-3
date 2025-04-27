import Button from "../../../shared/ui/button"
import { Plus } from "lucide-react"

interface AddCommentProps {
  postId: number
  setNewComment: (comment: any) => void
  setShowAddCommentDialog: (show: boolean) => void
}

const AddComment = ({ postId, setNewComment, setShowAddCommentDialog }: AddCommentProps) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-semibold">댓글</h3>
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
    </div>
  )
}

export default AddComment
