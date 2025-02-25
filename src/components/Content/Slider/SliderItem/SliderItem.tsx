import Carousel from 'react-bootstrap/Carousel'
import styles from './styles.module.css'
import { FC } from 'react'
import { Button } from 'src/components/Modules/Button/Button'
import { CustomLink } from 'src/components/Modules/CustomLink/CustomLink'

type TSliderItem = {
  src: string
  label: string
  desc?: string
  text: string
  address: string
  view: string
}

export const SliderItem: FC<TSliderItem> = ({
  src,
  label,
  desc,
  text,
  address,
  view,
}) => {
  return (
    <div className={styles.carouselItemContainer}>
      <img src={src} className={styles.carouselImage} />
      <Carousel.Caption className={styles[`caption${view}`]}>
        <h3>{label}</h3>
        <p>{desc}</p>
        <CustomLink to={address}>
          <Button text={text} />
        </CustomLink>
      </Carousel.Caption>
    </div>
  )
}
