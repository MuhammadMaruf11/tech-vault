import React from "react";
import "./Portfolio.css";

// import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

import { ourClients } from "./PortfolioData";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-area achievement-bg fix">
        <div className="container">
          <div className="row wow animate__fadeIn" data-wow-delay=".3s">
            <Swiper
              loop={true}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                375: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1600: {
                  slidesPerView: 4,
                },
              }}
            >
              {ourClients.map((portfolioData) => {
                const { id, title, img } = portfolioData;
                return (
                  <SwiperSlide key={id}>
                    <div className="portfolio-wrap">
                      {img ? <img src={img} alt={title} /> : <h4>{title}</h4>}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
