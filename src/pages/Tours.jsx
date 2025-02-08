import React, { useEffect, useState } from "react";

import Navigation from "../components/navbars/Navigation";
import surat from "../images/tourMain.png";
import calendar from "../images/tour-calendar-02.svg";
import globe from "../images/tour-globe-04.svg";
import down from "../images/tour-chevron-down.svg";
import sort from "../images/tour-sort.svg";
import ToursCards from "../components/tours/ToursCards";
import AreYouReady from "../components/AreYouReady";
import { axiosInstance } from "../utils/axiosInstance";

const Tours = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    await axiosInstance
      .get("/destinations")
      .then((res) => {
        setDestinations(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="sm:w-[94%] md:w-[95%] mx-auto">
        <Navigation />
      </div>
      <div className="w-[90%] mx-auto mt-6 sm:mb-[70px] md:mb-[170px]">
        <div className="w-full relative sm:mb-6 md:mb-[64px] ">
          <img
            src={surat}
            alt="surat"
            className="rounded-[23px] sm:h-[123px] md:h-full w-full object-cover"
          />
          <p className="absolute sm:top-[26%] xs:top-[35%] sm:left-[35%] xs:left-[40%] md:left-[43%] text-white md:text-[35px] sm:text-[26px] lg:text-[50px] font-[poppins-semibold] ">
            Tours
          </p>
        </div>

        <div className="w-full">
          <h1 className="sm:text-[18px] md:text-[32px] font-[poppins-semibold]">
            Find your dream tour
          </h1>

          <div className="mt-10 w-full flex sm:items-start md:items-center justify-between mb-10 ">
            <div className="flex md:flex-row sm:flex-col sm:items-baseline md:items-center sm:justify-start md:justify-center gap-4">
              <div className="flex items-center justify-center sm:gap-[5px] mdgap-[10px] bg-[#FAFAFA] cursor-pointer rounded-[9px] border border-[#D9D9D9] py-[10px] sm:px-[10px] md:px-5 ">
                <img
                  src={calendar}
                  alt="cal"
                  className="object-cover md:w-[25px] sm:w-[16px] "
                />
                <p className="sm:text-[10px] md:text-[14px] font-[poppins-medium] ">
                  Choose country
                </p>
              </div>
              <div className="flex items-center justify-center sm:gap-[5px] md:gap-[10px] bg-[#FAFAFA] cursor-pointer rounded-[9px] border border-[#D9D9D9] py-[10px] sm:px-[10px] md:px-5">
                <img
                  src={globe}
                  alt="glohbe"
                  className="object-cover md:w-[25px] sm:w-[16px] "
                />
                <p className="sm:text-[10px] md:text-[14px] font-[poppins-medium]">
                  21 Oct - 30 Oct
                </p>
                <img
                  src={down}
                  alt="down"
                  className="object-cover md:w-[25px] sm:w-[16px] "
                />
              </div>
            </div>

            <div className="flex items-center justify-center sm:gap-[5px] md:gap-[10px] bg-[#FAFAFA] cursor-pointer rounded-[9px] border border-[#D9D9D9] py-[10px] sm:px-[10px] md:px-5">
              <img
                src={sort}
                alt="sort"
                className="object-cover md:w-[25px] sm:w-[16px] "
              />
              <p className="sm:text-[10px] md:text-[14px] font-[poppins-medium]">
                Sort by Price
              </p>
              <img
                src={down}
                alt="down"
                className="object-cover md:w-[25px] sm:w-[16px] "
              />
            </div>
          </div>

          <div className="w-full grid sm:gap-[15px] md:gap-[30px] sm:grid-cols-2 md:grid-cols-auto-fill-250 ">
            {/* {destinations?.map((item) => {
              return <ToursCards key={item.id} item={item} />;
            })} */}
            <ToursCards />
            <ToursCards />
            <ToursCards />
            <ToursCards />
            <ToursCards />
            <ToursCards />
            <ToursCards />
            <ToursCards />
          </div>
        </div>
      </div>

      <AreYouReady />
    </>
  );
};

export default Tours;
