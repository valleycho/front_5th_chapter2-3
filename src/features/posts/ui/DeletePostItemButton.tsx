import { Trash2 } from "lucide-react"
import Button from "../../../shared/ui/button"
import { PostType } from "../../../entities/posts/types/postsType"
import { useDeletePostMutation } from "../../../entities/posts/model/usePostsQuery"

interface DeletePostItemButtonProps {
  post: PostType
}

const DeletePostItemButton = ({ post }: DeletePostItemButtonProps) => {
  const { mutate: deletePost } = useDeletePostMutation()

  return (
    <Button variant="ghost" size="sm" onClick={() => deletePost(post.id)}>
      <Trash2 className="w-4 h-4" />
    </Button>
  )
}

export default DeletePostItemButton
