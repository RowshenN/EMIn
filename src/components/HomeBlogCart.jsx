import React from "react";
import { useNavigate } from "react-router-dom";

import surat from "../images/blog-2.png";

const HomeBlogCart = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog-inner/${item.id}`)}
      className="w-full relative cursor-pointer"
    >
      <div className="w-full sm:h-[200px]  md:h-[314px]">
        <img
          src={item?.banner}
          className="w-full h-full rounded-[22px] object-cover"
          alt="blog"
        />
      </div>
      <div className="bg-black/30 px-4 pt-2 sm:pb-2 md:pb-4 bottom-0 left-0 absolute w-full rounded-[22px] ">
        <p className=" line-clamp-2  text-white sm:text-[10px] md:text-[28px] font-[poppins-semibold] w-[60%] ">
          {item?.name}
        </p>
      </div>
    </div>
  );
};

export default HomeBlogCart;
