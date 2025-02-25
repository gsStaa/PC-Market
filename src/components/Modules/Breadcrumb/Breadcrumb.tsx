import { Link, useLocation } from 'react-router-dom'
import style from './styles.module.css'
import { setPath } from '../../../App/features/breadcrumb/breadcrumbSlice'
import { useEffect, useMemo } from 'react'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import React from 'react'
import i18nBread from './ru'

const breadcrumbNames: Record<string, string> = {
  ProductsPage: 'Каталог товаров',
  Computers: 'Игровые ПК',
  Accessories: 'Акссесуары',
  Keyboards: 'Клавиатуры ',
  Mouse: ' Мышки',
  Headsets: 'Наушники ',
  Monitors: 'Мониторы ',
}
const BreadcrumbComponent: FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  let currentLink = ''

  const crumbs = useAppSelector((state) => state.breadcrumb.path)
  useEffect(() => {
    const pathArray = location.pathname
      .split('/')
      .filter((crumb) => crumb !== '')
    dispatch(setPath(pathArray))
  }, [location.pathname, dispatch])

  const breadcrumbLinks = useMemo(
    () =>
      crumbs.map((crumb: string, index: number) => {
        currentLink += `/${crumb}`
        return (
          <div key={crumb}>
            <Link to={currentLink} className={style.crumbsLink}>
              {breadcrumbNames[crumb] || crumb}
            </Link>
            {index < crumbs.length - 1 && ' / '}
          </div>
        )
      }),
    [crumbs]
  )

  return (
    <div className={style.crumbs}>
      <Link to='/' className={style.crumbs}>
        {i18nBread.t('name')}
      </Link>
      {' / '}
      {breadcrumbLinks}
    </div>
  )
}

export const Breadcrumb = React.memo(BreadcrumbComponent)
