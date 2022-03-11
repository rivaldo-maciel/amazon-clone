import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Data from './DataImages';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CarouselHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          Data.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt="offer-images" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default CarouselHome;