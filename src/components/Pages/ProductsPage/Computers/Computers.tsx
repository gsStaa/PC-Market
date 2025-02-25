import { FC, useCallback, useState } from 'react'
import { Breadcrumb } from '../../../Modules/Breadcrumb/Breadcrumb'
import style from './styles.module.css'
import { ComputersItem } from './ComputersItem/ComputersItem'
import { FilterComputer } from './FilterComputer/FilterComputer'
import { dataComputers } from './data'
import i18nProdPC from 'src/components/Pages/ProductsPage/Computers/ru'

export const Computers: FC = () => {
  const [filterComp, setFilter] = useState(dataComputers)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const handleFilterComputer = useCallback(
    (nameFil: string, checked: boolean) => {
      let newFilters
      if (checked) {
        newFilters = [...selectedFilters, nameFil]
      } else {
        newFilters = selectedFilters.filter((filter) => filter !== nameFil)
      }
      setSelectedFilters(newFilters)
      const newDataComp = dataComputers.filter((e) =>
        newFilters.some((filter) => e.idSpecifications.includes(filter))
      )
      setFilter(newDataComp)
    },
    [selectedFilters]
  )
  return (
    <div>
      <Breadcrumb />
      <h1 className={style.h1Comp}>{i18nProdPC.t('name')}</h1>
      <div className={style.ContainerComp}>
        <div className={style.Filter}>
          <FilterComputer onFilterComputer={handleFilterComputer} />
        </div>
        <div className={style.Computers}>
          {filterComp.map((item) => (
            <ComputersItem
              src={item.src}
              label={item.label}
              price={item.price}
              name={item.name}
              specifications={item.specifications}
              icon={item.icon}
              quantity={item.quantity}
              id={item.id}
              address={item.address}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
