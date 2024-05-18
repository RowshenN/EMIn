import React, { useState, useEffect, useContext } from "react";

import "./PackageMain.css";
import Header from "../header/Header";
import Card from "./Card";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";

const PackageMain = () => {
  const [packages, setPakages] = useState([]);
  const { dil } = useContext(SebedimContext);

  useEffect(() => {
    getPackages();
  }, []);

  const getPackages = async () => {
    await axiosInstance
      .get("guest/tours/getAll")
      .then((res) => {
        setPakages(res.data);
        console.log(res.data[0][0].price);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="packages_container">
      <div data-aos="zoom-in-right" className="packages_inner_container">
        <Header
          header={
            dil === "tm"
              ? "Ajaýyp Syýahatlar"
              : dil === "ru"
              ? "Удивительные экскурсии"
              : "Awesome Tours"
          }
          text={
            dil === "tm" ? "SYÝAHATAR" : dil === "ru" ? "ЭКСКУРСИИ" : "TOURS"
          }
        />
        <div data-aos="zoom-in-down" className="packages_inner_cards">
          {packages.map((item) => {
            return (
              <Card
                key={item.id}
                img={item.img}
                location={
                  dil === "tm"
                    ? item?.loc_tm
                    : dil === "ru"
                    ? item?.loc_ru
                    : item?.loc_en
                }
                wagt={item.date}
                persons={item.persons}
                description={
                  dil === "tm"
                    ? item?.desc_tm
                    : dil === "ru"
                    ? item?.desc_ru
                    : item?.desc_en
                }
                price={item?.price == 0 ? "" : item?.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(PackageMain);
