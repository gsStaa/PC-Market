import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { setCart } from 'src/App/features/cartSlice/cartSlice'
import { Breadcrumb } from 'src/components/Modules/Breadcrumb/Breadcrumb'
import { Button } from 'src/components/Modules/Button/Button'
import { dataAccessories } from 'src/components/Pages/ProductsPage/Accessories/data'
import { useAppDispatch } from 'src/hooks/redux-hooks'
import styles from './styles.module.css'
import i18nDetails from 'src/components/Pages/ProductsPage/Accessories/AccessoriesDetails/ru'
type TParams = {
  postId: string
}
export const AccessoriesDetails: FC = () => {
  const params = useParams<TParams>()
  const address = params.postId
  const dataOneAcces = dataAccessories.find((item) => item.address === address)!
  const dispatch = useAppDispatch()
  const handleAddCart = () => {
    const { id, label, price, src, quantity } = dataOneAcces
    dispatch(setCart({ id, label, price, src, quantity }))
  }
  return (
    <div>
      <Breadcrumb />
      <div className={styles.mainCont}>
        <div className={styles.infoSrc}>
          <img src={dataOneAcces.src} />
        </div>
        <div>
          <h1>
            <p className={styles.nameLabel}>{dataOneAcces.label}</p>
          </h1>
          <p className={styles.infoText}>{dataOneAcces.text}</p>
          <hr />
          <div className={styles.infoPriceButton}>
            <p className={styles.infoPrice}>
              {i18nDetails.t('price')} {dataOneAcces.price}{' '}
              {i18nDetails.t('currency')}
            </p>
            <Button text={i18nDetails.t('cart')} onClick={handleAddCart} />
          </div>
        </div>
      </div>
    </div>
  )
}
