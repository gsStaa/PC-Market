import Carousel from 'react-bootstrap/Carousel'
import { SliderItem } from './SliderItem/SliderItem'
import styles from'./Slider.module.css'
import { FC } from 'react'

type TSlider = {
  src: string;
  lable:string;
  desc:string;
}

export const Slider: FC <TSlider> = () =>{
  const imagesWithData = [
    {
      src: '/Sliders/pc1.jpeg',
      lable: 'First slide label',
      desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },

    {
      src: '/Sliders/pc2.jpg',
      lable: 'Second slide label',
      desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },

    {
      src: '/Sliders/pc3.png' ,
      lable: 'Third slide label',
      desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ]

  return (
    <>
      <Carousel className={styles.carouselContainer}>
        {imagesWithData.map((item) => (
          <Carousel.Item interval={4000} className={styles.carouselItemContainer}>
            <SliderItem src={item.src} lable={item.lable} desc={item.desc}  />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

