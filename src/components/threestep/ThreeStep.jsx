import React, { useState, useEffect, useContext } from "react";

import "./ThreeStep.css";
import Header from "../header/Header";
import StepCard from "./StepCard";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";

const ThreeStep = () => {
  const [aboutUs, setAboutUs] = useState([]);
  useEffect(() => {
    getAbout();
  }, []);

  const { dil } = useContext(SebedimContext);

  const getAbout = () => {
    axiosInstance
      .get("guest/steps/getAll")
      .then((res) => {
        console.log(res.data);
        setAboutUs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div data-aos="zoom-in-right" className="threestep_container">
      <div className="threestep_inner_container">
        <Header
          header={
            dil === "tm"
              ? "Ýönekeý Başlangyçlar"
              : dil === "ru"
              ? "Простые действия"
              : "Easy Steps"
          }
          text={
            dil === "tm" ? "BAŞLANGYÇLAR" : dil === "ru" ? "ПРОЦЕСС" : "PROCESS"
          }
        />
        <div data-aos="zoom-in-left" className="threestep_card_container">
          {aboutUs.map((item) => {
            return (
              <StepCard
                img={item.img}
                key={item.id}
                header={
                  dil === "tm"
                    ? item?.name_tm
                    : dil === "ru"
                    ? item?.name_ru
                    : item?.name_en
                }
                description={
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
    </div>
  );
};

export default React.memo(ThreeStep);
