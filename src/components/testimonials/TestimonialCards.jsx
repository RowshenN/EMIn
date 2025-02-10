import React from "react";

import icon from "../../images/testimonicon.svg";
import star from "../../images/testimon-star.svg";

const TestimonialCards = ({ item }) => {
  return (
    <div className="shadow-xl sm:p-4 md:p-7 bg-white cursor-pointer rounded-[20px]">
      <div>
        <div className="w-full flex items-center justify-between">
          <img
            className="object-cover md:w-[30px] sm:w-[20px] "
            src={icon}
            alt="icom"
          />
          <div className="flex items-center justify-center gap-2">
            <img src={star} alt="star" />
            <p className="sm:text-[14px] md:text-[16px] font-[poppins-semibold] ">
              {item?.rating}
            </p>
          </div>
        </div>

        <p className="sm:text-[12px] md:text-[16px] font-[poppins-medium] sm:mt-3 md:mt-7 sm:mb-3 md:mb-5">
          {item?.message}
        </p>
        <p className="sm:text-[14px] md:text-[18px] font-[poppins-bold]">
          {item?.full_name}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCards;
