import React, { useEffect, useState, useContext } from "react";

import HotleCards from "../components/hotels/HotleCards";
import surat from "../images/hotelMain.png";
import Navigation from "../components/navbars/Navigation";
import AreYouReady from "../components/AreYouReady";
import { axiosInstance } from "../utils/axiosInstance";
import Pagination from "../components/Pagination";
import { SebedimContext } from "../context/Context";

const Hotels = () => {
  const { dil } = useContext(SebedimContext);
  const [hotels, setHotels] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchHotels(currentPage);
  }, [currentPage, dil]); // Add dil to the dependency array

  const fetchHotels = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(`/hotels?page=${page}`, {
        headers: {
          "Accept-Language": dil,
        },
      });
      setHotels(response.data.data);
      setMeta(response.data.meta);
    } catch (error) {
      setError(error);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Navigation />
      <div className="sm:w-[94%] md:w-[95%] mx-auto"></div>
      <div className="w-[90%] mx-auto mt-6 sm:mb-[70px] md:mb-[170px]">
        <div className="w-full relative sm:mb-6 md:mb-[64px] ">
          <img
            src={surat}
            alt="surat"
            className="rounded-[23px] sm:h-[123px] md:h-full w-full object-cover"
          />
          <p className="absolute sm:top-[26%] xs:top-[35%] sm:left-[35%] xs:left-[40%] md:left-[43%] text-white md:text-[35px] sm:text-[26px] lg:text-[50px] font-[poppins-semibold] ">
            {dil === "tk"
              ? "Oteller"
              : dil === "ru"
              ? "Отели"
              : dil === "tr"
              ? "Oteller"
              : "Hotels"}
          </p>
        </div>

        <div className="w-full">
          <h1 className="sm:text-[18px] md:text-[32px] font-[poppins-semibold]">
            {dil === "tk"
              ? "Özüňize iň gowy otel saýlaň!"
              : dil === "ru"
              ? "Выберите свой хороший отель!"
              : dil === "tr"
              ? "Size uygun iyi bir otel seçin!"
              : "Find your good hotel"}
          </h1>

          <p className="sm:text-[12px] md:text-[16px] font-[poppins-regular] sm:w-full md:w-[50%] mb-[48px] mt-4 ">
            Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
            phasellus lorem viverra massa purus platea.
          </p>

          <div>
            <div className="w-full grid sm:gap-[15px] md:gap-[30px] sm:grid-cols-2 md:grid-cols-auto-fill-250 ">
              {hotels?.map((item) => {
                return <HotleCards key={item.id} item={item} />;
              })}
            </div>
            <div className="w-full mt-[40px] flex items-center gap-5 justify-center">
              <Pagination meta={meta} onPageChange={handlePageChange} />
            </div>
          </div>
        </div>
      </div>

      <AreYouReady />
    </>
  );
};

export default Hotels;
