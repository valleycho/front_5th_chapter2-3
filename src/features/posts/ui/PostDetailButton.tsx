import { MessageSquare } from "lucide-react"
import Button from "../../../shared/ui/button"
import { PostType } from "../../../entities/posts/types/postTypes"
import { usePostStore } from "../../../entities/posts/model/usePostStore"
import { useDialogStore } from "../../../shared/model/useDialogStore"

interface PostDetailButtonProps {
  post: PostType
}

const PostDetailButton = ({ post }: PostDetailButtonProps) => {
  const { setSelectedPost } = usePostStore()
  const { setShowPostDetailDialog } = useDialogStore()

  const openPostDetail = (post: PostType) => {
    setSelectedPost(post)
    setShowPostDetailDialog(true)
  }

  return (
    <Button variant="ghost" size="sm" onClick={() => openPostDetail(post)}>
      <MessageSquare className="w-4 h-4" />
    </Button>
  )
}

export default PostDetailButton
