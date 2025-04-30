import { useUpdatePostMutation } from "../../../entities/posts/model/usePostsQuery"
import { usePostStore } from "../../../entities/posts/model/usePostStore"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import Button from "../../../shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/dialog"
import Input from "../../../shared/ui/input"
import Textarea from "../../../shared/ui/textArea"

const EditPostDialog = () => {
  const { showEditDialog, setShowEditDialog } = useDialogStore()
  const { selectedPost, setSelectedPost } = usePostStore()

  const { mutate: updatePost } = useUpdatePostMutation()

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
          <Button onClick={() => updatePost(selectedPost)}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditPostDialog
