
export const getTagApi = async () => {
  const response = await fetch("/api/posts/tags")

  if (!response.ok) {
    console.error("태그 가져오기 오류:", response.statusText)
  }

  return await response.json()
}

