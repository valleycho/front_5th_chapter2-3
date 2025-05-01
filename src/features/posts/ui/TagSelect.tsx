import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui/select"
import { useGetTagsQuery } from "../../../entities/tags/model/useTagsQuery"
import { TagType } from "../../../entities/tags/types/tagTypes"
import { useSearchParams } from "react-router-dom"

const TagSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { data: tags } = useGetTagsQuery()

  const handleTagChange = (value: string) => {
    setSearchParams((prev) => {
      prev.set("tag", value)
      return prev
    })
  }

  return (
    <Select value={searchParams.get("tag") || ""} onValueChange={(value) => handleTagChange(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tags?.map((tag: TagType) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default TagSelect
