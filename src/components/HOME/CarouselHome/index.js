import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Data from './DataImages';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

function CarouselHome() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Data.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt="offer-images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselHome;
