

export const getUserByIdApi = async (id: number) => {
  const response = await fetch(`/api/users/${id}`)

  if (!response.ok) {
    console.error("사용자 정보 가져오기 오류:", response.statusText)
  }

  return await response.json()
}
