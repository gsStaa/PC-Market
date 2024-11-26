import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { ProductsPageItem } from './ProductsPageItem/ProductsPageItem'
import { dataProduct } from './data'
import { Trans18 } from '../../Modules/Translation/Translation'
import i18nProd from './ru'

export function ProductsPage() {
  return (
    <Trans18 i18n={i18nProd}>
      <div className={styles.ProductsCont}>
        <h1 className={styles.ProductsName}>{i18nProd.t('ProductsName')}</h1>
        <p className={styles.ProductsNameP}>{i18nProd.t('ProductsNameP')}</p>
        <ul className={styles.Cont}>
          {dataProduct.map((item) => (
            <li className={styles.productLi}>
              <Link to={item.a}>
                <ProductsPageItem src={item.src} label={item.label} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Trans18>
  )
}
