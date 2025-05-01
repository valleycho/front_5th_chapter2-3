import { useDialogStore } from "../../../shared/model/useDialogStore"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/dialog"
import HighlightText from "../../../shared/ui/highlight/HighLightText"
import CommentsSection from "../../comments/ui/CommentsSection"
import { usePostStore } from "../../../entities/posts/model/usePostStore"
import { useSearchParams } from "react-router-dom"

const PostDetailDialog = () => {
  const { showPostDetailDialog, setShowPostDetailDialog } = useDialogStore()
  const { selectedPost } = usePostStore()
  const [searchParams] = useSearchParams()

  return (
    <Dialog open={showPostDetailDialog} onOpenChange={setShowPostDetailDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            <HighlightText text={selectedPost?.title || ""} highlight={searchParams.get("search") || ""} />
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            <HighlightText text={selectedPost?.body || ""} highlight={searchParams.get("search") || ""} />
          </p>
          <CommentsSection />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PostDetailDialog
