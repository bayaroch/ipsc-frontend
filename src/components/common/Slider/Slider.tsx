import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import './styles.scss'

interface SliderProps {
  images?: any[]
  type: string
}

SwiperCore.use([EffectFade, Pagination, Autoplay])

const Slider: React.FC<SliderProps> = ({ images, type }) => {
  return (
    <>
     <Swiper
        effect="fade"
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={true}
      >
        {!!images &&
          images.map((img, index) => {
            return (
                <SwiperSlide key={index} virtualIndex={index}>
                   <img src={img.url} />
                </SwiperSlide>
            )
          })}
      </Swiper>
    </>
  )
}

Slider.defaultProps = {
   images: [
    { url: 'https://via.placeholder.com/300.png/ed4d8b/' },
    { url: 'https://via.placeholder.com/300.png/f8bf80/' },
    { url: 'https://via.placeholder.com/300.png/f3a8bb/' },
    { url: 'https://via.placeholder.com/300.png/fcf1f0/' },
  ],
}

export default Slider
