import PagePrevNextButton from "@/features/pagination/ui/PagePrevNextButton"
import PageTotalSelect from "@/features/pagination/ui/PageTotalSelect"

const Pagination = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span>표시</span>
        <PageTotalSelect />
        <span>항목</span>
      </div>
      <PagePrevNextButton />
    </div>
  )
}

export default Pagination
