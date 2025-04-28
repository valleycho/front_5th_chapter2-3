import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useNavigates } from "./useNavigates"

export const useQueryParams = () => {
  const { navigateTo } = useNavigates()

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const [skip, setSkip] = useState(parseInt(queryParams.get("skip") || "0"))
  const [limit, setLimit] = useState(parseInt(queryParams.get("limit") || "10"))
  const [searchQuery, setSearchQuery] = useState(queryParams.get("search") || "")
  const [sortBy, setSortBy] = useState(queryParams.get("sortBy") || "")
  const [sortOrder, setSortOrder] = useState(queryParams.get("sortOrder") || "asc")
  const [selectedTag, setSelectedTag] = useState(queryParams.get("tag") || "")

  const updateQueryParams = () => {
    const params = new URLSearchParams()
    if (skip) params.set("skip", skip.toString())
    if (limit) params.set("limit", limit.toString())
    if (searchQuery) params.set("search", searchQuery)
    if (sortBy) params.set("sortBy", sortBy)
    if (sortOrder) params.set("sortOrder", sortOrder)
    if (selectedTag) params.set("tag", selectedTag)

    navigateTo(`?${params.toString()}`)
  }
  
  useEffect(() => {
    setSkip(parseInt(queryParams.get("skip") || "0"))
    setLimit(parseInt(queryParams.get("limit") || "10"))
    setSearchQuery(queryParams.get("search") || "")
    setSortBy(queryParams.get("sortBy") || "")
    setSortOrder(queryParams.get("sortOrder") || "asc")
    setSelectedTag(queryParams.get("tag") || "")
  }, [location.search])

  return {
    updateQueryParams,
    skip,
    setSkip,
    limit,
    setLimit,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    selectedTag,
    setSelectedTag,
    searchQuery,
    setSearchQuery
  }
}