import React, { useState } from "react";
import HeaderSection from "./HeaderSection";
import SliderSection from "./SliderSection";
import type { Swiper as SwiperClass } from "swiper";

const OurHappyCustomers: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        paddingBottom: "100px",
      }}
    >
      <HeaderSection onPrev={handlePrev} onNext={handleNext} />
      <SliderSection setSwiperRef={setSwiper} />
    </div>
  );
};

export default OurHappyCustomers;
