import { Search } from "lucide-react"
import Input from "../../../shared/ui/input"
import { useQueryParams } from "../../../shared/lib/useQueryParams"

const SearchPost = () => {
  const { searchQuery, setSearchQuery, updateQueryParams } = useQueryParams()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateQueryParams()
    }
  }

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="게시물 검색..."
        className="pl-8"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default SearchPost
