import React from "react";

import icon from "../images/404.svg";
import plane from "../images/404plane.svg";
import Navigation from "../components/navbars/Navigation";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <div className="flex items-center justify-center h-[100vh] bg-white">
        <div className="">
          <div className="relative w-full flex items-center justify-center">
            <img src={icon} alt="icon" className="absolute top-0 left-[20%]" />
            <img src={plane} alt="plane" className="z-10" />
          </div>

          <p className="w-full text-center text-[24px] font-[poppins-semibold] mt-[46px] mb-5">
            Bu sahypany tapyp bilmedik
          </p>
          <p className="text-[18px] font-[poppins-regular] text-[#878787] text-center mx-auto w-[80%]">
            Sahypa bozulyp ýa-da sahypa aýrylan bolmagy mümkin
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
