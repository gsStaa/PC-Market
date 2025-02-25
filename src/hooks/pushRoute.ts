import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const usePushRoute = () => {
  const navigate = useNavigate()

  const pushRoute = useCallback(
    (route: string) => {
      navigate(route)
    },
    [navigate]
  )
  return pushRoute
}
