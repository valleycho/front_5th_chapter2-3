import { useGetPostsQuery } from "@/entities/posts/model/usePostsQuery"
import Button from "@/shared/ui/button"
import { useSearchParams } from "react-router-dom"

const PagePrevNextButton = () => {
  const { data: postsData } = useGetPostsQuery()
  const [searchParams, setSearchParams] = useSearchParams()

  const skip = Number(searchParams.get("skip") ?? "0")
  const limit = Number(searchParams.get("limit") ?? "10")

  const handlePrevClick = () => {
    setSearchParams((prev) => {
      prev.set("skip", Math.max(0, skip - limit).toString())

      return prev
    })
  }

  const handleNextClick = () => {
    setSearchParams((prev) => {
      prev.set("skip", (skip + limit).toString())

      return prev
    })
  }

  return (
    <div className="flex gap-2">
      <Button disabled={skip === 0} onClick={handlePrevClick}>
        이전
      </Button>
      <Button disabled={skip + limit >= (postsData?.total ?? 0)} onClick={handleNextClick}>
        다음
      </Button>
    </div>
  )
}

export default PagePrevNextButton
