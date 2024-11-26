import { useNavigate } from 'react-router-dom'
import { useAppSelector } from './redux-hooks'
import { useEffect } from 'react'

export const usePushRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('AccountUser')
    }
  }, [isAuthenticated, navigate])
}
