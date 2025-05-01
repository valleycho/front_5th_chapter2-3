import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui/select"
import { useQueryClient } from "@tanstack/react-query"
import { postKeys } from "@/entities/posts/model/postKeys"
import { useSearchParams } from "react-router-dom"

const SortOrderSelect = () => {
  const queryClient = useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSortOrderChange = (value: string) => {
    setSearchParams((prev) => {
      prev.set("sortOrder", value)
      return prev
    })

    queryClient.removeQueries({ queryKey: postKeys.list._def })
  }

  return (
    <Select value={searchParams.get("sortOrder") || "asc"} onValueChange={(value) => handleSortOrderChange(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 순서" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="asc">오름차순</SelectItem>
        <SelectItem value="desc">내림차순</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SortOrderSelect
