import Button from "../../../shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/dialog"
import Input from "../../../shared/ui/input"
import Textarea from "../../../shared/ui/textArea"

interface EditPostDialogProps {
  showEditDialog: boolean
  setShowEditDialog: (show: boolean) => void
  selectedPost: any
  setSelectedPost: (post: any) => void
  updatePost: () => void
}

const EditPostDialog = ({
  showEditDialog,
  setShowEditDialog,
  selectedPost,
  setSelectedPost,
  updatePost,
}: EditPostDialogProps) => {
  return (
    <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={selectedPost?.title || ""}
            onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
          />
          <Textarea
            rows={15}
            placeholder="내용"
            value={selectedPost?.body || ""}
            onChange={(e) => setSelectedPost({ ...selectedPost, body: e.target.value })}
          />
          <Button onClick={updatePost}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditPostDialog
