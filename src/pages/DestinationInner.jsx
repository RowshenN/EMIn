import React, { useEffect, useState, useContext } from "react";

import Navigation from "../components/navbars/Navigation";
import AreYouReady from "../components/AreYouReady";

import surat2 from "../images/des-inner.png";
import surat1 from "../images/des-inner-2.png";
import desmao from "../images/des-map.png";
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
import { useParams, useSearchParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { SebedimContext } from "../context/Context";
import TourTestimonial from "../components/TourTestimonial";

const DestinationInner = () => {
  const { dil } = useContext(SebedimContext);
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const [destInner, setDestInner] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getHotelInner();
    getHotels();
  }, [id, dil]);

  const getHotelInner = async () => {
    await axiosInstance
      .get(`/destinations/${id}/details`, {
        headers: {
          "Accept-Language": dil,
        },
      })
      .then((res) => {
        setDestInner(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getHotels = async () => {
    await axiosInstance
      .get(`/destinations?type=${type}`, {
        headers: {
          "Accept-Language": dil,
        },
      })
      .then((data) => {
        setBlogs(data.data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function daysBetween(startDateString, endDateString) {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    // Calculate the difference in milliseconds
    const diffInMs = Math.abs(endDate - startDate);

    // Convert milliseconds to days
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
  }

  const startDate = destInner?.date_start;
  const endDate = destInner?.date_end;
  const days = daysBetween(startDate, endDate);

  const includedItems =
    destInner && destInner.included ? Object.values(destInner.included) : [];
  const notIncludedItems =
    destInner && destInner.not_included
      ? Object.values(destInner.not_included)
      : [];

  const NewBlogs = blogs?.slice(0, 4);

  return (
    <>
      <Navigation />
      <div className="w-[90%] mx-auto mt-[37px] mb-[25px]">
        <div className=" sm:h-[300px] md:h-[625px] relative w-full ">
          <img
            src={destInner?.main_image}
            alt="suart"
            className="-z-10 w-full h-full object-cover rounded-[23px]"
          />
          <div className="bg-white absolute z-10 top-[4%] left-[2%] rounded-[20px] sm:hidden xl:block md:w-[50%] xl:w-[36%] pt-6 pl-9 pr-[45px] pb-[58px] ">
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
                {days} {days > 0 ? "days" : "day"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:block xl:hidden mx-auto mb-[32px] ">
        <p className="md:text-[24px] sm:text-[20px] font-[poppins-medium] mb-[15px] ">
          {destInner?.name}
        </p>
        <p className="text-[#717171] sm:text-[12px] md:text-[16px] font-[poppins-regular] mb-[15px] ">
          {destInner?.description}
        </p>
      </div>

      {/* swiper */}
      <div className="w-[95%] float-right mb-[32px]">
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
          className="relative sm:h-fit md:h-[425px] "
          scrollbar={false}
        >
          <div>
            {destInner?.images?.map((item) => (
              <SwiperSlide key={item} className="!h-fit">
                <div className="w-full cursor-pointer">
                  <img
                    src={item}
                    alt="surat"
                    className="w-full sm:h-[180px] md:h-[325px] object-cover rounded-[22px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      {/* Info */}
      <div className="w-[85%] sm:mb-[40px] md:mb-[120px] mx-auto md:flex-row sm:flex-col flex items-start justify-center sm:gap-[40px] md:gap-[111px]  ">
        <div className="sm:w-full md:w-[50%] ">
          <div>
            <p className="sm:text-[18px] md:text-[30px] font-[poppins-semibold] mb-4 ">
              Included
            </p>
            <div className="flex items-baseline flex-col justify-start gap-3 mb-[37px] ">
              {includedItems.map((item, index) => (
                <li key={index}>{item.item}</li>
              ))}
            </div>

            <p className="sm:text-[18px] md:text-[30px] font-[poppins-semibold] mb-4 ">
              Not included
            </p>
            <div className="flex items-baseline flex-col justify-start gap-3">
              {notIncludedItems.map((item, index) => (
                <li key={index}>{item.item}</li>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:w-full md:w-[50%]">
          <p className="text-[30px] font-[poppins-semibold] mb-5">
            {dil === "tk"
              ? "Karta"
              : dil === "ru"
              ? "Карта"
              : dil === "tr"
              ? "Harita"
              : "Map"}
          </p>
          <div className="w-full">
            <img
              className="sm:w-full md:w-[670px] sm:h-[254px] md:h-[508px] object-cover "
              src={destInner?.map}
              alt="map"
            />
          </div>
        </div>
      </div>

      <TourTestimonial id={id} tour_tests={destInner?.testimonials} />

      {/* hotels */}
      <div className="w-[85%] mx-auto mb-[145px] ">
        <p className="md:block sm:hidden text-[30px] font-[poppins-bold] mb-4">
          {dil === "tk"
            ? "Turlar"
            : dil === "ru"
            ? "Туры"
            : dil === "tr"
            ? "Turlar"
            : "Tours"}
        </p>

        <div className="w-full grid sm:gap-[15px] md:gap-[30px] sm:grid-cols-2 md:grid-cols-auto-fill-250 ">
          {NewBlogs?.map((item) => {
            return <ToursCards key={item.id} item={item} type_param={type} />;
          })}
        </div>
      </div>
      <AreYouReady />
    </>
  );
};

export default DestinationInner;
