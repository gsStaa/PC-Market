import { CustomLink } from 'src/components/Modules/CustomLink/CustomLink'
import style from './styles.module.css'
import { FC } from 'react'

type TProductItem = {
  src: string
  label: string
  desc: string
  address: string
}

export const ProductItem: FC<TProductItem> = ({
  src,
  label,
  desc,
  address,
}) => {
  return (
    <CustomLink to={address}>
      <div className={style.productItemContainer}>
        <img src={src} className={style.productImage} />
        <h3>{label}</h3>
        <p className={style.rebz}>{desc}</p>
      </div>
    </CustomLink>
  )
}
