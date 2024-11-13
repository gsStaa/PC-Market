import { Link } from 'react-router-dom'
import styles from './ProductsPage.module.css'
import { ProductsPageItem } from './ProductsPageItem/ProductsPageItem'

export function ProductsPage(){
    const dataProduct = [
        {
            src:'/ProductsPage/1.jpg',
            label:'Игравые ПК',
            a:'Computers'
        },
        {
            src:'/ProductsPage/2.jpg',
            label:'Аксессуары',
            a:'ProductsPage'
        }
    ]
    return(
        <div className={styles.ProductsCont}>
            <h1 className={styles.ProductsName}>Каталог товаров</h1>
            <p className={styles.ProductsNameP}>Все необходимые компоненты для игровых компьютеров, ноутбуков и обустройства вашей игровой или профессиональной зоны</p>
            <ul className={styles.Cont}>
                {dataProduct.map((item)=>(
                    <li className={styles.productLi}>
                        <Link to={item.a}>
                            <ProductsPageItem src={item.src} label={item.label}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}