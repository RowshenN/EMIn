import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import icon from "../images/blog-svg.svg";
import blog1 from "../images/blog-1.png";
import arrow from "../images/green arrow.svg";
import HomeBlogCart from "./HomeBlogCart";
import { axiosInstance } from "../utils/axiosInstance";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    await axiosInstance
      .get("/blogs")
      .then((res) => {
        setBlogs(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const NewBlogs = Array.from(blogs).slice(0, 3);
  return (
    <div className="w-[80%] mx-auto mb-[82px]">
      <div className="w-full flex items-center justify-center mb-[80px] ">
        <div className="relative w-[32%] flex items-center justify-center">
          <h1 className="md:text-[50px] sm:text-[30px] lg:text-[61px] font-[poppins-bold] z-10">Blog</h1>
          <img src={icon} className="absolute top-0 -z-10 left-0" alt="icons" />
        </div>
      </div>

      <div className="mb-[45px] w-full md:flex-row sm:flex-col flex items-start justify-between gap-[30px]">
        <div
          onClick={() => navigate(`/blog-inner/${NewBlogs[0].id}`)}
          className="w-[801px] cursor-pointer relative"
        >
          <img
            src={NewBlogs[0]?.banner}
            className="w-full object-cover rounded-[22px] h-[658px]"
            alt="blog"
          />
          <p className="absolute bottom-[25px] left-[25px] text-white text-[28px] font-[poppins-semibold] w-[60%] ">
            {NewBlogs[0]?.name}
          </p>
        </div>

        <div className="flex sm:flex-row md:flex-col items-baseline gap-[30px] justify-center">
          <HomeBlogCart item={NewBlogs[1]} />
          <HomeBlogCart item={NewBlogs[2]} />
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div
          onClick={() => navigate("/blog")}
          className="flex cursor-pointer items-center justify-center gap-2"
        >
          <p className="text-[#009833] text-[18px] font-[poppins-medium] ">
            More
          </p>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
