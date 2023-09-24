import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
     <div className="main-slider__nav">
        <div className="swiper-button-prev" id="main-slider__swiper-button-prev" onClick={() => swiper.slidePrev()}>
        <span className="icon-right-arrow icon-left-arrow"></span>
        </div>
        <div className="swiper-button-next" id="main-slider__swiper-button-next" onClick={() => swiper.slideNext()}>
        <span className="icon-right-arrow"></span>
        </div>
    </div>
  );
};

export default SwiperNavButtons