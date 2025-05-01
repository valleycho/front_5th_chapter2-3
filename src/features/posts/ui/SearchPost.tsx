import { Search } from "lucide-react"
import Input from "../../../shared/ui/input"
import { useSearchParams } from "react-router-dom"
import { useTransition } from "react"

const SearchPost = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchParams((prev) => {
        prev.set("search", e.target.value)
        return prev
      })
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
        value={searchParams.get("search") || ""}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default SearchPost
