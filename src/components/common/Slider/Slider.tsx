/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Pagination, Autoplay } from 'swiper'

interface SliderProps {
  images?: any[]
  fullSize?: boolean
}

SwiperCore.use([EffectFade, Pagination, Autoplay])

const Slider: React.FC<SliderProps> = ({ images, fullSize }) => {
  const customStyle = fullSize ? { width: '100%', height: '100%' } : {}
  const customImageStyle: any = fullSize
    ? {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top center',
      }
    : {}
  const parentClass = fullSize ? 'slider full-slider' : 'slider'

  return (
    <Swiper
      className={parentClass}
      effect="fade"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
      onSlideChange={() => {}}
      onSwiper={(_swiper) => {}}
      autoplay={{ delay: 4000 }}
    >
      {!!images &&
        images.map((img, index) => {
          return (
            <SwiperSlide key={index} virtualIndex={index} style={customStyle}>
              <img style={customImageStyle} src={img.url} />
            </SwiperSlide>
          )
        })}
    </Swiper>
  )
}

Slider.defaultProps = {
  images: [
    { url: 'https://via.placeholder.com/300.png/ed4d8b/' },
    { url: 'https://via.placeholder.com/300.png/f8bf80/' },
    { url: 'https://via.placeholder.com/300.png/f3a8bb/' },
    { url: 'https://via.placeholder.com/300.png/fcf1f0/' },
  ],
  fullSize: false,
}

export default Slider
