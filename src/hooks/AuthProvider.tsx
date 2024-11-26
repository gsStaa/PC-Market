import { FC, ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser, removeUser } from '../App/features/user/userSlice'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

type TAuthProviderProps = {
  children: ReactNode
}
export const AuthProvider: FC<TAuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        )
      } else {
        dispatch(removeUser())
      }
    })
    return () => unsubscribe()
  }, [dispatch])

  return <>{children}</>
}
