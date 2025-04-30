import Button from "../../../shared/ui/button"
import { Plus } from "lucide-react"
import { useAddCommentStore } from "../model/useAddCommentStore"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { usePostStore } from "../../../entities/posts/model/usePostStore"

const AddCommentDialogButton = () => {
  const { newComment, setNewComment } = useAddCommentStore()
  const { setShowAddCommentDialog } = useDialogStore()
  const { selectedPost } = usePostStore()

  return (
    <Button
      size="sm"
      onClick={async () => {
        await setNewComment({
          body: newComment.body,
          postId: selectedPost!.id,
          userId: 1,
        })

        setShowAddCommentDialog(true)
      }}
    >
      <Plus className="w-3 h-3 mr-1" />
      댓글 추가
    </Button>
  )
}

export default AddCommentDialogButton
