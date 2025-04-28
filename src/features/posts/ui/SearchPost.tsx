import { Search } from "lucide-react"
import Input from "../../../shared/ui/input"
import { useQueryParams } from "../../../shared/hooks/useQueryParams"

interface SearchPostProps {
  fetchPosts: () => void
  setLoading: (loading: boolean) => void
  setPosts: (posts: any[]) => void
  setTotal: (total: number) => void
}

const SearchPost = ({ fetchPosts, setLoading, setPosts, setTotal }: SearchPostProps) => {
  const { searchQuery, setSearchQuery } = useQueryParams()

  // 게시물 검색
  const searchPosts = async (searchQuery: string) => {
    if (!searchQuery) {
      fetchPosts()
      return
    }
    setLoading(true)
    try {
      const response = await fetch(`/api/posts/search?q=${searchQuery}`)
      const data = await response.json()
      setPosts(data.posts)
      setTotal(data.total)
    } catch (error) {
      console.error("게시물 검색 오류:", error)
    }
    setLoading(false)
  }

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="게시물 검색..."
        className="pl-8"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && searchPosts(e.target.value)}
      />
    </div>
  )
}

export default SearchPost
