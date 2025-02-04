import React from "react";

import icon from "../../images/testimonicon.svg";
import star from "../../images/testimon-star.svg";

const TestimonialCards = () => {
  return (
    <div className="shadow-xl sm:p-4 md:p-7 bg-white cursor-pointer rounded-[20px]">
      <div>
        <div className="w-full flex items-center justify-between">
          <img className="object-cover md:w-[30px] sm:w-[20px] " src={icon} alt="icom" />
          <div className="flex items-center justify-center gap-2">
            <img src={star} alt="star" />
            <p>4.5</p>
          </div>
        </div>
 
        <p className="sm:text-[12px] md:text-[16px] font-[poppins-medium] sm:mt-3 md:mt-7 sm:mb-3 md:mb-5">
          We chose this hotel for our honeymoon and it was perfect. The romantic
          atmosphere and special touches made it unforgettable.
        </p>
        <p className="sm:text-[14px] md:text-[18px] font-[poppins-bold]">Henry Patrick</p>
      </div>
    </div>
  );
};

export default TestimonialCards;
