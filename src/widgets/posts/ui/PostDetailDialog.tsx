import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/dialog"
import HighlightText from "../../../shared/ui/highlight/HighLightText"
import CommentsSection from "../../comments/ui/CommentsSection"

interface PostDetailDialogProps {
  showPostDetailDialog: boolean
  setShowPostDetailDialog: (show: boolean) => void
  selectedPost: any
  searchQuery: string
  setComments: (comments: any) => void
  setNewComment: (comment: any) => void
  setShowAddCommentDialog: (show: boolean) => void
  setSelectedComment: (comment: any) => void
  setShowEditCommentDialog: (show: boolean) => void
}

const PostDetailDialog = ({
  showPostDetailDialog,
  setShowPostDetailDialog,
  selectedPost,
  searchQuery,
  setComments,
  setNewComment,
  setShowAddCommentDialog,
  setSelectedComment,
  setShowEditCommentDialog,
}: PostDetailDialogProps) => {
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
            setComments={setComments}
            setNewComment={setNewComment}
            setShowAddCommentDialog={setShowAddCommentDialog}
            setSelectedComment={setSelectedComment}
            setShowEditCommentDialog={setShowEditCommentDialog}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PostDetailDialog
