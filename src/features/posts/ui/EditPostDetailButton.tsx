import { Edit2 } from "lucide-react"
import Button from "../../../shared/ui/button"
import { PostType } from "../../../entities/posts/types/postsType"
import { usePostsStore } from "../../../entities/posts/model/usePostsStore"
import { useDialogStore } from "../../../shared/model/useDialogStore"

interface EditPostDetailButtonProps {
  post: PostType
}

const EditPostDetailButton = ({ post }: EditPostDetailButtonProps) => {
  const { setSelectedPost } = usePostsStore()
  const { setShowEditDialog } = useDialogStore()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        setSelectedPost(post)
        setShowEditDialog(true)
      }}
    >
      <Edit2 className="w-4 h-4" />
    </Button>
  )
}

export default EditPostDetailButton
