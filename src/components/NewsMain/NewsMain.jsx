import React, { useEffect, useState } from "react";
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

// import required modules
import { Pagination } from "swiper/modules";
import { axiosInstance } from "../../utils/axiosInstance";

const NewsMain = () => {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  async function getAllNews(params) {
    axiosInstance.get("/guest/news/getAll").then((res) => {
      setNewsData(res?.data);
    });
  }
  useEffect(() => {
    getAllNews();
  }, []);
  return (
    <div className="w-full lg:mb-[150px] mb-[100px]">
      <h1 className="w-full font-[outfit-semibold] text-white lg:text-[35px] text-[28px] mb-8 ">
        News
      </h1>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-6">
        <div
          onClick={() => navigate("/new-inner/1")}
          className="relative w-full sm:hidden md:block lg:block lg:w-[70%] cursor-pointer"
        >
          <img src={newsData?.[0]?.img} alt="surat" />
          <img
            src={arrow}
            alt="arrow"
            className="absolute top-5 right-5 w-[38px]"
          />
          <div className="absolute rounded-xl bottom-6 left-5 bg-white bg-opacity-75 py-[10px] px-4 w-[94%] flex items-end justify-between">
            <p className="w-[70%] font-[outfit-regular] text-[#007337] text-[13px] ">
              {newsData?.[0]?.name_en}
            </p>

            <p className="w-[30%] flex items-center justify-end gap-1 pl-[2px] font-[outfit-light] text-[#00391A] text-[13px] text-right">
              News <img src={dot} alt="dot" />{" "}
              <span>{newsData?.[0]?.createdAt}</span>
            </p>
          </div>
        </div>

        <div className="lg:w-[30%] w-full h-full">
          {newsData.map((item, i) => (
            <div
              key={i}
              className="mb-3 overflow-hidden max-h-[460px] lg:flex hidden flex-col items-start justify-start gap-3 h-full"
            >
              <NewsCards
                header={item.name_en}
                date={item.createdAt}
                hour={"12:50"}
              />
            </div>
          ))}

          <div className="hidden lg:hidden">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="relative h-[225px] flex w-full"
              scrollbar={false}
            >
              <SwiperSlide>
                <NewsCards
                  header={
                    "Absolut Bank has completed the implementation and adaptation of MaxPatrol SIEM to the updated infrastructure as part of import substitution"
                  }
                  date={"11 март 2023"}
                  hour={"12:50"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <NewsCards
                  header={
                    "Absolut Bank has completed the implementation and adaptation of MaxPatrol SIEM to the updated infrastructure as part of import substitution"
                  }
                  date={"11 март 2023"}
                  hour={"12:50"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <NewsCards
                  header={
                    "Absolut Bank has completed the implementation and adaptation of MaxPatrol SIEM to the updated infrastructure as part of import substitution"
                  }
                  date={"11 март 2023"}
                  hour={"12:50"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <NewsCards
                  header={
                    "Absolut Bank has completed the implementation and adaptation of MaxPatrol SIEM to the updated infrastructure as part of import substitution"
                  }
                  date={"11 март 2023"}
                  hour={"12:50"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <NewsCards
                  header={
                    "Absolut Bank has completed the implementation and adaptation of MaxPatrol SIEM to the updated infrastructure as part of import substitution"
                  }
                  date={"11 март 2023"}
                  hour={"12:50"}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="w-full lg:hidden flex flex-col gap-5 items-center justify-start mb-5">
            <NewsCards
              header={
                "Absolut Bank has completed the implementation and adaptation of MaxPatrol SIEM to the updated infrastructure as part of import substitution"
              }
              date={"11 март 2023"}
              hour={"12:50"}
            />
            <NewsCards
              header={
                "Absolut Bank has completed the implementation and adaptation of MaxPatrol SIEM to the updated infrastructure as part of import substitution"
              }
              date={"11 март 2023"}
              hour={"12:50"}
            />
            <NewsCards
              header={
                "Absolut Bank has completed the implementation and adaptation of MaxPatrol SIEM to the updated infrastructure as part of import substitution"
              }
              date={"11 март 2023"}
              hour={"12:50"}
            />
            <NewsCards
              header={
                "Absolut Bank has completed the implementation and adaptation of MaxPatrol SIEM to the updated infrastructure as part of import substitution"
              }
              date={"11 март 2023"}
              hour={"12:50"}
            />
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
