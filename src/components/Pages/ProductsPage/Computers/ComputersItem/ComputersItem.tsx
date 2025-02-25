import { CustomLink } from 'src/components/Modules/CustomLink/CustomLink'
import { setCart } from '../../../../../App/features/cartSlice/cartSlice'
import { useAppDispatch } from '../../../../../hooks/redux-hooks'
import { Button } from '../../../../Modules/Button/Button'
import i18nComp from './ru'
import style from './styles.module.css'
import { FC } from 'react'
import { TComputersItem } from 'src/components/Pages/ProductsPage/Computers/data'

export const ComputersItem: FC<TComputersItem> = ({
  src,
  label,
  price,
  name,
  specifications,
  icon,
  id,
  quantity,
  address,
}) => {
  const dispatch = useAppDispatch()
  const handleAddCart = () => {
    dispatch(setCart({ id, label, price, src, quantity }))
  }
  return (
    <div className={style.ComputersItem}>
      <img src={src} className={style.imgSrc} />
      <h3>{label}</h3>
      <h4>
        {i18nComp.t('price')} {price} {i18nComp.t('rub')}
      </h4>
      <Button text={i18nComp.t('cart')} onClick={handleAddCart} />
      <hr />
      <CustomLink to={address}>
        <Button text={i18nComp.t('info')} />
      </CustomLink>
      <hr />
      <div>
        <ul className={style.ul}>
          {name.map((name: string, index: number) => (
            <div className={style.specifications}>
              <img src={icon[index]} className={style.srcIkon} />
              <li>
                <p>{name}</p>
                <p>{specifications[index]}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
