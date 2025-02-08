import React from "react";
import { useNavigate } from "react-router-dom";

import travel from "../images/bg-plane.png";

const AreYouReady = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full mb-[154px] flex items-center justify-center relative">
      <div className="z-10 flex flex-col items-center justify-center gap-[14px]">
        <h1 className="sm:text-[20px] md:text-[35px] font-[poppins-semibold] ">
          Are you ready to travel?
        </h1>
        <p className="sm:text-[12px] md:text-[18px] w-[80%] text-center font-[poppins-regular] ">
          Then contact us, we are ready to provide you with the best service.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="text-white sm:text-[10px] md:text-[16px] font-[poppins-regular]  flex items-center justify-center bg-[#009833] outline-none border-none rounded-[15px] sm:px-3 md:px-5 py-[10px] "
        >
          Contact us
        </button>
      </div>

      <div className="absolute w-full sm:top-0 md:top-0 -z-10 left-0">
        <img src={travel} alt="travel" className="w-full object-contain" />
      </div>
    </div>
  );
};

export default AreYouReady;
