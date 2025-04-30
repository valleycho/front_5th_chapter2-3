import { ThumbsDown, ThumbsUp } from "lucide-react"
import { PostType } from "../../../entities/posts/types/postsType"

interface ReactionsPostProps {
  post: PostType
}

const ReactionsPost = ({ post }: ReactionsPostProps) => {
  return (
    <div className="flex items-center gap-2">
      <ThumbsUp className="w-4 h-4" />
      <span>{post.reactions?.likes || 0}</span>
      <ThumbsDown className="w-4 h-4" />
      <span>{post.reactions?.dislikes || 0}</span>
    </div>
  )
}

export default ReactionsPost
