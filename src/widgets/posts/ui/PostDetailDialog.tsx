import { useDialogStore } from "../../../shared/lib/useDialogStore"
import { useQueryParams } from "../../../shared/lib/useQueryParams"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/dialog"
import HighlightText from "../../../shared/ui/highlight/HighLightText"
import CommentsSection from "../../comments/ui/CommentsSection"

interface PostDetailDialogProps {
  selectedPost: any
  comments: unknown[]
  setComments: (comments: any) => void
  setNewComment: (comment: any) => void
  setSelectedComment: (comment: any) => void
}

const PostDetailDialog = ({
  selectedPost,
  comments,
  setComments,
  setNewComment,
  setSelectedComment,
}: PostDetailDialogProps) => {
  const { searchQuery } = useQueryParams()
  const { showPostDetailDialog, setShowPostDetailDialog } = useDialogStore()

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
          <CommentsSection
            postId={selectedPost?.id}
            searchQuery={searchQuery}
            comments={comments}
            setComments={setComments}
            setNewComment={setNewComment}
            setSelectedComment={setSelectedComment}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PostDetailDialog
