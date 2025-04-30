import { useGetPostsQuery } from "../../../entities/posts/model/usePostsQuery"
import { useGetAllUsersQuery } from "../../../entities/users/model/useUsersQuery"
import DeletePostItemButton from "../../../features/posts/ui/DeletePostItemButton"
import EditPostDetailButton from "../../../features/posts/ui/EditPostDetailButton"
import PostAuthor from "../../../features/posts/ui/PostAuthor"
import PostDetailButton from "../../../features/posts/ui/PostDetailButton"
import PostTagList from "../../../features/posts/ui/PostTagList"
import ReactionsPost from "../../../features/posts/ui/ReactionsPost"
import { useQueryParamsHook } from "../../../shared/lib/useQueryParamsHook"
import HighlightText from "../../../shared/ui/highlight/HighLightText"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../shared/ui/table"

const PostTable = () => {
  const { searchQuery } = useQueryParamsHook()

  const { data: allUser } = useGetAllUsersQuery()
  const { data: postsData, isLoading } = useGetPostsQuery(allUser)

  if (!isLoading && postsData) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>제목</TableHead>
            <TableHead className="w-[150px]">작성자</TableHead>
            <TableHead className="w-[150px]">반응</TableHead>
            <TableHead className="w-[150px]">작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {postsData?.posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div>
                    <HighlightText text={post.title} highlight={searchQuery} />
                  </div>

                  <PostTagList tags={post.tags} />
                </div>
              </TableCell>
              <TableCell>
                <PostAuthor post={post} />
              </TableCell>
              <TableCell>
                <ReactionsPost post={post} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <PostDetailButton post={post} />
                  <EditPostDetailButton post={post} />
                  <DeletePostItemButton post={post} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  return <div className="flex justify-center p-4">로딩 중...</div>
}

export default PostTable
