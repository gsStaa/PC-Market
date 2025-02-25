import { CustomLink } from 'src/components/Modules/CustomLink/CustomLink'
import style from './styles.module.css'
import { FC } from 'react'

type TFooterItem = {
  bing: string
  texts: string[]
  address: string[]
}
export const FooterItem: FC<TFooterItem> = ({ bing, texts, address }) => {
  return (
    <div className={style.footerItem}>
      <ul className={style.footerUll}>
        <h3>{bing}</h3>
        {texts.map((text: string, index: number) => (
          <CustomLink to={address[index]}>
            <li className={style.footerLii}>{text}</li>
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}
