import styles from './styles.module.css'
import { ProductItem } from './ProductItem/ProductItem'
import { FC } from 'react'
import i18nProduct from './ru'
import { dataProductItem } from 'src/components/Content/Product/data'

export const Product: FC = () => {
  return (
    <div className={styles.product}>
      <h1 className={styles.productName}>
        {i18nProduct.t('productName')}
        <span className={styles.spanGame}> {i18nProduct.t('spanGame')}</span>
      </h1>
      <ul className={styles.productUl}>
        {dataProductItem.map((item) => (
          <li className={styles.productLi}>
            <ProductItem
              src={item.src}
              label={item.label}
              desc={item.desc}
              address={item.address}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
