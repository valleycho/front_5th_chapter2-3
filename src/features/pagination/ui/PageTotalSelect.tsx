import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { useSearchParams } from "react-router-dom"

const PageTotalSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handlePageTotalChange = (value: string) => {
    setSearchParams((prev) => {
      prev.set("limit", value)

      return prev
    })
  }

  return (
    <Select value={searchParams.get("limit")?.toString() ?? "10"} onValueChange={handlePageTotalChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="10" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="30">30</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default PageTotalSelect
