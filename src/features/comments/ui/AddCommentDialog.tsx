import { useDialogStore } from "../../../shared/model/useDialogStore"
import Button from "../../../shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/dialog"
import Textarea from "../../../shared/ui/textArea"
import { useAddNewCommentStore } from "../model/useAddNewComment"

interface AddCommentDialogProps {
  addComment: () => void
}

const AddCommentDialog = ({ addComment }: AddCommentDialogProps) => {
  const { showAddCommentDialog, setShowAddCommentDialog } = useDialogStore()
  const { newComment, setNewComment } = useAddNewCommentStore()

  return (
    <Dialog open={showAddCommentDialog} onOpenChange={setShowAddCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={newComment.body}
            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          />
          <Button onClick={addComment}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddCommentDialog
