"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Box } from "@mui/system";

import { Product, useProductStore } from "@/store/useProductStore";

import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";

export default function Slider() {
  const { products } = useProductStore();
  const router = useRouter();

  return (
    <Box sx={{ width: "100%" }}>
      <Swiper
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 }, // phones
          640: { slidesPerView: 2 }, // tablets
          1024: { slidesPerView: 3 }, // laptops
          1440: { slidesPerView: 4 }, // large desktops
        }}
      >
        {products.map((product: Product) => (
          <SwiperSlide
            key={product.id}
            style={{ margin: "10px" }}
            onClick={() => router.push(`/product/${product.id}`)}
          >
            <ProductCard
              img={product.image}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
