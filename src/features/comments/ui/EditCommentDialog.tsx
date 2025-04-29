import { useUpdateCommentMutation } from "../../../entities/comments/model/useCommentsQuery"
import { useCommentsStore } from "../../../entities/comments/model/useCommentsStore"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import Button from "../../../shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/dialog"
import Textarea from "../../../shared/ui/textArea"

const EditCommentDialog = () => {
  const { showEditCommentDialog, setShowEditCommentDialog } = useDialogStore()
  const { selectedComment, setSelectedComment } = useCommentsStore()

  const { mutate: updateComment } = useUpdateCommentMutation()

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
            onChange={(e) => setSelectedComment({ ...selectedComment!, body: e.target.value })}
          />
          <Button onClick={() => selectedComment && updateComment(selectedComment)}>댓글 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditCommentDialog
