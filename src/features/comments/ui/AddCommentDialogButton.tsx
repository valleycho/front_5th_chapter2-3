import Button from "../../../shared/ui/button"
import { Plus } from "lucide-react"
import { useAddNewCommentStore } from "../model/useAddNewCommentStore"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { usePostStore } from "../../../entities/posts/model/usePostStore"

const AddCommentDialogButton = () => {
  const { newComment, setNewComment } = useAddNewCommentStore()
  const { setShowAddCommentDialog } = useDialogStore()
  const { selectedPost } = usePostStore()

  return (
    <Button
      size="sm"
      onClick={async () => {
        await setNewComment({
          body: newComment.body,
          postId: selectedPost.id,
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
