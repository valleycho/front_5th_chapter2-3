import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useNavigateHook } from "./useNavigateHook"

export const useQueryParamsHook = () => {
  const { navigateTo } = useNavigateHook()

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const [skip, setSkip] = useState(parseInt(queryParams.get("skip") || "0"))
  const [limit, setLimit] = useState(parseInt(queryParams.get("limit") || "10"))
  const [searchQuery, setSearchQuery] = useState(queryParams.get("search") || "")

  const updateQueryParams = () => {
    const params = new URLSearchParams()
    if (skip) params.set("skip", skip.toString())
    if (limit) params.set("limit", limit.toString())
    if (searchQuery) params.set("search", searchQuery)

    navigateTo(`?${params.toString()}`)
  }
  
  useEffect(() => {
    setSkip(parseInt(queryParams.get("skip") || "0"))
    setLimit(parseInt(queryParams.get("limit") || "10"))
    setSearchQuery(queryParams.get("search") || "")
  }, [location.search])

  return {
    updateQueryParams,
    skip,
    setSkip,
    limit,
    setLimit,
    searchQuery,
    setSearchQuery
  }
}