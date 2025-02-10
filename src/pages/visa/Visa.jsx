import React, { useState, useContext } from "react";

import surat from "../../images/visamain.png";
// import line from "../images/visa-line.svg";
// import avatar from "../images/visa-avatar.png";

// import down from "../images/visa-down-vector.svg";

import Navigation from "../../components/navbars/Navigation";
import AreYouReady from "../../components/AreYouReady";

import Gelyan from "./Gelyan";
import Gidyan from "./Gidyan";
import { SebedimContext } from "../../context/Context";

const Visa = () => {
  const [gelyan, setGelyan] = useState(true);
  const { dil } = useContext(SebedimContext);
  // Gelyanler

  // Gidyanler

  return (
    <>
      <Navigation />
      <div className="lg:w-full sm:w-[94%] mx-auto ">
        <div className="mt-10 sm:w-full md:w-[90%] mx-auto sm:mb-[235px] md:mb-[370px]">
          <div className="w-full relative sm:mb-10 md:mb-[64px] ">
            <img
              src={surat}
              alt="surat"
              className="rounded-[23px] sm:h-[123px] md:h-full w-full object-cover"
            />
            <p className="absolute top-[35%] sm:left-[40%] xs:left-[45%] text-white md:text-[35px] sm:text-[26px] lg:text-[50px] font-[poppins-semibold] ">
              {dil === "tk"
                ? "Visa"
                : dil === "ru"
                ? "Виза"
                : dil === "tr"
                ? "Visa"
                : "Visa"}
            </p>
          </div>

          {/* <div className="w-[90%] mx-auto flex items-start justify-center gap-[80px]">
          <form className="w-[50%]">
            <h1 className="text-[32px] font-[poppins-semibold] mb-4 ">
              Choose country
            </h1>
            <p className="text-[16px] font-[poppins-regular] mb-6">
              Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
              phasellus lorem viverra massa purus platea.
            </p>

            <select name="" defaultValue={"Choose"} id="">
              <option value="Choose">Option</option>
            </select>

            <p className="text-[16px] font-[poppins-regular] mb-6">
              Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
              phasellus lorem viverra massa purus platea.
            </p>

            <div className="flex w-full flex-col items-baseline justify-start gap-[5px] mb-6 ">
              <label
                className="text-[16px] font-[poppins-regular]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-[80%] text-[16px] font-[poppins-regular] outline-none border border-[#D9D9D9] bg-[#FCFCFC] py-[13px] sm:px-4 md:px-7 rounded-[9px] "
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>

            <div className="flex w-full flex-col items-baseline justify-start gap-[5px] mb-6 ">
              <label
                className="text-[16px] font-[poppins-regular]"
                htmlFor="surname"
              >
                Surname
              </label>
              <input
                className="w-[80%] text-[16px] font-[poppins-regular] outline-none border border-[#D9D9D9] bg-[#FCFCFC] py-[13px] sm:px-4 md:px-7 rounded-[9px] "
                type="text"
                id="surname"
                placeholder="Surname"
              />
            </div>

            <div className="flex w-full flex-col items-baseline justify-start gap-[5px] mb-6 ">
              <label
                className="text-[16px] font-[poppins-regular]"
                htmlFor="surname"
              >
                Surname
              </label>
              <input
                className="w-[80%] text-[16px] font-[poppins-regular] outline-none border border-[#D9D9D9] bg-[#FCFCFC] py-[13px] sm:px-4 md:px-7 rounded-[9px] "
                type="text"
                id="surname"
                placeholder="Surname"
              />
            </div>

            <div className="flex w-full flex-col items-baseline justify-start gap-[5px] mb-[58px] ">
              <label
                className="text-[16px] font-[poppins-regular]"
                htmlFor="surname"
              >
                Surname
              </label>
              <input
                className="w-[80%] text-[16px] font-[poppins-regular] outline-none border border-[#D9D9D9] bg-[#FCFCFC] py-[13px] sm:px-4 md:px-7 rounded-[9px] "
                type="text"
                id="surname"
                placeholder="Surname"
              />
            </div>

            <div className="cursor-pointer w-fit">
              <p className="text-[16px] font-[poppins-medium] mb-2">Send information</p>
              <img src={line} alt="line" />
            </div>
          </form>

          <div className="w-[50%] border border-[#D6D6D6] rounded-[20px] px-[37px] pt-[32px] pb-[100px] ">
            <p className="text-[21px] font-[poppins-medium] ">Required documents *</p>

            <p className="mt-[21px] mb-[29px] text-[16px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
              phasellus lorem viverra massa purus platea.
            </p>

            <img src={avatar} alt="avatar" />

            <p className="mb-[21px] mt-[29px] text-[16px] font-[poppins-regular]">Lorem ipsum dolor sit amet consectetur.</p>

            <p className="mb-[21px] text-[16px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
              phasellus lorem viverra massa purus platea.
            </p>

            <p className="mb-[21px] text-[16px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Arcu mattis amet tellus
              est vitae molestie volutpat. Turpis montes eu pellentesque sed
              vulputate hac elementum a sociis.
            </p>

            <p className="mb-[21px] text-[16px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
              phasellus lorem viverra massa purus platea.
            </p>

            <p className="text-[16px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Arcu mattis amet tellus
              est vitae molestie volutpat. Turpis montes eu pellentesque sed
              vulputate hac elementum a sociis.
            </p>
          </div>
        </div> */}

          <div className="sm:w-full md:w-[90%] mx-auto ">
            <div className="w-full flex items-center justify-center gap-5 sm:pb-7 md:mb-[60px] ">
              <div
                onClick={() => setGelyan(true)}
                className={
                  gelyan
                    ? "text-white cursor-pointer sm:py-[10px] md:py-[15px] sm:px-[39px] md:px-[34px] bg-[#009833] rounded-[15px] sm:text-[12px] md:text-[20px] font-[poppins-medium] "
                    : "text-black cursor-pointer sm:py-[10px] md:py-[15px] sm:px-[39px] md:px-[34px] bg-[#F4F4F4] rounded-[15px] sm:text-[12px] md:text-[20px] font-[poppins-medium] "
                }
              >
                <p>
                  {dil === "tk"
                    ? "Gelýän"
                    : dil === "ru"
                    ? "Прибытие"
                    : dil === "tr"
                    ? "Geliş"
                    : "Incoming"}
                </p>
              </div>

              <div
                onClick={() => setGelyan(false)}
                className={
                  gelyan
                    ? " text-black cursor-pointer sm:py-[10px] md:py-[15px]  sm:px-[39px] md:px-[34px] bg-[#F4F4F4] rounded-[15px] sm:text-[12px] md:text-[20px] font-[poppins-medium] "
                    : "text-white cursor-pointer sm:py-[10px] md:py-[15px]  sm:px-[39px] md:px-[34px] bg-[#009833]  rounded-[15px] sm:text-[12px] md:text-[20px] font-[poppins-medium] "
                }
              >
                <p> {dil === "tk"
                    ? "Gidýän"
                    : dil === "ru"
                    ? "Отправление"
                    : dil === "tr"
                    ? "Gidiş"
                    : "Outgoing"}</p>
              </div>
            </div>
            {gelyan ? <Gelyan /> : <Gidyan />}
          </div>
        </div>

        <AreYouReady />
      </div>
    </>
  );
};

export default Visa;
