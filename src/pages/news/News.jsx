import React, { useState, useEffect, useContext } from "react";

import "./News.css";
import Footer from "../../components/footer/Footer";
import NewCard from "./NewCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";
import Address from "../../components/address/Address";
import Navigation2 from "../../components/Navigation2/Navigation2";
import telegram from "../../images/telegram.png";
import whatsapp from "../../images/whatsapp.png";

AOS.init({ duration: 800, delay: 100 });

const News = () => {
  const { dil } = useContext(SebedimContext);
  // STATES
  const [news, setNews] = useState([]);
  //  STATES END

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    await axiosInstance
      .get("guest/news/getAll")
      .then((res) => {
        setNews(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      {/* <HomeMain /> */}
      <Address />
      <Navigation2 />
      <div className="news_container">
        <div data-aos="zoom-in-up" className="news_inner_container">
          {news.map((item, i) => {
            return (
              <NewCard
                key={item.id}
                img={item.img}
                name={
                  dil === "tm"
                    ? item?.name_tm
                    : dil === "ru"
                    ? item?.name_ru
                    : item?.name_en
                }
                desc={
                  dil === "tm"
                    ? item?.desc_tm
                    : dil === "ru"
                    ? item?.desc_ru
                    : item?.desc_en
                }
              />
            );
          })}
        </div>
      </div>
      <div className="static_icons_div">
        <a
          className="bg-[#86B817] flex pt-3 pb-3 pr-3 pl-3 rounded-full items-center justify-center h-[50px] w-[50px] md:w-[75px] md:h-[75px] fixed right-[30px] bottom-[30px] md:right-[50px] md:bottom-[50px]"
          href="https://t.me/+993"
        >
          <img className="w-full h-full" src={telegram} alt="icon" />
        </a>
        <a
          className="bg-[#86B817] flex pt-3 pb-3 pr-3 pl-3 rounded-full items-center justify-center h-[50px] w-[50px] md:w-[75px] md:h-[75px] fixed left-[30px] bottom-[30px] md:left-[50px] md:bottom-[50px]"
          href="hhtps://wa.me/+993"
        >
          <img src={whatsapp} alt="icon" />
        </a>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default News;
