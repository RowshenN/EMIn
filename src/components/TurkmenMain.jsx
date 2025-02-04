import React from "react";
import { useNavigate } from "react-router-dom";

import surat from "../images/turkmenistan.png";
import arrow from "../images/green arrow.svg";

const Turkmenistan = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex h-full relative mb-[100px]">
      <div className="w-[90%] absolute flex flex-col items-center bottom-[5%] left-[5%] gap-[50px] justify-center mx-auto">
        <div className="w-full lg:block sm:hidden mb-[50px]">
          <div className="w-full flex items-center justify-between px-[105px] ">
            <div className="flex flex-col items-baseline justify-start gap-[5px] w-[350px] bg-white/50 px-[25px] py-[15px] rounded-[20px] backdrop-blur-md ">
              <p className="text-[18px] font-[poppins-medium] ">History</p>
              <p className="text-[14px] font-[poppins-regular] ">
                Lorem ipsum dolor sit amet consectetur. Pellentesque proin amet
                ec.
              </p>
            </div>
            <div className="flex flex-col items-baseline justify-start gap-[5px] w-[350px] bg-white/50 px-[25px] py-[15px] rounded-[20px] backdrop-blur-md ">
              <p className="text-[18px] font-[poppins-medium] ">Tradition</p>
              <p className="text-[14px] font-[poppins-regular] ">
                Lorem ipsum dolor sit amet consectetur. Pellentesque proin amet
                ec.
              </p>
            </div>
          </div>

          <div className="w-full flex items-center justify-between mt-7">
            <div className="flex flex-col items-baseline justify-start gap-[5px] w-[350px] bg-white/50 px-[25px] py-[15px] rounded-[20px] backdrop-blur-md ">
              <p className="text-[18px] font-[poppins-medium] ">History</p>
              <p className="text-[14px] font-[poppins-regular] ">
                Lorem ipsum dolor sit amet consectetur. Pellentesque proin amet
                ec.
              </p>
            </div>
            <div className="flex flex-col items-baseline justify-start gap-[5px] w-[350px] bg-white/50 px-[25px] py-[15px] rounded-[20px] backdrop-blur-md ">
              <p className="text-[18px] font-[poppins-medium] ">Tradition</p>
              <p className="text-[14px] font-[poppins-regular] ">
                Lorem ipsum dolor sit amet consectetur. Pellentesque proin amet
                ec.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div
            onClick={() => navigate("/turkmenistan")}
            className="cursor-pointer bg-white flex items-center justify-center gap-2 rounded-[50px] py-[10px] sm:px-3 md:px-5 "
          >
            <p className="text-[#009833] sm:text-[12px] md:text-[18px] font-[poppins-medium] ">
              More Info
            </p>
            <img src={arrow} alt="arrow" className="object-cover md:w-[36px] sm:w-[22px] " />
          </div>
        </div>
      </div>
      <div className="object-cover w-full -z-20">
        <img
          src={surat}
          alt="suart"
          className="object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Turkmenistan;
