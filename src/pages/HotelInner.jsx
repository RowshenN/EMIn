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
      <Navigation />

      <div className="w-[90%] mx-auto mt-[37px] mb-[25px]">
        <div
          className="h-[90vh] relative w-full bg-image bg-cover bg-center bg-no-repeat rounded-[23px] "
          style={{ backgroundImage: `url(${hotel?.main_image})` }}
        >
          <div className="w-[55%] absolute bottom-[10%] left-[23%] text-center">
            <p className="text-white text-[60px] font-[poppins-bold] ">
              {hotel?.name}
            </p>
            <p className="text-white text-[16px] font-[poppins-regular] ">
              {hotel?.short_description}
            </p>
          </div>
        </div>
      </div>

      {/* swiper */}
      <div className="w-[95%] float-right mb-[42px]">
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
          {hotel?.images?.map((item) => (
            <SwiperSlide key={item}>
              <div className="w-full rounded-[22px] cursor-pointer">
                <img src={item} alt="surat" className="w-full h-[325px] rounded-[15px] object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Info */}
      <div className="w-[85%] mb-[120px] mx-auto flex items-start justify-center gap-[111px]  ">
        <div className="w-[50%] ">
          <p className="text-[30px] font-[poppins-semibold] mb-5 ">
            Information
          </p>
          <p className="text-[16px] font-[poppins-regular]">
            {hotel?.description}
          </p>
          {/* <p className="text-[16px] font-[poppins-regular]">
            Lorem ipsum dolor sit amet consectetur. Urna auctor consectetur
            nullam cras massa. Vel vitae ante lacus condimentum eget consequat
            pretium ut. Malesuada felis ut ut pellentesque ultrices in. Interdum
            lorem dui amet rhoncus morbi dolor vel.
          </p>
          <p className="text-[16px] font-[poppins-regular]">
            Lorem ipsum dolor sit amet consectetur. Urna auctor consectetur
            nullam cras massa. Vel vitae ante lacus condimentum eget consequat
            pretium ut. Malesuada felis ut ut pellentesque ultrices in. Interdum
            lorem dui amet rhoncus morbi dolor vel.
          </p>
          <p className="text-[16px] font-[poppins-regular]">
            Lorem ipsum dolor sit amet consectetur. Urna auctor consectetur
            nullam cras massa. Vel vitae ante lacus condimentum eget consequat
            pretium ut. Malesuada felis ut ut pellentesque ultrices in. Interdum
            lorem dui amet rhoncus morbi dolor vel.
          </p> */}
        </div>

        <div className="w-[50%]">
          <p className="text-[30px] font-[poppins-semibold] mb-5">Map</p>

          <div>
            <img src={hotel?.map} alt="map" />
          </div>
        </div>
      </div>

      {/* hotels */}
      <div className="w-[85%] mx-auto mb-[145px] ">
        <p className="text-[30px] font-[poppins-bold] mb-4">Hotels</p>

        <div className="w-full grid gap-[30px] grid-cols-auto-fill-250 ">
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
