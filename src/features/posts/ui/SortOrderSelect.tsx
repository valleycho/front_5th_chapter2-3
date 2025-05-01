import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui/select"
import { useQueryParamsHook } from "../../../shared/lib/useQueryParamsHook"
import { useQueryClient } from "@tanstack/react-query"
import { postKeys } from "@/entities/posts/model/postKeys"

const SortOrderSelect = () => {
  const queryClient = useQueryClient()
  const { sortOrder, setSortOrder } = useQueryParamsHook()

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value)

    queryClient.removeQueries({ queryKey: postKeys.list._def })
  }

  return (
    <Select value={sortOrder} onValueChange={(value) => handleSortOrderChange(value)}>
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
