import React, { useEffect, useState } from "react";

// import surat from "../images/hotel-inner.png";
// import surat2 from "../images/hotel-inner-img.png";
// import map from "../images/hotel-map.png";

import Navigation from "../components/navbars/Navigation";
import AreYouReady from "../components/AreYouReady";
import HotleCards from "../components/hotels/HotleCards";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

import surat from "../images/hotel-inner.png";
import surat2 from "../images/hotel-inner-img.png";
import map from "../images/hotel-map.png";

const HotelInner = () => {
  const [hotel, setHotel] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getHotelInner();
  }, []);

  const getHotelInner = async () => {
    await axiosInstance
      .get(`/hotels/${id}/details`)
      .then((res) => {
        setHotel(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    await axiosInstance
      .get("/hotels")
      .then((res) => {
        setHotels(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hotelmains = hotels.slice(0, 8);
  return (
    <>
      <div className="sm:w-[94%] md:w-[95%] mx-auto">
        <Navigation />
      </div>

      <div className="w-[90%] mx-auto mt-[37px] mb-[25px]">
        <div
          className="relative w-full"
          // style={{ backgroundImage: `url(${hotel?.main_image})` }}
        >
          <img
            src={hotel?.main_image}
            alt="surat"
            className="-z-10 object-cover md:h-full sm:h-[300px] rounded-[23px] w-full "
          />
          <div className="w-[55%] z-10 absolute bottom-[10%] left-[23%] text-center">
            <p className="text-white sm:text-[18px] md:text-[30px] xl:text-[60px] font-[poppins-bold] ">
              {hotel?.name} 
            </p>
            <p className="text-white sm:text-[12px] md:text-[16px] font-[poppins-regular] ">
              {hotel?.short_description} 
            </p>
          </div>
        </div>
      </div>

      {/* swiper */}
      <div className="w-[95%] float-right mb-[42px]">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2.3,
            },
            760: {
              slidesPerView: 2.7,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="relative sm:h-fit md:h-[425px]  "
          scrollbar={false}
        >
          {hotel?.images?.map((item) => (
            <SwiperSlide key={item}>
              <div className="w-full cursor-pointer">
                <img
                  src={item}
                  alt="surat"
                  className="w-full sm:h-[180px] md:h-[325px] object-cover rounded-[22px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Info */}
      <div className="w-[85%] sm:mb-[70px] md:mb-[120px] mx-auto md:flex-row sm:flex-col flex items-start justify-center sm:gap-[42px] md:gap-[111px]  ">
        <div className="sm:w-full md:w-[50%] ">
          <p className="text-[30px] md:block sm:hidden font-[poppins-semibold] mb-5 ">
            Information
          </p>
          <p className="text-[16px] font-[poppins-regular]">
            {hotel?.description}
          </p>
        </div>

        <div className="sm:w-full md:w-[50%]">
          <p className="sm:text-[18px] md:text-[30px] font-[poppins-semibold] mb-5">Map</p>

          <div>
            <img src={hotel?.map} alt="map" />
          </div>
        </div>
      </div>

      {/* hotels */}
      <div className="w-[85%] mx-auto mb-[145px] ">
        <p className=" md:block sm:hidden text-[30px] font-[poppins-bold] mb-4">Hotels</p>

        <div className="w-full grid sm:gap-[15px] md:gap-[30px] sm:grid-cols-2 md:grid-cols-auto-fill-250 ">
          {hotelmains.map((item) => {
            return <HotleCards key={item.id} item={item} />;
          })}
        </div>
      </div>

      <AreYouReady />
    </>
  );
};

export default HotelInner;
