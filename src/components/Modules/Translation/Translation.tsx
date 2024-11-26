import { FC, ReactNode } from 'react'
import { Translation, useTranslation } from 'react-i18next'
import { i18n } from 'i18next'

type TTrans18 = {
  i18n: i18n
  children: ReactNode
}
export const Trans18: FC<TTrans18> = ({ i18n, children }) => {
  return <Translation i18n={i18n}>{(t) => <>{children}</>}</Translation>
}
