import style  from './footer.module.css'
import { FooterItem } from './FooterItem/FooterItem'
import { FC } from 'react'

type TFooter = {
    bing: string;
    items:string;
}

export const Footer: FC <TFooter> = () => {
    const dataFooter = [
        {
            bing:'Акссесуары',
            items: ['Клавиатуры','Мышки','Наушники','Маниторы','']
        },
        {
            bing:'Копьютеры',
            items: ['Игровые пк']
        },
        {
            bing:'Компания',
            items: ['О нас','Контакты']
        },
    ]
    return(
        <footer className={style.footerCont}>
            <hr className={style.hrFooter}/>
            <div className={style.footerContainer}> 
                {dataFooter.map((item)=>(
                    <FooterItem bing={item.bing} texts={item.items}/>
                ))}
            </div>
            <div className={style.containerBottom}>
            <img
                className={style.logo}
                src='/Header/LOGO1.png'
            />
            <div className={style.IkonkaContainer}>
                <div className={style.IkonkaCont}>
                <img
                className={style.Ikonka}
                src='/Ikonka/vk.png'
                />
                </div>
                <div className={style.IkonkaCont}>
                <img
                className={style.Ikonka}
                src='/Ikonka/youtube.png'
                />
                </div>
            </div>
            </div>
        </footer>
    )
}
