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
      <Navigation />
      <div className="w-[90%] mx-auto mt-6 mb-[170px]">
        <div className="w-full relative rounded-[23px] mb-[61px] ">
          <img src={surat} alt="surat" className=" w-full object-cover" />
          <p className="absolute top-[35%] left-[43%] text-white text-[50px] font-[poppins-semibold] ">
            Tours
          </p>
        </div>

        <div className="w-full">
          <h1 className="text-[32px] font-[poppins-semibold]">
            Find your dream tour
          </h1>

          <div className="mt-10 w-full flex items-center justify-between mb-10 ">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-[10px] bg-[#FAFAFA] cursor-pointer rounded-[9px] border border-[#D9D9D9] py-[10px] px-5 ">
                <img src={calendar} alt="cal" />
                <p className="text-[14px] font-[poppins-medium] ">
                  Choose country
                </p>
              </div>
              <div className="flex items-center justify-center gap-[10px] bg-[#FAFAFA] cursor-pointer rounded-[9px] border border-[#D9D9D9] py-[10px] px-5">
                <img src={globe} alt="glohbe" />
                <p className="text-[14px] font-[poppins-medium]">
                  21 Oct - 30 Oct
                </p>
                <img src={down} alt="down" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-[10px] bg-[#FAFAFA] cursor-pointer rounded-[9px] border border-[#D9D9D9] py-[10px] px-5">
              <img src={sort} alt="sort" />
              <p className="text-[14px] font-[poppins-medium]">Sort by Price</p>
              <img src={down} alt="down" />
            </div>
          </div>

          <div className="w-full grid gap-[30px] grid-cols-auto-fill-250 ">
            {destinations?.map((item) => {
              return <ToursCards key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>

      <AreYouReady />
    </>
  );
};

export default Tours;
