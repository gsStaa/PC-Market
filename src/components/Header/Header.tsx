import { Search } from './search/Search'
import style from './styles.module.css'
import { FC } from 'react'
import i18nHead from './ru'
import { CustomLink } from 'src/components/Modules/CustomLink/CustomLink'
import { useAppSelector } from 'src/hooks/redux-hooks'

export const Header: FC = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)
  return (
    <header className={style.headerCon}>
      <div className={style.headerContainer}>
        <img className={style.logo} src='/Header/LOGO1.png' />
        <nav className={style.navHeader}>
          <ul className={style.ulHeader}>
            <li className={style.liHeader}>
              <CustomLink to='/'>{i18nHead.t('main')}</CustomLink>
            </li>
            <li className={style.liHeader}>
              <CustomLink to='/ProductsPage'>
                {i18nHead.t('product')}
              </CustomLink>
            </li>
            <li className={style.liHeader}>
              <CustomLink
                to={isAuthenticated ? '/AccountUser' : '/AccountPage'}
              >
                {i18nHead.t('user')}
              </CustomLink>
            </li>
            <li className={style.liHeader}>
              <CustomLink to={isAuthenticated ? '/CartPage' : '/AccountPage'}>
                <img
                  className={style.shoping}
                  src='/Header/free-icon-font-shopping-bag.png'
                />
              </CustomLink>
            </li>
            <Search />
          </ul>
        </nav>
      </div>
    </header>
  )
}
