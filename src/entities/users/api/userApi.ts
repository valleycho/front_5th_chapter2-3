import { getMswUrl } from "@/shared/lib/mswUrl"

export const getAllUserApi = async () => {
  const response = await fetch(`${getMswUrl}/users?limit=0&select=username,image`)

  if (!response.ok) {
    console.error("사용자 정보 가져오기 오류:", response.statusText)
  }

  return await response.json()
}


export const getUserByIdApi = async (id: number) => {
  const response = await fetch(`${getMswUrl}/users/${id}`)

  if (!response.ok) {
    console.error("사용자 정보 가져오기 오류:", response.statusText)
  }

  return await response.json()
}
