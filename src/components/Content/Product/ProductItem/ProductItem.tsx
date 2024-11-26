import style from './styles.module.css'
import { FC } from 'react'

type TProductItem = {
  src: string
  lable: string
  desc: string
}

export const ProductItem: FC<TProductItem> = ({ src, lable, desc }) => {
  return (
    <div className={style.productItemContainer}>
      <img src={src} className={style.productImage} />
      <h3>{lable}</h3>
      <p className={style.rebz}>{desc}</p>
    </div>
  )
}
