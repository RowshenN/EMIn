import React from "react";
import { useNavigate } from "react-router-dom";

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
          className="w-full h-[314px] rounded-[22px] object-cover"
          alt="blog"
        />
      </div>
      <p className="absolute line-clamp-2 bottom-[25px] left-[25px] text-white text-[28px] font-[poppins-semibold] w-[60%] ">
        {item?.name}
      </p>
    </div>
  );
};

export default HomeBlogCart;
