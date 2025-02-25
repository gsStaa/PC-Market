import { FC, ReactNode } from 'react'
import styles from './styles.module.css'
import { usePushRoute } from 'src/hooks/pushRoute'

type TCustomLink = {
  to: string
  children: ReactNode
}

export const CustomLink: FC<TCustomLink> = ({ to, children }) => {
  const pushRoute = usePushRoute()

  return (
    <a onClick={() => pushRoute(to)} className={styles.a}>
      {children}
    </a>
  )
}
