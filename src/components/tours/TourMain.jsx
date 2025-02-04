import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToursCards from "./ToursCards";

import svg from "../../images/vector-with-plane.svg";
import tour from "../../images/tour-fvg.svg";
import arrow from "../../images/green arrow.svg";
import { axiosInstance } from "../../utils/axiosInstance";

const Tours = () => {
  const navigate = useNavigate()
  const [local, setLocal] = useState(true);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    await axiosInstance
      .get("/destinations")
      .then((res) => {
        setDestinations(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tourMains = destinations?.slice(0, 8);

  return (
    <div className="w-full relative mb-[130px]">
      <div className="mb-[53px]">
        <div className="w-full mb-[50px] flex items-center justify-center">
          <div className=" ">
            <p className="sm:text-[30px] lg:text-[50px] text-center font-[poppins-semibold] ">
              Tours
            </p>
            <img src={svg} alt="svg" className="mt-[-100px] ml-[-10px] -z-10" />
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-4 mb-[50px]">
          <div
            onClick={() => setLocal(true)}
            className={
              local
                ? "cursor-pointer text-[16px] font-[poppins-medium] flex items-center justify-center bg-[#009833] rounded-lg text-white py-2 px-[22px]"
                : "cursor-pointer text-[16px] font-[poppins-medium] flex items-center justify-center bg-[#F4F4F4] rounded-lg text-black py-2 px-[22px]"
            }
          >
            Other countries
          </div>
          <div
            onClick={() => setLocal(false)}
            className={
              local
                ? "cursor-pointer text-[16px] font-[poppins-medium] flex items-center justify-center bg-[#F4F4F4] rounded-lg text-black py-2 px-[22px]"
                : "cursor-pointer text-[16px] font-[poppins-medium] flex items-center justify-center bg-[#009833] rounded-lg text-white py-2 px-[22px]"
            }
          >
            Turkmenistan
          </div>
        </div>

        <div className="w-[80%] mx-auto grid gap-[30px] grid-cols-auto-fill-250 ">
          {tourMains?.map((item) => {
            return <ToursCards key={item.id} item={item} />;
          })}
        </div>
      </div>

      <img className="absolute w-fit sm:bottom-[30%] lg:bottom-0 left-0 -z-10 " src={tour} alt="tour" />

      <div className="w-full flex items-center justify-center">
        <div onClick={() => navigate("/tours")} className="flex items-center justify-center gap-[10px]">
          <button className="text-[#009833] text-[18px] font-[poppins-medium] ">
            More
          </button>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Tours;
