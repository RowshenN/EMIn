import React from "react";

import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SliderProductCard from "../../components/SliderProductCard/SliderProductCard";

const HomeProductSlider = () => {
  return (
    <div className="w-full lg:mb-[125px] mb-[60px]">
      <h1 className="text-white font-[outfit-semibold] lg:text-[35px] text-[28px] mb-5">
        For 10 years, Ragbat-dag has been a trusted name in Turkmenistan's
        chemical industry.
      </h1>

      <p className="text-white font-[outfit-light] text-[15px] w-[78%] lg:mb-[70px] mb-[50px]">
        That's why we source our products from carefully vetted international
        suppliers and prioritize meticulous handling and storage. Our dedication
        to quality and safety is unwavering. We work closely with Turkmen
        businesses to understand their unique needs, ensuring we deliver the
        right solutions for your specific applications.
      </p>

      <div className="lg:mb-[100px] hidden lg:block mb-0 pb-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="relative h-[425px] "
          scrollbar={false}
        >
          <SwiperSlide>
            <SliderProductCard />{" "}
          </SwiperSlide>

          <SwiperSlide>
            <SliderProductCard />{" "}
          </SwiperSlide>

          <SwiperSlide>
            <SliderProductCard />{" "}
          </SwiperSlide>

          <SwiperSlide>
            <SliderProductCard />{" "}
          </SwiperSlide>

          <SwiperSlide>
            <SliderProductCard />{" "}
          </SwiperSlide>

          <SwiperSlide>
            <SliderProductCard />{" "}
          </SwiperSlide>

          <SwiperSlide>
            <SliderProductCard />{" "}
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full lg:hidden grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <SliderProductCard />
        <SliderProductCard />
        <SliderProductCard />
        <SliderProductCard />
        <SliderProductCard />
        <SliderProductCard />
        <SliderProductCard />
        <SliderProductCard />
      </div>
    </div>
  );
};

export default HomeProductSlider;
