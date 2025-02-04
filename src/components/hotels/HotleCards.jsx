import React from "react";
import { useNavigate } from "react-router-dom";

// import surat from "../../images/hotel.png";
import map from "../../images/map.svg";

const HotleCards = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/hotel-inner/${item.id}`)}
      className="w-full h-[400px] cursor-pointer relative"
    >
      <div className="w-full h-full">
        <img
          src={item?.main_image}
          alt="surat"
          className="w-full -z-10 rounded-[11px] object-cover h-full"
        />
      </div>

      <div className="absolute rounded-lg py-4 px-5 mx-auto left-3 bottom-3 w-[90%] z-10 bg-white">
        <p className="mb-[13px] text-[16px] font-[poppins-medium] ">
          {item?.name}
        </p>
        <div className="w-full flex items-center justify-start gap-2">
          <img src={map} alt="map" />
          <p className="text-[14px] font-[poppins-medium]">{item?.location}</p>
        </div>
      </div>
    </div>
  );
};

export default HotleCards;
