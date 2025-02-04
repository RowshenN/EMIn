import React, { useEffect, useState } from "react";

import Navigation from "../components/navbars/Navigation";
import AreYouReady from "../components/AreYouReady";

import surat2 from "../images/des-inner-2.png";
import clock from "../images/des-Clock Circle.svg";
import map from "../images/des-map.svg";
// import desmap from "../images/des-map.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ToursCards from "../components/tours/ToursCards";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

const DestinationInner = () => {
  const [destInner, setDestInner] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getHotelInner();
  }, []);

  const getHotelInner = async () => {
    await axiosInstance
      .get(`/destinations/${id}/details`)
      .then((res) => {
        setDestInner(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation />
      <div className="w-[90%] mx-auto mt-[37px] mb-[25px]">
        <div
          className="h-[90vh] py-[22px] px-[23px] relative w-full bg-image bg-cover bg-center bg-no-repeat rounded-[23px] "
          style={{ backgroundImage: `url(${destInner?.main_image})` }}
        >
          <div className="bg-white rounded-[20px] w-[36%] pt-6 pl-9 pr-[45px] pb-[58px] ">
            <p className="text-[40px] font-[poppins-medium] mb-[23px] ">
              {destInner?.name}
            </p>
            <p className="text-[#717171] text-[16px] font-[poppins-regular] mb-[13px] ">
              {destInner?.description}
            </p>
            {/* <p className="text-[#717171] text-[16px] font-[poppins-regular] mb-10 ">
              Lorem ipsum dolor sit amet consectetur. Urna auctor consectetur
              nullam cras massa. Vel vitae ante lacus condimentum eget consequat
              pretium ut. Malesuada felis ut ut pellentesque ultrices in.
              Interdum lorem dui amet rhoncus morbi dolor vel.
            </p> */}

            <div className="flex items-center justify-start gap-4 mb-5 ">
              <img src={map} alt="map" />
              <p className="text-[14px] font-[poppins-regular] ">
                {destInner?.location}
              </p>
            </div>

            <div className="flex items-center justify-start gap-4">
              <img src={clock} alt="clock" />
              <p className=" text-[14px] font-[poppins-regular] ">
                {destInner?.date_start} - {destInner?.date_end}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* swiper */}
      <div className="w-[95%] float-right mb-[32px]">
        <Swiper
          slidesPerView={2.8}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="relative h-[425px] "
          scrollbar={false}
        >
          <div>
            {destInner?.images?.map((item) => (
              <SwiperSlide key={item}>
                <div className="w-full cursor-pointer">
                  <img
                    src={item}
                    alt="surat"
                    className="w-full h-[325px] object-cover rounded-[22px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      {/* Info */}
      <div className="w-[85%] mb-[120px] mx-auto flex items-start justify-center gap-[111px]  ">
        <div className="w-[50%] ">
          <div>
            <p className="text-[30px] font-[poppins-semibold] mb-4 ">
              Included
            </p>
            <div className="flex items-baseline flex-col justify-start gap-3 mb-[37px] ">
              {destInner?.included?.map((item) => {
                return (
                  <p key={item + "s"} className="text-[16px] font-[poppins-regular]">
                    {item.item}
                  </p>
                );
              })}
            </div>

            <p className="text-[30px] font-[poppins-semibold] mb-4 ">
              Not included
            </p>
            <div className="flex items-baseline flex-col justify-start gap-3">
              {destInner?.not_included?.map((item) => {
                return (
                  <p
                    key={item + "w"}
                    className="text-[16px] font-[poppins-regular]"
                  >
                    {item.item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <p className="text-[30px] font-[poppins-semibold] mb-5">Map</p>
          <div className="w-full">
            <img
              className="w-[670px] h-[508px] object-cover "
              src={destInner?.map}
              alt="map"
            />
          </div>
        </div>
      </div>

      {/* hotels */}
      <div className="w-[85%] mx-auto mb-[145px] ">
        <p className="text-[30px] font-[poppins-bold] mb-4">Tours</p>

        <div className="w-full grid gap-[30px] grid-cols-auto-fill-250 ">
          <ToursCards
            country={"Turkmenistan"}
            def={"London & Paris: A Winter Tale of Two Cities"}
            time={"5 days"}
          />
          <ToursCards
            country={"Turkmenistan"}
            def={"London & Paris: A Winter Tale of Two Cities"}
            time={"5 days"}
          />
          <ToursCards
            country={"Turkmenistan"}
            def={"London & Paris: A Winter Tale of Two Cities"}
            time={"5 days"}
          />
          <ToursCards
            country={"Turkmenistan"}
            def={"London & Paris: A Winter Tale of Two Cities"}
            time={"5 days"}
          />
          <ToursCards
            country={"Turkmenistan"}
            def={"London & Paris: A Winter Tale of Two Cities"}
            time={"5 days"}
          />
          <ToursCards
            country={"Turkmenistan"}
            def={"London & Paris: A Winter Tale of Two Cities"}
            time={"5 days"}
          />
        </div>
      </div>
      <AreYouReady />
    </>
  );
};

export default DestinationInner;
