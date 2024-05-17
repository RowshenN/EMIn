import React, { useState, useEffect, useContext } from "react";

import "./HomeMain.css";
import Address from "../address/Address";
import Navigation from "../navigation/Navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";
AOS.init({ duration: 700, delay: 150 });

const HomeMain = () => {
  const [aboutUs, setAboutUs] = useState([]);
  const { dil } = useContext(SebedimContext);

  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    await axiosInstance
      .get("guest/header")
      .then((res) => {
        console.log(res.data);
        setAboutUs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <Address />
      <Navigation />
      {aboutUs.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              backgroundImage: `linear-gradient(rgba(20, 20, 31, .7), rgba(20, 20, 31, .7)), url(${item.img})`,
            }}
            className="home_container"
          >
            <div className="home_inner_container">
              <div className="home_inner_div">
                <h1 data-aos="fade-down">
                  {dil === "tm"
                    ? item?.name_tm
                    : dil === "ru"
                    ? item?.name_ru
                    : item?.name_en}
                </h1>
                <p data-aos="fade-up">
                  {dil === "tm"
                    ? item?.desc_tm
                    : dil === "ru"
                    ? item?.desc_ru
                    : item?.desc_en}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default HomeMain;
