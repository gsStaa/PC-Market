import { useNavigate } from 'react-router-dom'
import { useAppSelector } from './redux-hooks'
import { useEffect } from 'react'

export const usePushCart = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/CartPage')
    } else {
      navigate('/AccountPage')
      alert('Войдите или зарегистрируйтесь, прежде чем начать покупки.')
    }
  }, [isAuthenticated, navigate])
}
//
