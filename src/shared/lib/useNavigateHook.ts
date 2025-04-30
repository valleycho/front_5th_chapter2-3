import { useNavigate } from "react-router-dom"

export const useNavigateHook = () => {
  const navigate = useNavigate()

  
  const navigateTo = (path: string) => {
    navigate(path)
  }

  return {
    navigateTo
  }
}

