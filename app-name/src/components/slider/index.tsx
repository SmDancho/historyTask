import { FC } from "react";

import style from "./style.module.scss";

import { dataType, sliderTypes } from "../types/data";

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Slider: FC<dataType> = (props) => {
  const { sliderTopics } = props;

  return (
    <>
      <div className="container">
        <div className={style.sliderInner}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={"auto"}
            navigation
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 50,
                pagination: false,
              },
            }}
          >
            {sliderTopics.map((item: sliderTypes) => (
              <SwiperSlide>
                <div className={style.year}>{item.slideryear}</div>
                <div className={style.event}>{item.event}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
