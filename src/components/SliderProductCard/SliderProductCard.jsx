import React, { useContext } from "react";

import arrow from "../../images/news-arrow.svg";
import { Link } from "react-router-dom";
import { SebedimContext } from "../../context/Context";

const SliderProductCard = ({ item }) => {
  const { dil } = useContext(SebedimContext);
  return (
    <Link
      to={`/category-inner?categoryId=${item?.id}`}
      className="relative cursor-pointer h-full"
    >
      <img
        src={item?.img}
        alt="surat"
        className="w-full h-full object-cover rounded-[20px]"
      />
      <img
        src={arrow}
        alt="arrow"
        className="absolute top-3 right-2 w-[15%] "
      />
      <div className="text-[#007337] text-[13px] font-[manrope-medium] absolute bottom-3 right-3 bg-white bg-opacity-70 w-[91%] py-3 px-4 rounded-xl">
        <p>{dil == "en" ? item?.name_en : item?.name_tm}</p>
      </div>
    </Link>
  );
};

export default SliderProductCard;
