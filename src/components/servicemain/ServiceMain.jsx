import React, { useState, useEffect, useContext } from "react";

import "./ServiceMain.css";
import ServiceCard from "../../components/servicemain/card/ServiceCard";
import Header from "../../components/header/Header";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";

const ServiceMain = (props) => {
  const [aboutUs, setAboutUs] = useState([]);
  useEffect(() => {
    getAbout();
  }, []);

  const { dil } = useContext(SebedimContext);

  const getAbout = async () => {
    await axiosInstance
      .get("guest/services/getAll")
      .then((res) => {
        console.log(res.data);
        setAboutUs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div data-aos="fade-up" className="services_container">
      <div className="services_container_inner">
        <Header
          header={
            dil === "tm"
              ? "Biziň Hyzmatlarymyz"
              : dil === "ru"
              ? "Наши услуги"
              : "Our Services"
          }
          text={
            dil === "tm"
              ? "HYZMATLARYMYZ"
              : dil === "ru"
              ? "УСЛУГИ"
              : "SERVICES"
          }
        />
        <div data-aos="zoom-in-down" className="service_card_container">
          {aboutUs.map((item) => {
            return (
              <ServiceCard
                data-aos="fade-right"
                text={
                  dil === "tm"
                    ? item?.desc_tm
                    : dil === "ru"
                    ? item?.desc_ru
                    : item?.desc_en
                }
                header={
                  dil === "tm"
                    ? item?.name_tm
                    : dil === "ru"
                    ? item?.name_ru
                    : item?.name_en
                }
                key={item.id}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceMain);
