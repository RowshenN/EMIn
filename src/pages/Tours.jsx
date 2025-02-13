import React, { useEffect, useState, useContext } from "react";

import Navigation from "../components/navbars/Navigation";
import surat from "../images/tourMain.png";
import calendar from "../images/tour-calendar-02.svg";
import globe from "../images/tour-globe-04.svg";
import down from "../images/tour-chevron-down.svg";
import sort from "../images/tour-sort.svg";
import ToursCards from "../components/tours/ToursCards";
import AreYouReady from "../components/AreYouReady";
import { axiosInstance } from "../utils/axiosInstance";
import Pagination from "../components/Pagination";
import { SebedimContext } from "../context/Context";
import { useSearchParams } from "react-router-dom";

const Tours = () => {
  const { dil } = useContext(SebedimContext);
  const [destinations, setDestinations] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const type_param = searchParams.get("type");

  useEffect(() => {
    getHotels(currentPage);
  }, [type_param, dil, currentPage]);

  const getHotels = async (page = 1) => {
    setLoading(true);
    setError(null);
    await axiosInstance
      .get(`/destinations?type=${type_param}&page=${page}`, {
        headers: {
          "Accept-Language": dil,
        },
      })
      .then((data) => {
        setDestinations(data.data.data);
        setMeta(data.data.meta);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Navigation />
      <div className="sm:w-[94%] md:w-[95%] mx-auto"></div>
      <div className="w-[90%] mx-auto mt-6 sm:mb-[70px] md:mb-[170px]">
        <div className="w-full -z-10 flex items-center justify-center relative sm:mb-6 md:mb-[64px] ">
          <img
            src={surat}
            alt="surat"
            className="rounded-[23px] sm:h-[123px] md:h-full w-full object-cover"
          />
          <p className="absolute text-white md:text-[35px] sm:text-[26px] lg:text-[50px] font-[poppins-semibold] ">
            {dil === "tk"
              ? "Turlar"
              : dil === "ru"
              ? "Туры"
              : dil === "tr"
              ? "Turlar"
              : "Tours"}
          </p>
        </div>

        <div className="w-full">
          <h1 className="sm:text-[18px] md:text-[32px] font-[poppins-semibold]">
            {dil === "tk"
              ? "Arzuwlaryňyzyň gezelençini öwreniň!"
              : dil === "ru"
              ? "Откройте для себя тур своей мечты!"
              : dil === "tr"
              ? "Hayallerinizdeki turu keşfedin!"
              : "Find your dream tour"}
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
                  {dil === "tk"
                    ? "Ýurt saýlaň"
                    : dil === "ru"
                    ? "Выберите страну "
                    : dil === "tr"
                    ? "Ülke seçin"
                    : "Choose country"}
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
              {dil === "tk"
              ? "Bahasy boýunça "
              : dil === "ru"
              ? "Сортировать по цене"
              : dil === "tr"
              ? "Fiyata göre sırala"
              : "Sort by Price"}
              </p>
              <img
                src={down}
                alt="down"
                className="object-cover md:w-[25px] sm:w-[16px] "
              />
            </div>
          </div>

          <div className="w-full grid sm:gap-[15px] md:gap-[30px] sm:grid-cols-2 md:grid-cols-auto-fill-250 ">
            {destinations?.map((item) => {
              return (
                <ToursCards key={item.id} item={item} type_param={type_param} />
              );
            })}
          </div>
          <div className="w-full mt-[40px] flex items-center gap-5 justify-center">
            <Pagination meta={meta} onPageChange={handlePageChange} />
          </div>
        </div>
      </div>

      <AreYouReady />
    </>
  );
};

export default Tours;
