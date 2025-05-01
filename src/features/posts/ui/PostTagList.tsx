import { useSearchParams } from "react-router-dom"

interface PostTagListProps {
  tags: string[]
}

const PostTagList = ({ tags }: PostTagListProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className="flex flex-wrap gap-1">
      {tags?.map((tag) => (
        <span
          key={tag}
          className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer ${
            searchParams.get("tag") === tag
              ? "text-white bg-blue-500 hover:bg-blue-600"
              : "text-blue-800 bg-blue-100 hover:bg-blue-200"
          }`}
          onClick={() => {
            setSearchParams((prev) => {
              prev.set("tag", tag)

              return prev
            })
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default PostTagList
