import { useDialogStore } from "../../../shared/model/useDialogStore"
import Button from "../../../shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/dialog"
import Textarea from "../../../shared/ui/textArea"

interface AddCommentDialogProps {
  newComment: any
  setNewComment: (comment: any) => void
  addComment: () => void
}

const AddCommentDialog = ({ newComment, setNewComment, addComment }: AddCommentDialogProps) => {
  const { showAddCommentDialog, setShowAddCommentDialog } = useDialogStore()

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
