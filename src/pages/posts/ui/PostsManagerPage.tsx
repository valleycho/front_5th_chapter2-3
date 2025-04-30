import { Card, CardContent, CardHeader, CardTitle } from "../../../shared/ui/card"
import PostDetailDialog from "../../../widgets/posts/ui/PostDetailDialog"
import UserInfoDialog from "../../../widgets/user/ui/UserInfoDialog"
import EditCommentDialog from "../../../features/comments/ui/EditCommentDialog"
import AddCommentDialog from "../../../features/comments/ui/AddCommentDialog"
import AddPostDialogButton from "../../../features/posts/ui/AddPostDialogButton"
import PostTable from "../../../widgets/posts/ui/PostTable"
import Pagination from "../../../shared/ui/pagination"
import AddPostDialog from "../../../features/posts/ui/AddPostDialog"
import EditPostDialog from "../../../features/posts/ui/EditPostDialog"
import PostFilters from "../../../widgets/posts/ui/PostFilters"

const PostsManager = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>게시물 관리자</span>
          <AddPostDialogButton />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <PostFilters />
          <PostTable />

          <Pagination />
        </div>
      </CardContent>

      <AddPostDialog />
      <EditPostDialog />

      <AddCommentDialog />
      <EditCommentDialog />

      <PostDetailDialog />

      <UserInfoDialog />
    </Card>
  )
}

export default PostsManager
