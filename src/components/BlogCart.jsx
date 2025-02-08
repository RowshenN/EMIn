import React from "react";
import { useNavigate } from "react-router-dom";

import surat from "../images/blog-2.png";

const BlogCart = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      // onClick={() => navigate(`/blog-inner/${item.id}`)}
      onClick={() => navigate(`/blog-inner`)}
      className="cursor-pointer w-full "
    >
      <div className=" w-full rounded-[22px] mb-[18px]">
        <img
          // src={item?.banner}
          src={surat}
          alt="surat"
          className="w-full sm:h-[200px] md:h-[275px] xl:h-[314px] rounded-[22px] object-cover"
        />
      </div>

      <p className="sm:text-[16px] md:text-[24px] font-[poppins-semibold] line-clamp-1">
        {/* {item?.name} */} Hiking in the Karakum desert
      </p>
      <p className="sm:text-[14px] md:text-[16px] font-[poppins-regular] text-[#717171]">
        18 Oct 2024
      </p>
    </div>
  );
};

export default BlogCart;
