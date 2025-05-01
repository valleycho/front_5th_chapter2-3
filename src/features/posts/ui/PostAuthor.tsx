import { PostType } from "../../../entities/posts/types/postTypes"
import { useUserStore } from "@/entities/users/model/useUserStore"
import { useDialogStore } from "@/shared/model/useDialogStore"

interface PostAuthorProps {
  post: PostType
}

const PostAuthor = ({ post }: PostAuthorProps) => {
  const { setSelectedUser } = useUserStore()
  const { setShowUserInfoDialog } = useDialogStore()

  const handleAuthorClick = async () => {
    if (post.author) {
      setSelectedUser(post.author)
      setShowUserInfoDialog(true)
    }
  }

  return (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={handleAuthorClick}>
      <img src={post.author?.image} alt={post.author?.username} className="w-8 h-8 rounded-full" />
      <span>{post.author?.username}</span>
    </div>
  )
}
export default PostAuthor
