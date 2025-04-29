import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../shared/ui/card"
import PostDetailDialog from "../../../widgets/posts/ui/PostDetailDialog"
import UserInfoDialog from "../../../widgets/user/ui/UserInfoDialog"
import EditCommentDialog from "../../../features/comments/ui/EditCommentDialog"
import AddCommentDialog from "../../../features/comments/ui/AddCommentDialog"
import EditPostDialog from "../../../features/posts/ui/EditPostDialog"
import AddPostDialog from "../../../features/posts/ui/AddPostDialog"
import Pagination from "../../../shared/ui/pagination"
import PostTable from "../../../widgets/posts/ui/PostTable"
import SortOrderSelect from "../../../features/posts/ui/SortOrderSelect"
import SortBySelect from "../../../features/posts/ui/SortBySelect"
import TagSelect from "../../../features/posts/ui/TagSelect"
import SearchPost from "../../../features/posts/ui/SearchPost"
import { useQueryParams } from "../../../shared/lib/useQueryParams"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { usePostsStore } from "../../../entities/posts/model/usePostsStore"
import AddPostDialogButton from "../../../features/posts/ui/AddPostDialogButton"

const PostsManager = () => {
  const { updateQueryParams, skip, limit, sortBy, sortOrder, selectedTag } = useQueryParams()

  const { setShowEditDialog, setShowPostDetailDialog } = useDialogStore()

  const { selectedPost, setSelectedPost } = usePostsStore()

  // 상태 관리
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState({})
  const [total, setTotal] = useState(0)

  // 게시물 가져오기
  const fetchPosts = () => {
    setLoading(true)
    let postsData
    let usersData

    fetch(`/api/posts?limit=${limit}&skip=${skip}`)
      .then((response) => response.json())
      .then((data) => {
        postsData = data
        return fetch("/api/users?limit=0&select=username,image")
      })
      .then((response) => response.json())
      .then((users) => {
        usersData = users.users
        const postsWithUsers = postsData.posts.map((post) => ({
          ...post,
          author: usersData.find((user) => user.id === post.userId),
        }))
        setPosts(postsWithUsers)
        setTotal(postsData.total)
      })
      .catch((error) => {
        console.error("게시물 가져오기 오류:", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  // 태그별 게시물 가져오기
  const fetchPostsByTag = async (tag) => {
    if (!tag || tag === "all") {
      fetchPosts()
      return
    }
    setLoading(true)
    try {
      const [postsResponse, usersResponse] = await Promise.all([
        fetch(`/api/posts/tag/${tag}`),
        fetch("/api/users?limit=0&select=username,image"),
      ])
      const postsData = await postsResponse.json()
      const usersData = await usersResponse.json()

      const postsWithUsers = postsData.posts.map((post) => ({
        ...post,
        author: usersData.users.find((user) => user.id === post.userId),
      }))

      setPosts(postsWithUsers)
      setTotal(postsData.total)
    } catch (error) {
      console.error("태그별 게시물 가져오기 오류:", error)
    }
    setLoading(false)
  }

  // 게시물 업데이트
  const updatePost = async () => {
    try {
      const response = await fetch(`/api/posts/${selectedPost.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedPost),
      })
      const data = await response.json()
      setPosts(posts.map((post) => (post.id === data.id ? data : post)))
      setShowEditDialog(false)
    } catch (error) {
      console.error("게시물 업데이트 오류:", error)
    }
  }

  // 댓글 가져오기
  const fetchComments = async (postId) => {
    if (comments[postId]) return // 이미 불러온 댓글이 있으면 다시 불러오지 않음
    try {
      const response = await fetch(`/api/comments/post/${postId}`)
      const data = await response.json()
      setComments((prev) => ({ ...prev, [postId]: data.comments }))
    } catch (error) {
      console.error("댓글 가져오기 오류:", error)
    }
  }

  // 게시물 상세 보기
  const openPostDetail = (post) => {
    setSelectedPost(post)
    fetchComments(post.id)
    setShowPostDetailDialog(true)
  }

  useEffect(() => {
    if (selectedTag) {
      fetchPostsByTag(selectedTag)
    } else {
      fetchPosts()
    }
    updateQueryParams()
  }, [skip, limit, sortBy, sortOrder, selectedTag])

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
          <div className="flex gap-4">
            <div className="flex-1">
              <SearchPost fetchPosts={fetchPosts} setLoading={setLoading} setPosts={setPosts} setTotal={setTotal} />
            </div>
            <TagSelect fetchPostsByTag={fetchPostsByTag} />
            <SortBySelect />
            <SortOrderSelect />
          </div>

          {loading ? (
            <div className="flex justify-center p-4">로딩 중...</div>
          ) : (
            <PostTable posts={posts} openPostDetail={openPostDetail} setPosts={setPosts} />
          )}

          <Pagination total={total} />
        </div>
      </CardContent>

      <AddPostDialog posts={posts} setPosts={setPosts} />
      <EditPostDialog updatePost={updatePost} />

      <AddCommentDialog />
      <EditCommentDialog />

      <PostDetailDialog />

      <UserInfoDialog />
    </Card>
  )
}

export default PostsManager
