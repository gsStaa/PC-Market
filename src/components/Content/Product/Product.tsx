import styles from './styles.module.css'
import { ProductItem } from './ProductItem/ProductItem'
import { FC } from 'react'
import dataProduct from './data'
import i18nProduct from './ru'
import { Trans18 } from '../../Modules/Translation/Translation'

export const Product: FC = () => {
  return (
    <Trans18 i18n={i18nProduct}>
      <div className={styles.product}>
        <h1 className={styles.productName}>
          {i18nProduct.t('productName')}
          <span className={styles.spanGame}> {i18nProduct.t('spanGame')}</span>
        </h1>
        <ul className={styles.productUl}>
          {dataProduct.map((item) => (
            <li className={styles.productLi}>
              <ProductItem src={item.src} lable={item.lable} desc={item.desc} />
            </li>
          ))}
        </ul>
      </div>
    </Trans18>
  )
}
