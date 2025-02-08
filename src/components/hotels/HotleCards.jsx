import React from "react";
import { useNavigate } from "react-router-dom";

import surat from "../../images/hotel.png";
import map from "../../images/map.svg";

const HotleCards = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      // onClick={() => navigate(`/hotel-inner/${item.id}`)}
      onClick={() => navigate(`/hotel-inner`)}
      className="w-full sm:h-[228px] md:h-[400px] cursor-pointer relative"
    >
      <div className="w-full h-full">
        <img
          // src={item?.main_image}
          src={surat}
          alt="surat"
          className="w-full -z-10 rounded-[11px] object-cover h-full"
        />
      </div>

      <div className="absolute rounded-lg sm:py-[9px] md:py-4 sm:px-[10px] md:px-5 mx-auto sm:left-2 md:left-3 sm:bottom-2 md:bottom-3 w-[90%] z-10 bg-white">
        <p className="sm:mb-[6px] md:mb-[13px] sm:text-[10px] md:text-[16px] font-[poppins-medium] ">
          {/* {item?.name} */} “ Ýyldyz ” hotel
        </p>
        <div className="w-full flex items-center justify-start sm:gap-1 md:gap-2">
          <img
            src={map}
            alt="map"
            className="object-cover sm:w-[8px] md:w-[15px] "
          />
          <p className="sm:text-[8px] md:text-[14px] font-[poppins-medium]">
            {" "}
            Turkmenistan
            {/* {item?.location} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotleCards;
