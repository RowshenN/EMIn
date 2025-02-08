import React from "react";
import { useNavigate } from "react-router-dom";

import surat from '../images/blog-2.png'

const HomeBlogCart = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog-inner/${item.id}`)}
      className="w-full cursor-pointer relative"
    >
      <div className="w-full">
        <img
          src={item?.banner}
          className="w-full sm:h-[200px] md:h-[314px] rounded-[22px] object-cover"
          alt="blog"
        />
      </div>
      <p className="absolute line-clamp-2 sm:bottom-3 md:bottom-[25px] sm:left-3 md:left-[25px] text-white sm:text-[10px] md:text-[28px] font-[poppins-semibold] w-[60%] ">
        {item?.name} 
      </p>
    </div>
  );
};

export default HomeBlogCart;
