import React from "react";
import { useNavigate } from "react-router-dom";

import surat from "../../images/tour-img.png";
import map from "../../images/map.svg";
import clock from "../../images/clock-svg.svg";

const ToursCards = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/destination-inner/${item.id}`)} className="border bg-white cursor-pointer border-solid border-[#DADADA] rounded-[20px] px-3 pt-3 pb-[18px] ">
      <div className="w-full">
        <div className="mb-[10px] rounded-[11px] ">
          <img className="w-full" src={item?.main_image} alt="surat" />
        </div>

        <div className="border-b border-solid pb-5 mb-[10px] px-1 border-[#DADADA]">
          <p className="font-[poppins-medium] text-[16px] ">{item?.description}</p>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <img src={map} alt="map" />
            <p className="font-[poppins-medium] text-[14px] ">{item?.location}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={clock} alt="clock" />
            <p className="font-[poppins-medium] text-[14px] ">{`${item?.date_end - item?.date_start} days`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursCards;
