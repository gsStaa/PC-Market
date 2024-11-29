import { FC, useCallback, useState } from 'react'
import { Breadcrumb } from '../../../Modules/Breadcrumb/Breadcrumb'
import style from './styles.module.css'
import { ComputersItem } from './ComputersItem/ComputersItem'
import { FilterComputer } from './FilterComputer/FilterComputer'
import { dataComputers } from './data'

export const Computers: FC = () => {
  const [filterComp, setFilter] = useState(dataComputers)

  const handleFilterComputer = useCallback(
    (nameFil: string, checked: boolean) => {
      if (checked) {
        const newDataComp = dataComputers.filter((e) =>
          e.idSpecifications.includes(nameFil)
        )
        setFilter(newDataComp)
      } else {
        setFilter(dataComputers)
      }
    },
    [dataComputers]
  )
  return (
    <div>
      <div className={style.breadcrumb}>
        <Breadcrumb />
      </div>
      <h1 className={style.h1Comp}>Игровые компьютеры</h1>
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
              ikon={item.ikon}
              quantity={item.quantity}
              id={''}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
