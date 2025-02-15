import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// import surat from "../../images/tour-img.png";
import map from "../../images/map.svg";
import clock from "../../images/clock-svg.svg";
import { SebedimContext } from "../../context/Context";

const ToursCards = ({ item, type_param }) => {
  const { dil } = useContext(SebedimContext);
  function daysBetween(startDateString, endDateString) {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    // Calculate the difference in milliseconds
    const diffInMs = Math.abs(endDate - startDate);

    // Convert milliseconds to days
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
  }

  const startDate = item?.date_start;
  const endDate = item?.date_end;
  const days = daysBetween(startDate, endDate);

  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/destination-inner/${item.id}?type=${type_param}`)
      }
      className="border bg-white cursor-pointer border-solid border-[#DADADA] rounded-[11px] sm:px-[7px] md:px-3 sm:pt-[7px] md:pt-3 pb-[18px] "
    >
      <div className="w-full">
        <div className="mb-[10px]">
          <img
            className="w-full rounded-[11px] sm:h-[150px] md:h-[222px] object-cover"
            src={item?.main_image}
            alt="surat"
          />
        </div>

        <div className="border-b border-solid pb-5 mb-[10px] px-1 border-[#DADADA]">
          <p className="font-[poppins-medium] sm:text-[10px] md:text-[16px] line-clamp-2 ">
            {item?.description}
          </p>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center sm:gap-1 md:gap-2">
            <img
              src={map}
              alt="map"
              className="object-cover md:w-[22px] sm:w-[11px] "
            />
            <p className="font-[poppins-medium] sm:text-[8px] md:text-[14px] ">
              {item?.location}
            </p>
          </div>
          <div className="flex items-center justify-center sm:gap-1 md:gap-2">
            <img
              src={clock}
              alt="clock"
              className="object-cover md:w-[22px] sm:w-[11px] "
            />
            <p className="font-[poppins-medium] sm:text-[8px] md:text-[14px] ">
              {days}{" "}
              {days > 0
                ? dil === "tk"
                  ? "gün"
                  : dil === "ru"
                  ? "дни"
                  : dil === "tr"
                  ? "gün"
                  : "days"
                : dil === "tk"
                ? "gün"
                : dil === "ru"
                ? "день"
                : dil === "tr"
                ? "gün"
                : "day"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursCards;
