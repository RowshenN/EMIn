import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import icon from "../images/blog-svg.svg";
import blog1 from "../images/blog-1.png";
import blog2 from "../images/blog-2.png";
import blog3 from "../images/blog-3.png";
import arrow from "../images/green arrow.svg";
import HomeBlogCart from "./HomeBlogCart";
import { axiosInstance } from "../utils/axiosInstance";
import { SebedimContext } from "../context/Context";

const Blog = () => {
  const { dil } = useContext(SebedimContext);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getHotels();
  }, [dil]);

  const getHotels = async () => {
    await axiosInstance
      .get("/blogs", {
        headers: {
          "Accept-Language": dil,
        },
      })
      .then((res) => {
        setBlogs(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const NewBlogs = Array.from(blogs).slice(0, 4);
  return (
    <div className="md:w-[90%] xl:w-[80%] mx-auto sm:mb-[49px] md:mb-[82px]">
      <div className="w-full flex items-center justify-center sm:mb-[33px] md:mb-[80px] ">
        <div className="w-full mb-[40px] relative flex items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <h1 className="md:text-[50px] text-center sm:text-[26px] lg:text-[61px] font-[poppins-bold] z-10">
              {dil === "tk"
                ? "Blog"
                : dil === "ru"
                ? "Блог"
                : dil === "tr"
                ? "Blog"
                : "Blog"}
            </h1>
            <img
              src={icon}
              className="sm:mt-[-40px] md:w-full sm:w-[70%] md:mt-[-80px] object-contain ml-[-10px] -z-10"
              alt="icons"
            />
          </div>
        </div>
      </div>

      <div className="mb-[45px] sm:w-[94%] mx-auto md:w-full md:flex-row sm:flex-col flex items-start justify-between sm:gap-[17px] md:gap-[30px]">
        <div
          onClick={() => navigate(`/blog-inner/${NewBlogs[0].id}`)}
          className="sm:w-full md:w-[65%] cursor-pointer relative"
        >
          <img
            src={NewBlogs[0]?.banner}
            className="w-full object-cover rounded-[22px] sm:h-[275px] md:h-[658px]"
            alt="blog"
          />
          <p className="absolute sm:bottom-4 md:bottom-[25px] sm:left-4 md:left-[25px] text-white sm:text-[14px] md:text-[28px] font-[poppins-semibold] w-[60%] ">
            {NewBlogs[0]?.name}
          </p>
        </div>

        <div className="flex md:w-[35%] sm:w-full sm:flex-row md:flex-col items-baseline gap-[30px] justify-center">
          <HomeBlogCart item={NewBlogs[1]} />
          <HomeBlogCart item={NewBlogs[2]} />
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div
          onClick={() => navigate("/blog")}
          className="flex cursor-pointer items-center justify-center gap-2"
        >
          <p className="text-[#009833] sm:text-[12px] md:text-[18px] font-[poppins-medium] ">
            {dil === "tk"
              ? "Beýlekiler"
              : dil === "ru"
              ? "Другие"
              : dil === "tr"
              ? "Diğerleri"
              : "More"}
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="md:w-[25px] sm:w-[18px] object-cover h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
