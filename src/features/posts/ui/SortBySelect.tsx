import { useQueryClient } from "@tanstack/react-query"
import { useQueryParamsHook } from "../../../shared/lib/useQueryParamsHook"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui/select"

const SortBySelect = () => {
  const queryClient = useQueryClient()
  const { sortBy, setSortBy } = useQueryParamsHook()

  const handleSortByChange = (value: string) => {
    setSortBy(value)

    queryClient.removeQueries({ queryKey: ["posts"] })
  }

  return (
    <Select value={sortBy} onValueChange={(value) => handleSortByChange(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 기준" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">없음</SelectItem>
        <SelectItem value="id">ID</SelectItem>
        <SelectItem value="title">제목</SelectItem>
        <SelectItem value="reactions">반응</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SortBySelect
