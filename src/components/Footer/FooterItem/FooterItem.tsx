import style from './footerItem.module.css'
import { FC } from 'react'

type TFooterItem = {
    bing: string;
    texts:string[];
}
export const FooterItem: FC <TFooterItem> = ({ bing, texts }) => {
    return (
        <div className={style.footerItem}>
            <ul className={style.footerUll}>
            <h3>{bing}</h3>
                {texts.map((text: string)=>(
                    <li className={style.footerLii}>
                        {text}
                    </li>
                ) )}
            </ul>
        </div>
    )
}