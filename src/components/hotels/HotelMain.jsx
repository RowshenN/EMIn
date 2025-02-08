import React, { useEffect, useState } from "react";
import HotleCards from "./HotleCards";

import icon from "../../images/hotel-round.svg";
import { axiosInstance } from "../../utils/axiosInstance";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    await axiosInstance
      .get("/hotels")
      .then((res) => {
        setHotels(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hotelmains = hotels.slice(0, 8);

  return (
    <div className="w-full relative sm:mb-[90px] md:mb-[148px]">
      <div className="w-[80%] mx-auto z-10 ">
        <div className="w-full flex items-center sm:justify-center md:justify-between sm:mb-[30px] md:mb-[70px]">
          <h1 className="sm:text-[30px] lg:text-[50px] font-[poppins-semibold] ">
            Hotels
          </h1>
          <button className="text-[18px] md:block sm:hidden text-[#009833] font-[poppins-medium] ">
            More
          </button>
        </div>

        <div className="w-full grid sm:gap-[15px] md:gap-[30px] sm:grid-cols-2 md:grid-cols-auto-fill-250">
          {hotelmains?.map((item) => {
            return <HotleCards key={item.id} item={item} />;
          })}
        </div>
      </div>

      <img
        src={icon}
        alt="icon"
        className="absolute w-fit bottom-[-80px] right-0 -z-10 "
      />
    </div>
  );
};

export default Hotels;
