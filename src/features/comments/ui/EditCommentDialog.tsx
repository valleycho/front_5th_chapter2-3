import { useCommentsStore } from "../../../entities/comments/model/useCommentsStore"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import Button from "../../../shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/dialog"
import Textarea from "../../../shared/ui/textArea"

interface EditCommentDialogProps {
  updateComment: () => void
}

const EditCommentDialog = ({ updateComment }: EditCommentDialogProps) => {
  const { showEditCommentDialog, setShowEditCommentDialog } = useDialogStore()
  const { selectedComment, setSelectedComment } = useCommentsStore()

  return (
    <Dialog open={showEditCommentDialog} onOpenChange={setShowEditCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={selectedComment?.body || ""}
            onChange={(e) => setSelectedComment({ ...selectedComment, body: e.target.value })}
          />
          <Button onClick={updateComment}>댓글 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditCommentDialog
