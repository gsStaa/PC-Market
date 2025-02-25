import { FC } from 'react'
import { Button } from 'src/components/Modules/Button/Button'
import i18nAccessoriesItem from 'src/components/Pages/ProductsPage/Accessories/AccessoriesItem/ru'
import { TAccessoriesItem } from 'src/components/Pages/ProductsPage/Accessories/data'
import styles from './styles.module.css'
import { CustomLink } from 'src/components/Modules/CustomLink/CustomLink'
import { useAppDispatch } from 'src/hooks/redux-hooks'
import { setCart } from 'src/App/features/cartSlice/cartSlice'

export const AccessoriesItem: FC<TAccessoriesItem> = ({
  src,
  label,
  price,
  quantity,
  id,
  address,
  category,
}) => {
  const dispatch = useAppDispatch()
  const handleAddCart = () => {
    dispatch(setCart({ id, label, price, src, quantity }))
  }
  return (
    <div className={styles.AccessoriesItem}>
      <CustomLink to={address}>
        <img src={src} />
        <h3>{label}</h3>
      </CustomLink>
      <div>
        <p>
          {i18nAccessoriesItem.t('price')} {price}{' '}
          {i18nAccessoriesItem.t('rub')}
        </p>
        <Button text={i18nAccessoriesItem.t('cart')} onClick={handleAddCart} />
      </div>
    </div>
  )
}
