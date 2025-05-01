import { useQueryClient } from "@tanstack/react-query"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui/select"
import { postKeys } from "@/entities/posts/model/postKeys"
import { useSearchParams } from "react-router-dom"

const SortBySelect = () => {
  const queryClient = useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSortByChange = (value: string) => {
    setSearchParams((prev) => {
      prev.set("sortBy", value)

      return prev
    })

    queryClient.removeQueries({ queryKey: postKeys.list._def })
  }

  return (
    <Select value={searchParams.get("sortBy") || ""} onValueChange={(value) => handleSortByChange(value)}>
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
