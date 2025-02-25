import { FC, useState } from 'react'
import i18nHead from '../ru'
import Icon from './icon.svg'
import styles from './styles.module.css'
import { dataComputers } from 'src/components/Pages/ProductsPage/Computers/data'
import { CustomLink } from 'src/components/Modules/CustomLink/CustomLink'
import { dataAccessories } from 'src/components/Pages/ProductsPage/Accessories/data'

export const Search: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const comboData = [...dataComputers, ...dataAccessories]
  const filterComp = comboData
    .filter((item) => {
      return item.label.toLowerCase().includes(searchQuery.toLowerCase())
    })
    .map((item) => {
      const isAccessory = item.category === 'Computers'
      const path = isAccessory
        ? `/ProductsPage/Computers/${item.address}`
        : `/ProductsPage/Accessories/${item.category}/${item.address}`
      return {
        ...item,
        path: path,
      }
    })
  return (
    <div className={styles.inputWrapper}>
      <button className={styles.icon}>
        <Icon />
      </button>
      <input
        type='text'
        name='text'
        className={styles.input}
        placeholder={i18nHead.t('search')}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <div className={styles.dropdown}>
          {filterComp.map((item) => (
            <CustomLink to={item.path}>
              <div
                className={styles.dropdownItem}
                onClick={() => setSearchQuery('')}
              >
                {item.label}
              </div>
            </CustomLink>
          ))}
        </div>
      )}
    </div>
  )
}
