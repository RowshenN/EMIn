import React, { useState } from "react";

import plus from "../../images/testimon green +.svg";
import icon from "../../images/Testimonials.png";
import bigsurat from "../../images/testimon-big.svg";
import star from "../../images/empty-star.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialCards from "./TestimonialCards";

const Testimonials = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full relative overflow-hidden">
      <div className="w-full flex items-center justify-center mb-[70px]">
        <div className="flex w-[40%] mx-auto items-center justify-center gap-2 relative">
          <h1 className="md:text-[50px] sm:text-[30px] lg:text-[61px] font-[poppins-bold] ">Testimonials</h1>
          <img
            onClick={() => setOpen(true)}
            src={plus}
            alt="plus"
            className="cursor-pointer object-cover md:w-[38px] sm:w-[18px] "
          />
          <img
            src={icon}
            alt="icon"
            className="absolute w-full -z-10 top-1 bottom-0 left-0 right-0"
          />
        </div>
      </div>

      <div className="w-[92%] float-right z-10">
        <Swiper
          breakpoints={{
            320 : {
              width: 320,
              slidesPerView : 1.2,
            },
            760: {
              width: 760,
              slidesPerView: 2.3,
            },
            1200: {
              width: 1200,
              slidesPerView: 3.3,
            },
          }}
          slidesPerView={3.3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="relative h-[425px] "
          scrollbar={false}
        >
          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>
        </Swiper>
      </div>

      <img src={bigsurat} alt="surat" className="absolute w-fit -z-10 left-0 top-8" />

      {open && (
        <div className="fixed bg-black/20 z-50 flex items-center justify-center top-0 left-0 bottom-0 right-0">
          <div className="rounded-[20px] bg-white py-5 px-[27px] ">
            <div className="w-full flex items-center justify-between mb-4">
              <p className="text-[16px] font-[poppins-semibold] ">
                Testimonial
              </p>
              <div className="flex items-center justify-center gap-1">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="text-[16px] font-[poppins-semibold]">0</p>
              </div>
            </div>

            <form className="w-[335px] flex flex-col items-baseline justify-center gap-3">
              <textarea
                className="w-full min-h-[100px] py-[7px] px-[11px] bg-[#FAFAFA] rounded-[6px] border border-solid border-[#DADADA] outline-none font-[poppins-regular] "
                placeholder="Text"
              ></textarea>
              <input
                className="w-full p-[11px] bg-[#FAFAFA] rounded-[6px] border border-solid border-[#DADADA] outline-none font-[poppins-regular] "
                type="text"
                placeholder="Fullname"
              />
              <button className="w-full text-[16px] font-[poppins-medium] py-[13px] bg-[#009833] rounded-[6px] outline-none flex items-center justify-center text-white " onClick={() => setOpen(false)}>Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
