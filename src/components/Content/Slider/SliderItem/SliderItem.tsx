import Carousel from 'react-bootstrap/Carousel'
import styles from './SliderItem.module.css'
import { FC } from 'react'

type TSliderItem = {
  src: string;
  lable:string;
  desc:string;
}

export const SliderItem: FC<TSliderItem> = ({ src, lable, desc }) => {
  return (
    <div className={styles.carouselItemContainer}>
      <img src={src} className={styles.carouselImage} />
      <Carousel.Caption>
        <h3>{lable}</h3>
        <p>{desc}</p>
      </Carousel.Caption>
    </div>
  )
}
