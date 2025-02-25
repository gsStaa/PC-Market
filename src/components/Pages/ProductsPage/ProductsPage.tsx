import styles from './styles.module.css'
import { ProductsPageItem } from './ProductsPageItem/ProductsPageItem'
import { dataProduct } from './data'
import i18nProd from './ru'
import { CustomLink } from 'src/components/Modules/CustomLink/CustomLink'

export function ProductsPage() {
  return (
    <div className={styles.ProductsCont}>
      <h1 className={styles.ProductsName}>{i18nProd.t('ProductsName')}</h1>
      <p className={styles.ProductsNameP}>{i18nProd.t('ProductsNameP')}</p>
      <ul className={styles.Cont}>
        {dataProduct.map((item) => (
          <li className={styles.productLi}>
            <CustomLink to={item.a}>
              <ProductsPageItem src={item.src} label={item.label} />
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
