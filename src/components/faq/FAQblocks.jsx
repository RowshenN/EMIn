import React, { useState } from "react";

import dash from "../../images/dash.svg";
import plus from "../../images/plus.svg";

const FAQblocks = ({ head, def }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={
        open
          ? "w-full cursor-pointer shadow-xl rounded-[13px] border border-solid border-[#ECECEC] bg-white px-6 py-7  "
          : "w-full cursor-pointer rounded-[13px] border border-solid border-[#ECECEC] bg-[#FAFAFA] px-6 py-7  "
      }
    >
      <div className="flex items-start -z-20 justify-start gap-4">
        <img
          className={open ? "hidden" : "block sm:mt-2 md:mt-0 md:w-[38px] sm:w-[18px]"}
          src={plus}
          alt="plus"
        />
        <img
          className={open ? "block z-30 sm:mt-2 md:mt-0 md:w-[38px] sm:w-[18px] " : "hidden"}
          src={dash}
          alt="dash"
        />
        <div>
          <p className="mb-4 mt-2 sm:text-[12px] md:text-[18px] font-[poppins-medium]">
            {head}
          </p>
          {open && (
            <p className="sm:text-[10px] md:text-[16px] font-[poppins-regular]">
              {def}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQblocks;
