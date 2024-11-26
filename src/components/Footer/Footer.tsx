import style from './styles.module.css'
import { FooterItem } from './FooterItem/FooterItem'
import { FC } from 'react'
import { dataFooter } from './data'
export const Footer: FC = () => {
  return (
    <footer className={style.footerCont}>
      <hr className={style.hrFooter} />
      <div className={style.footerContainer}>
        {dataFooter.map((item) => (
          <FooterItem bing={item.bing} texts={item.items} />
        ))}
      </div>
      <div className={style.containerBottom}>
        <img className={style.logo} src='/Header/LOGO1.png' />
        <div className={style.IkonkaContainer}>
          <div className={style.IkonkaCont}>
            <img className={style.Ikonka} src='/Ikonka/vk.png' />
          </div>
          <div className={style.IkonkaCont}>
            <img className={style.Ikonka} src='/Ikonka/youtube.png' />
          </div>
        </div>
      </div>
    </footer>
  )
}
