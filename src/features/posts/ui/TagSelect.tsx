import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui/select"

interface TagSelectProps {
  selectedTag: string
  setSelectedTag: (tag: string) => void
  fetchPostsByTag: (tag: string) => void
  updateURL: () => void
  tags: any[]
}

const TagSelect = ({ selectedTag, setSelectedTag, fetchPostsByTag, updateURL, tags }: TagSelectProps) => {
  return (
    <Select
      value={selectedTag}
      onValueChange={(value) => {
        setSelectedTag(value)
        fetchPostsByTag(value)
        updateURL()
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tags.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default TagSelect
