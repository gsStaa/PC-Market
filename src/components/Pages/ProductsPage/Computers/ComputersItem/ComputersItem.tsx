import { Button } from '../../../../Modules/Button/Button'
import { Trans18 } from '../../../../Modules/Translation/Translation'
import i18nComp from './ru'
import style from './styles.module.css'
import { FC } from 'react'

type TComputersItem = {
  src: string
  label: string
  price: number
  name: string[]
  specifications: string[]
  ikon: string[]
}
export const ComputersItem: FC<TComputersItem> = ({
  src,
  label,
  price,
  name,
  specifications,
  ikon,
}) => {
  return (
    <Trans18 i18n={i18nComp}>
      <div className={style.ComputersItem}>
        <img src={src} className={style.imgSrc} />
        <h3>{label}</h3>
        <h4>
          {i18nComp.t('1')} {price} {i18nComp.t('2')}
        </h4>
        <Button text='В корзину' />
        <hr />
        <Button text='Подробнее' />
        <hr />
        <div>
          <ul className={style.ul}>
            {name.map((name: string, index: number) => (
              <div className={style.specifications}>
                <img src={ikon[index]} className={style.srcIkon} />
                <li>
                  <p>{name}</p>
                  <p>{specifications[index]}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Trans18>
  )
}
