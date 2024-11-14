import { Link, useLocation } from 'react-router-dom';
import style from './Breadcrumb.module.css';
import { setPath } from '../../../App/features/breadcrumb/breadcrumbSlice';
import { useEffect } from 'react';
import { FC } from 'react'
import { useAppDispatch,useAppSelector } from '../../../hooks/redux-hooks';



export const Breadcrumb: FC = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    let currentLink = ''
    const breadcrumbNames: Record<string, string> = {
        'ProductsPage': 'Каталог товаров' ,
        'Computers': 'Игровые ПК',
        'AccountPage':'Личный кабинет',
    };

    const crumbs = useAppSelector(state => state.breadcrumb.path)
    useEffect(() => {
        const pathArray = location.pathname.split('/').filter(crumb => crumb !== '');
        dispatch(setPath(pathArray));
    }, [location.pathname, dispatch]);

    const breadcrumbLinks =
    crumbs.map((crumb: string, index: number) =>
    {
        currentLink += `/${crumb}`;
        return(
            <div key={crumb} >
                <Link to={currentLink} className={style.crumbsLink}>{breadcrumbNames[crumb] || crumb}</Link>
                {index < crumbs.length - 1 && ' / '}
            </div>
        )
    }
    )


    return(
        <div className={style.crumbs}>
            <Link to="/" className={style.crumbs}>Главная</Link> {' / '}
            {breadcrumbLinks}
        </div>
    )
}
