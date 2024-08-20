import React from "react";
import { useNavigate } from "react-router-dom";

import dot from "../../images/dot.svg";

const NewsCards = ({ header, date, hour }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/new-inner/1")}
      className="w-full bg-white bg-opacity-80 rounded-2xl p-4 cursor-pointer"
    >
      <p className="line-clamp-4 leading-7 text-[#007337] font-[outfit-regular] text-[14px] mb-3 ">
        {header}
      </p>

      <div>
        <p className="flex items-center justify-start gap-2 text-[#00391A] font-[outfit-light] text-[14px] ">
          News <img src={dot} alt="dot" />{" "}
          <span className="text-[#009E45] font-[outfit-light] text-[13px] ">
            {date} {hour}
          </span>
        </p>
      </div>
    </div>
  );
};

export default NewsCards;
