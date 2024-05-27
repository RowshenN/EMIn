import React, { useState, useEffect, useContext } from "react";

import "./History.css";
import Footer from "../../components/footer/Footer";
import HistoryCard from "./HistoryCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";
import Address from "../../components/address/Address";
import Navigation2 from "../../components/Navigation2/Navigation2";
import FixedIcons from "../../components/fixedIcons/FixedIcons";
AOS.init({ duration: 800, delay: 100 });

const History = () => {
  const { dil } = useContext(SebedimContext);
  // STATES
  const [news, setNews] = useState([]);
  //  STATES END

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    await axiosInstance
      .get("guest/history/getAll")
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
              <HistoryCard
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
      <FixedIcons />
      <Footer />
    </React.Fragment>
  );
};

export default History;
