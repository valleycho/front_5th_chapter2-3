import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui/select"
import { useQueryParamsHook } from "../../../shared/lib/useQueryParamsHook"
import { useGetTagsQuery } from "../../../entities/tags/model/useTagsQuery"
import { TagType } from "../../../entities/tags/types/tagsType"

const TagSelect = () => {
  const { selectedTag, setSelectedTag } = useQueryParamsHook()

  const { data: tags } = useGetTagsQuery()

  return (
    <Select value={selectedTag} onValueChange={(value) => setSelectedTag(value)}>
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
