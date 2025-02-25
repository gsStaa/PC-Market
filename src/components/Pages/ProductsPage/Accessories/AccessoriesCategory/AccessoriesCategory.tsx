import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from 'src/components/Modules/Breadcrumb/Breadcrumb'
import { AccessoriesItem } from 'src/components/Pages/ProductsPage/Accessories/AccessoriesItem/AccessoriesItem'
import { dataAccessories } from 'src/components/Pages/ProductsPage/Accessories/data'
import styles from './styles.module.css'

type TParams = {
  category: string
}
export const AccessoriesCategory: FC = () => {
  const params = useParams<TParams>()
  const category = params.category
  const dataAccessoriesDefinite = dataAccessories.filter(
    (item) => item.category === category
  )
  return (
    <div>
      <Breadcrumb />
      <div className={styles.item}>
        {dataAccessoriesDefinite.map((item) => (
          <AccessoriesItem
            src={item.src}
            label={item.label}
            price={item.price}
            quantity={item.quantity}
            id={item.id}
            address={item.address}
            category={item.category}
          />
        ))}
      </div>
    </div>
  )
}
