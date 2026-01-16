import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import ReviewSlide from "./ReviewSlide";

interface SliderSectionProps {
  setSwiperRef: (swiper: SwiperClass) => void;
}

const reviews = [
  { name: "Sarah. M", review: "I'm blown away..." },
  { name: "John D.", review: "Fantastic service..." },
  { name: "Emily R.", review: "The clothes are stylish..." },
  { name: "Michael B.", review: "Great customer service..." },
  { name: "Sophia K.", review: "I always get compliments..." },
  { name: "David L.", review: "Affordable prices..." },
];

const SliderSection: React.FC<SliderSectionProps> = ({ setSwiperRef }) => {
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={150}
        freeMode={true}
        // pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        onSwiper={setSwiperRef} // capture swiper instance
        breakpoints={{
          0: {
            // from 0px up
            slidesPerView: 1,
            spaceBetween: 100,
          },
          768: {
            // from 768px up
            slidesPerView: 3,
            spaceBetween: 150,
          },
        }}
      >
        {reviews.map((r, index) => (
          <SwiperSlide key={index}>
            <ReviewSlide name={r.name} review={r.review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;
