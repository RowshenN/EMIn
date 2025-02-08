import React from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../components/navbars/Navigation";
import Experience from "../components/Experience";

import surat from "../images/home.png";
import calendar from "../images/Calendar.svg";
import to from "../images/to.svg";
import refresh from "../images/refresh.svg";
import passenger from "../images/passenger.svg";
import turkish from "../images/turkish-logo.svg";
import visa from "../images/online visa.png";
import visa2 from "../images/online visa 2.png";
import arrow from "../images/online arrow.svg";
import DestinationMain from "../components/DestinationMain";
import Turkmenistan from "../components/TurkmenMain";
import Tours from "../components/tours/TourMain";
import HotelMain from "../components/hotels/HotelMain";
import Testimonials from "../components/testimonials/Testimonials";
import BlogMain from "../components/BlogMain";
import FAQ from "../components/faq/FAQ";
import AreYouReady from "../components/AreYouReady";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sm:w-[94%] md:w-[90%] mx-auto">
        <Navigation />

        <div
          style={{ backgroundImage: `url(${surat})` }}
          className="w-full bg-image sm:h-[30vh] md:h-[60vh] lg:h-[90vh] mt-6 -z-10 bg-cover bg-black/20 bg-center bg-no-repeat rounded-[23px]"
        >
          <div className="sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto flex items-center justify-center text-center sm:pt-[40px] md:pt-[70px] lg:pt-[100px]">
            <h1 className=" text-white font-[poppins-semibold] sm:text-[25px] md:text-[60px] lg:text-[80px] ">
              Explore The Majestic Asia Landscape Now
            </h1>
          </div>
        </div>

        {/* Form div */}
        <div className=" w-full flex items-center justify-center rounded-[35px] px-6 pt-[18px] pb-[48px] ">
          <img
            src={turkish}
            alt="turkish"
            className="bg-white rounded-[15px] px-4 py-3 mt-[-100px]"
          />
        </div>
        <div className="sm:w-[95%] md:w-[80%] mx-auto mb-[80px]">
          <div className="bg-white sm:px-[14px] md:px-5 pb-[30px] pt-[20px] mt-[-90px] z-30 rounded-[20px] shadow-xl ">
            {/* radio inputs */}
            <div className="flex items-start justify-start mb-[15px] gap-4">
              <div className="flex items-center justify-center gap-1 p-1">
                <input type="radio" />
                <p className="font-[poppins-medium] sm:text-[13px] md:text-[16px]">
                  Round Trip
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 p-1">
                <input type="radio" />
                <p className="font-[poppins-medium] sm:text-[13px] md:text-[16px]">
                  One way
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row sm:flex-col items-center w-full justify-center gap-2 relative">
              {/* from to divs */}
              <div className="flex sm:flex-col lg:flex-row sm:w-full lg:w-[40%] items-center justify-start gap-2 relative">
                <div className="flex items-center justify-start gap-2 border border-[#D6D6D6] border-solid rounded-lg sm:py-4 md:py-6 sm:px-3 md:px-4 cursor-pointer sm:w-full lg:w-[50%] ">
                  <img src={to} className="md:w-[20px] sm:w-[18px] object-cover " alt="from" />
                  <p className="font-[poppins-regular] sm:text-[13px] md:text-[16px] ">
                    From
                  </p>
                </div>

                <div className="flex items-center justify-start gap-2 border border-[#D6D6D6] border-solid rounded-lg sm:py-4 md:py-6 sm:px-3 md:px-5 cursor-pointer sm:w-full lg:w-[50%] ">
                  <img src={to} className="md:w-[24px] sm:w-[18px] object-cover " alt="from" />
                  <p className="font-[poppins-regular] sm:text-[13px] md:text-[16px] ">
                    To
                  </p>
                </div>

                <div className="absolute w-fit sm:top-[35%] lg:top-[25%] cursor-pointer sm:right-0 lg:left-[46%] bg-white border border-solid border-[#D6D6D6] rounded-lg p-2 ">
                  <img src={refresh} className="md:w-[24px] sm:w-[18px] object-cover " alt="from" />
                </div>
              </div>

              {/* calendar divs */}
              <div className="flex items-center py-[6px] justify-center border border-[#D6D6D6] border-solid rounded-lg cursor-pointer sm:w-full lg:w-[30%] ">
                <div className="flex w-2/4 items-center sm:px-3 md:px-4 sm:justify-start lg:justify-center gap-2 border-r border-solid border-[#D6D6D6] ">
                  <img src={calendar} alt="cal" className="md:w-[24px] sm:w-[18px] object-cover " />
                  <div>
                    <p className="text-[#878787] font-[poppins-regular] text-[12px] ">
                      Departure
                    </p>
                    <div className="flex md:flex-col sm:flexrow sm:items-center md:items-start sm:justify-center md:justify-start md:gap-0 sm:gap-2">
                      <p className="font-[poppins-regular] sm:text-[13px] md:text-[16px]">
                        23 Oct
                      </p>
                      <p className="text-[#878787] font-[poppins-regular] text-[12px]">
                        2024
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center sm:px-3 md:px-4 sm:justify-start lg:justify-center gap-2 w-2/4">
                  <img src={calendar} className="md:w-[24px] sm:w-[18px] object-cover " alt="cal" />
                  <div>
                    <p className="text-[#878787] font-[poppins-regular] text-[12px]">
                      Return
                    </p>
                    <p className="font-[poppins-regular] sm:text-[13px] md:text-[16px]">
                      Add
                    </p>
                  </div>
                </div>
              </div>

              {/* Passenger div */}
              <div className="flex items-center py-[6px] sm:px-3 md:px-4 sm:justify-start lg:justify-center border border-[#D6D6D6] border-solid rounded-lg cursor-pointer sm:w-full lg:w-[15%] ">
                <div className="flex items-center justify-center gap-2">
                  <img src={passenger} className="md:w-[24px] sm:w-[18px] object-cover " alt="pas" />
                  <div className="flex items-center flex-col justify-start">
                    <p className="text-[#878787] w-full text-left font-[poppins-regular] text-[12px]">
                      Passengers
                    </p>
                    <div className="flex md:flex-col sm:flexrow sm:items-center md:items-start sm:justify-center md:justify-start md:gap-0 sm:gap-2">
                      <p className="font-[poppins-regular] whitespace-nowrap sm:text-[13px] md:text-[16px]">
                        1 Passenger
                      </p>
                      <p className="text-[#878787] font-[poppins-regular] text-[12px]">
                        Business
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#009833] cursor-pointer sm:py-4 md:py-6 rounded-lg sm:w-full lg:w-[12%] justify-center flex items-center text-white text-[16px] font-[poppins-regular] ">
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>

        <Experience />
        <DestinationMain />
      </div>
      <Turkmenistan />
      <Tours />
      <HotelMain />
      <Testimonials />
      <BlogMain />
      <FAQ />

      {/* Online visa */}
      <div className="w-[90%] mb-[103px] mx-auto flex lg:flex-row sm:flex-col items-start justify-center gap-[45px]">
        <div onClick={() => navigate('/visa')} className="relative cursor-pointer sm:w-full lg:w-[55%] ">
          <img
            className="w-full object-cover rounded-[32px]"
            src={visa2}
            alt="visa"
          />
          <div className="absolute w-[90%] mx-auto flex items-end justify-between bottom-8 left-9">
            <div className="flex flex-col items-baseline justify-start gap-4">
              <h1 className="text-white sm:text-[16px] md:text-[50px] font-[poppins-semibold] ">
                Online Visa
              </h1>
              <p className="text-white sm:text-[12px] md:text-[14px] w-[70%] font-[poppins-regular]">
                Lorem ipsum dolor sit amet consectetur. Feugiat placerat ac
                ipsum tortor malesuada nibh id.
              </p>
            </div>

            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div onClick={() => navigate('/hotels')} className="relative cursor-pointer sm:w-full lg:w-[45%] ">
          <img
            className="sm:w-full lg:w-[89%] object-cover rounded-[32px]"
            src={visa}
            alt="visa"
          />
          <div className="absolute w-[78%] mx-auto flex items-end justify-between bottom-8 left-9">
            <div className="flex flex-col items-baseline justify-start gap-4">
              <h1 className="text-white sm:text-[16px] md:text-[50px] font-[poppins-semibold] ">
                Hotels
              </h1>
              <p className="text-white sm:text-[12px] md:text-[14px] w-[80%] font-[poppins-regular]">
                Lorem ipsum dolor sit amet consectetur. Feugiat placerat ac
                ipsum tortor malesuada nibh id.
              </p>
            </div>

            <img src={arrow} alt="arrow" className="object-cover md:w-[56px] sm:w-[25px] " />
          </div>
        </div>
      </div>
      <AreYouReady />
    </>
  );
};

export default Home;
