import { Search } from "lucide-react"
import Input from "../../../shared/ui/input"
import { useSearchParams } from "react-router-dom"
import { useState, useTransition } from "react"

const SearchPost = () => {
  const [, setSearchParams] = useSearchParams()
  const [, startTransition] = useTransition()
  const [searchKeyword, setSearchKeyword] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchKeyword(e.target.value)
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchParams((prev) => {
        prev.set("search", e.currentTarget.value)

        return prev
      })
    }
  }

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="게시물 검색..."
        className="pl-8"
        value={searchKeyword}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default SearchPost
