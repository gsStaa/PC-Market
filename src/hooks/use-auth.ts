import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { useAppSelector } from './redux-hooks'
import { useAppDispatch } from './redux-hooks'
import { removeUser, setUser } from '../App/features/user/userSlice'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export function useUser() {
  const { email, token, id } = useAppSelector((state) => state.user)

  return {
    isAuth: Boolean(email),
    email,
    token,
    id,
  }
}

export const useLogout = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const handleLogout = useCallback(() => {
    const auth = getAuth()
    signOut(auth).then(() => {
      dispatch(removeUser())
      navigate('/AccountPage')
    })
  }, [dispatch])

  return handleLogout
}

export const useLogin = () => {
  const navigate = useNavigate()

  // const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated) хз

  const dispatch = useAppDispatch()

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        )
        navigate('/AccountUser')
      })
      .catch(() => alert('Не существует такого пользователя!'))
  }

  return handleLogin
}

export const useRegister = () => {
  const dispatch = useAppDispatch()

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      console.log(user)
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        })
      )
    })
  }
  return handleRegister
}
