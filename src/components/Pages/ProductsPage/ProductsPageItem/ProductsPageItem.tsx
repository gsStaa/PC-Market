import { FC } from 'react';
import styles from './ProductsPageItem.module.css'

type TProductsPageItem = {
    label:string;
    src:string;
}

export const ProductsPageItem:FC<TProductsPageItem> = ({label,src})=>{
    return(
        <div className={styles.ProductsPageItem}>
            <h2 className={styles.h3}>{label}</h2>
            <img className={styles.img} src={src}/>
        </div>
    )
}