import { FC } from 'react'
import { dataProductItem } from 'src/components/Content/Product/data'
import { CustomLink } from 'src/components/Modules/CustomLink/CustomLink'
import i18nAcces from 'src/components/Pages/ProductsPage/Accessories/ru'
import styles from './styles.module.css'
import { Breadcrumb } from 'src/components/Modules/Breadcrumb/Breadcrumb'

export const Accessories: FC = () => {
  const filterItem = dataProductItem.slice(1)
  return (
    <div>
      <Breadcrumb />
      <h1 className={styles.h1}>{i18nAcces.t('name')}</h1>
      <ul className={styles.cont}>
        {filterItem.map((item) => (
          <CustomLink to={item.category}>
            <li className={styles.productLi}>
              <h2 className={styles.h2}>{item.label}</h2>
              <img src={item.src} />
            </li>
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}
