import SearchPost from "../../../features/posts/ui/SearchPost"
import SortBySelect from "../../../features/posts/ui/SortBySelect"
import SortOrderSelect from "../../../features/posts/ui/SortOrderSelect"
import TagSelect from "../../../features/posts/ui/TagSelect"

const PostFilters = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <SearchPost />
      </div>
      <TagSelect />
      <SortBySelect />
      <SortOrderSelect />
    </div>
  )
}

export default PostFilters
