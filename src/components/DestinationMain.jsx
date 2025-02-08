import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import surat1 from "../images/1.png";
import surat2 from "../images/2.png";
import surat3 from "../images/3.png";
import surat4 from "../images/4.png";
import surat5 from "../images/5.png";
import surat6 from "../images/6.png";
import { axiosInstance } from "../utils/axiosInstance";

const Destinations = () => {
  const navigate = useNavigate();

  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    await axiosInstance
      .get("/destinations/top")
      .then((res) => {
        setDestinations(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full sm:mb-[50px] md:mb-[100px]">
      <h1 className="sm:text-[18px] md:text-[24px] lg:text-[30px] font-[poppins-semibold] ">
        Top Destinations
      </h1>
      <p className="text-[#878787] sm:text-[12px] md:text-[14px] lg:text-[16px] font-[poppins-medium]">
        Lorem ipsum dolor sit amet consectetur. Cras vitae auctor feugiat
        egestas feugiat aliquam fusce.
      </p>

      <div className="w-full flex md:flex-row sm:flex-col items-start justify-center sm:gap-3 md:gap-[15px] 1xl:gap-[30px] mt-[55px]">
        <div className="flex w-full sm:gap-3 md:gap-[15px] xl:gap-[30px] items-start justify-center">
          <div className="w-full flex flex-col justify-start items-baseline sm:gap-3 md:gap-[15px] xl:gap-[30px]">
            <div
              onClick={() =>
                navigate(`/destination-inner/${destinations[0]?.id}`)
              }
              className="relative w-full cursor-pointer"
            >
              <img
                src={destinations[0]?.main_image}
                alt="surat"
                className="w-full sm:h-[122px] md:h-[210px] xl:h-[285px] rounded-[10px] object-cover"
              />
              <p className="absolute sm:bottom-4 md:bottom-[26px] sm:left-4 md:left-[26px] text-white sm:text-[10px] md:text-[20px] font-[poppins-medium] ">
                {destinations[0]?.name}
              </p>
            </div>

            <div
              onClick={() =>
                navigate(`/destination-inner/${destinations[1]?.id}`)
              }
              className="relative w-full sm:h-[122px] md:h-[210px] xl:h-[285px] cursor-pointer"
            >
              <img
                src={destinations[1]?.main_image}
                alt="surat"
                className="w-full h-full rounded-[10px] object-cover"
              />
              <p className="absolute sm:bottom-4 md:bottom-[26px] sm:left-4 md:left-[26px] text-white sm:text-[10px] md:text-[20px] font-[poppins-medium]">
                {destinations[1]?.name} 
              </p>
            </div>
          </div>

          <div
            onClick={() =>
              navigate(`/destination-inner/${destinations[2]?.id}`)
            }
            className="relative sm:h-[257px] md:h-[435px] xl:h-[600px] w-full cursor-pointer"
          >
            <img
              src={destinations[2]?.main_image}
              alt="surat"
              className="w-full h-full"
            />
            <p className="absolute sm:bottom-4 md:bottom-[26px] sm:left-4 md:left-[26px] text-white sm:text-[10px] md:text-[20px] font-[poppins-medium]">
              {destinations[2]?.name} 
            </p>
          </div>
        </div>

        <div className="sm:w-full md:w-[45%] flex flex-col items-baseline sm:gap-3 md:gap-[15px] xl:gap-[30px] justify-start">
          <div
            onClick={() =>
              navigate(`/destination-inner/${destinations[3]?.id}`)
            }
            className="relative w-full sm:h-[180px] md:h-[210px] xl:h-[285px] cursor-pointer"
          >
            <img
              src={destinations[3]?.main_image}
              alt="surat"
              className="w-full h-full rounded-[10px] object-cover"
            />
            <p className="absolute sm:bottom-4 md:bottom-[26px] sm:left-4 md:left-[26px] text-white sm:text-[10px] md:text-[20px] font-[poppins-medium]">
              {destinations[3]?.name}
            </p>
          </div>

          <div className="w-full flex items-center sm:gap-3 md:gap-[15px] xl:gap-[30px] justify-start ">
            <div
              onClick={() =>
                navigate(`/destination-inner/${destinations[4]?.id}`)
              }
              className="relative w-[208px] md:h-[210px] xl:h-[285px] cursor-pointer"
            >
              <img
                src={destinations[4]?.main_image}
                className="w-full md:h-[210px] xl:h-[285px] rounded-[10px] object-cover"
                alt="surat"
              />
              <p className="absolute sm:bottom-4 md:bottom-[26px] sm:left-4 md:left-[26px] text-white sm:text-[10px] md:text-[20px] font-[poppins-medium]">
                {destinations[4]?.name}
              </p>
            </div>

            <div
              onClick={() =>
                navigate(`/destination-inner/${destinations[5]?.id}`)
              }
              className="relative w-[291px] md:h-[210px] xl:h-[285px] cursor-pointer"
            >
              <img
                src={destinations[5]?.main_image}
                className="w-full md:h-[210px] xl:h-[285px] rounded-[10px] object-cover"
                alt="surat"
              />
              <p className="absolute sm:bottom-4 md:bottom-[26px] sm:left-4 md:left-[26px] text-white sm:text-[10px] md:text-[20px] font-[poppins-medium]">
                {destinations[5]?.name} 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
