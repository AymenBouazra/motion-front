import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay} from "swiper/modules";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

const Clients = () => {
  return (
    <section className="brand-one">
      <div className="container">
        <Swiper
          modules={[ Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
          spaceBetween={100}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          loop={true}
          navigation={false}
          pagination={false}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <img src="assets/img/brands/brand-1-1.svg" alt="Motion Agency Clients" />
            </div>
          </SwiperSlide> 

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="assets/img/brands/brand-1-1.svg" alt="Motion Agency Clients" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="assets/img/brands/brand-1-1.svg" alt="Motion Agency Clients" />
            </div>
          </SwiperSlide> 

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="assets/img/brands/brand-1-1.svg" alt="Motion Agency Clients" />
            </div>
          </SwiperSlide> 

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="assets/img/brands/brand-1-1.svg" alt="Motion Agency Clients" />
            </div>
          </SwiperSlide> 

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="assets/img/brands/brand-1-1.svg" alt="Motion Agency Clients" />
            </div>
          </SwiperSlide> 

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="assets/img/brands/brand-1-1.svg" alt="Motion Agency Clients" />
            </div>
          </SwiperSlide> 

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="assets/img/brands/brand-1-1.svg" alt="Motion Agency Clients" />
            </div>
          </SwiperSlide> 

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="assets/img/brands/brand-1-1.svg" alt="Motion Agency Clients" />
            </div>
          </SwiperSlide> 

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="assets/img/brands/brand-1-1.svg" alt="Motion Agency Clients" />
            </div>
          </SwiperSlide> 

        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
