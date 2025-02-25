import Carousel from 'react-bootstrap/Carousel'
import { SliderItem } from './SliderItem/SliderItem'
import styles from './styles.module.css'
import { FC } from 'react'
import { imagesWithData } from './data'

export const Slider: FC = () => {
  return (
    <Carousel className={styles.carouselContainer}>
      {imagesWithData.map((item) => (
        <Carousel.Item interval={4000} className={styles.carouselItemContainer}>
          <SliderItem
            src={item.src}
            label={item.label}
            desc={item.desc}
            text={item.text}
            address={item.address}
            view={item.view}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
