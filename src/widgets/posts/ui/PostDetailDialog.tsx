import { useDialogStore } from "../../../shared/model/useDialogStore"
import { useQueryParamsHook } from "../../../shared/lib/useQueryParamsHook"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/dialog"
import HighlightText from "../../../shared/ui/highlight/HighLightText"
import CommentsSection from "../../comments/ui/CommentsSection"
import { usePostsStore } from "../../../entities/posts/model/usePostsStore"

const PostDetailDialog = () => {
  const { searchQuery } = useQueryParamsHook()
  const { showPostDetailDialog, setShowPostDetailDialog } = useDialogStore()
  const { selectedPost } = usePostsStore()

  return (
    <Dialog open={showPostDetailDialog} onOpenChange={setShowPostDetailDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            <HighlightText text={selectedPost?.title} highlight={searchQuery} />
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            <HighlightText text={selectedPost?.body} highlight={searchQuery} />
          </p>
          <CommentsSection />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PostDetailDialog
