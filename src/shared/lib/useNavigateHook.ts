import { useNavigate } from "react-router-dom"

// 배포
export const useNavigateHook = () => {
  const navigate = useNavigate()

  
  const navigateTo = (path: string) => {
    navigate(path)
  }

  return {
    navigateTo
  }
}

