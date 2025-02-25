import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { dataComputers } from 'src/components/Pages/ProductsPage/Computers/data'
import styles from './styles.module.css'
import { Breadcrumb } from 'src/components/Modules/Breadcrumb/Breadcrumb'
import { Button } from 'src/components/Modules/Button/Button'
import { useAppDispatch } from 'src/hooks/redux-hooks'
import { setCart } from 'src/App/features/cartSlice/cartSlice'

import i18nDetails from 'src/components/Pages/ProductsPage/Computers/ComputerDetails/ru'

type TParams = {
  postId: string
}
export const ComputerDetails: FC = () => {
  const params = useParams<TParams>()
  const address = params.postId
  const dataOneComp = dataComputers.find((item) => item.address === address)!
  const dispatch = useAppDispatch()
  const handleAddCart = () => {
    const { id, label, price, src, quantity } = dataOneComp
    dispatch(setCart({ id, label, price, src, quantity }))
  }
  return (
    <div>
      <Breadcrumb />
      <div className={styles.mainCont}>
        <div className={styles.infoSrc}>
          <img src={dataOneComp.src} />
        </div>
        <div>
          <h1>
            <p className={styles.nameLabel}>{dataOneComp.label}</p>
          </h1>
          <p className={styles.infoText}>{dataOneComp.text}</p>
          <hr />
          <div className={styles.infoPriceButton}>
            <p className={styles.infoPrice}>
              {i18nDetails.t('price')} {dataOneComp.price}{' '}
              {i18nDetails.t('currency')}
            </p>
            <Button text={i18nDetails.t('cart')} onClick={handleAddCart} />
          </div>
          <hr />
          <ul>
            {dataOneComp.name.map((name, index) => (
              <div className={styles.infoSpecifications}>
                <img src={dataOneComp.icon[index]} />
                <li>{name}</li>
                <li>{dataOneComp.specifications[index]}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
