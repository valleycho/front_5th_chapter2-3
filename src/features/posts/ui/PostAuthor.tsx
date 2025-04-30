import { useState } from "react"
import { PostType } from "../../../entities/posts/types/postsType"
import { useGetUserByIdQuery } from "../../../entities/users/model/useUsersQuery"

interface PostAuthorProps {
  post: PostType
}

const PostAuthor = ({ post }: PostAuthorProps) => {
  const [selectedUserId, setSelectedUserId] = useState<number | undefined>(undefined)
  const { refetch } = useGetUserByIdQuery(selectedUserId)

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={async () => {
        await setSelectedUserId(post.author?.id)
        refetch()
      }}
    >
      <img src={post.author?.image} alt={post.author?.username} className="w-8 h-8 rounded-full" />
      <span>{post.author?.username}</span>
    </div>
  )
}
export default PostAuthor
