import React, { useState, useEffect, useContext } from "react";

import "./HomeMain.css";
import Address from "../address/Address";
import Navigation from "../navigation/Navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import surat from "../../images/bg-hero.jpg";
import { Carousel } from "antd";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";
AOS.init({ duration: 700, delay: 150 });

const HomeMain = () => {
  const [home, setHome] = useState([]);
  const { dil } = useContext(SebedimContext);
  const [images, setImages] = useState([]);

  const getAbout = async () => {
    await axiosInstance
      .get("guest/header")
      .then((res) => {
        console.log(res.data);
        setHome(res.data[0]);
        res.data[0].imgs.map((item) => {
          return setImages((image) => [...image, item.img]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const [index, setIndex] = useState(0);
  // function slider() {
  //   let len = images.length;
  //   console.log(images, ":jjjj", len, index);
  //   setIndex(0);
  //   if (index >= len) {
  //     setIndex(0);
  //   } else {
  //     console.log(index, ":index");
  //     setIndex(index + 1);
  //   }
  // }
  // setTimeout(() => {
  //   slider();
  // }, [4000]);

  useEffect(() => {
    getAbout();
    // slider();
  }, []);

  return (
    <React.Fragment>
      <Address />
      <Navigation />
      <div className="carousel">
        <Carousel
          autoplay
          autoplaySpeed={4000}
          speed={2500}
          effect="fade"
          dots={false}
        >
          {images.map((item) => {
            return (
              <div key={item.id} className="carousel_img_div top-[-50px]">
                <img src={item} alt="surat" />
                <div className="carousel-overlay"></div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="home_container">
        <div key={home.id} className="home_inner_container">
          <div className="home_inner_div">
            <h1 data-aos="fade-down">
              {dil === "tm"
                ? home?.name_tm
                : dil === "ru"
                ? home?.name_ru
                : home?.name_en}
            </h1>
            <p data-aos="fade-up">
              {dil === "tm"
                ? home?.desc_tm
                : dil === "ru"
                ? home?.desc_ru
                : home?.desc_en}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeMain;
