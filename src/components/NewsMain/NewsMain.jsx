import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import surat from "../../images/newsimg.png";
import dot from "../../images/dot.svg";
import arrow from "../../images/news-arrow.svg";
import arrow_btn from "../../images/arrow-btm.svg";
import NewsCards from "./NewsCards";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SebedimContext } from "../../context/Context";

// import required modules
import { Pagination } from "swiper/modules";
import { axiosInstance } from "../../utils/axiosInstance";
import formatDate from "../formatDate";

const NewsMain = () => {
  const { dil } = useContext(SebedimContext);
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  async function getAllNews(params) {
    axiosInstance.get("/guest/news/getAll").then((res) => {
      setNewsData(res?.data?.news);
      console.log(res?.data?.news);
    });
  }

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <div className="w-full lg:mb-[150px] mb-[100px]">
      <h1 className="w-full font-[outfit-semibold] text-white lg:text-[35px] text-[28px] mb-8 ">
        {dil === "en" ? "News" : "Habarlar"}
      </h1>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-6">
        <div
          onClick={() => navigate("/new-inner/" + newsData?.[0]?.uuid)}
          className="relative w-full sm:hidden md:block lg:block lg:w-[70%] cursor-pointer"
        >
          <div className="">
            <img
              src={newsData?.[0]?.img}
              alt="surat"
              className="w-full h-[460px] object-cover"
            />
          </div>
          <img
            src={arrow}
            alt="arrow"
            className="absolute top-5 right-5 w-[38px]"
          />
          <div className="absolute rounded-xl bottom-6 left-5 bg-white bg-opacity-75 py-[10px] px-4 w-[94%] flex items-end justify-between">
            <p className="w-[70%] font-[outfit-regular] text-[#007337] text-[13px] ">
              {dil === "en" ? newsData?.[0]?.name_en : newsData?.[0]?.name_tm}
            </p>

            <p className="w-[30%] flex items-center justify-end gap-1 pl-[2px] font-[outfit-light] text-[#00391A] text-[13px] text-right">
              {dil === "en" ? "News" : "Habarlar"} <img src={dot} alt="dot" />{" "}
              <span>{formatDate(newsData?.[0]?.createdAt)}</span>
            </p>
          </div>
        </div>

        <div className="lg:w-[30%] w-full h-full">
          {Array.from(newsData).map((item, i) => (
            <div
              key={i}
              className="mb-3 scrollHidden overflow-hidden max-h-[460px] lg:flex hidden flex-col items-start justify-start gap-3 h-full"
            >
              <NewsCards
                id={item?.uuid}
                header={dil === "en" ? item.name_en : item.name_tm}
                date={formatDate(item.createdAt)}
                hour={""}
              />
            </div>
          ))}

          <div className="w-full lg:hidden flex flex-col gap-5 items-center justify-start mb-5">
            {Array.from(newsData).map((item, i) => (
              <NewsCards
                header={dil === "en" ? item.name_en : item.name_tm}
                date={formatDate(item.createdAt)}
                hour={""}
                id={item?.uuid}
                key={i}
              />
            ))}
          </div>

          <button
            onClick={() => navigate("/news-list")}
            className="w-full text-[#00391A] text-[outfit-regular] text-[16px] bg-white rounded-xl flex items-center justify-center gap-2 py-2 px-3"
          >
            More <img className="w-[15px]" src={arrow_btn} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsMain;
