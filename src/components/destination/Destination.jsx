import React, { useState, useEffect, useContext } from "react";

import "./Destination.css";
import Header from "../header/Header";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";

const Destination = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery();
  }, []);

  const { dil } = useContext(SebedimContext);

  const getGallery = async () => {
    await axiosInstance
      .get("guest/gallery/getAll")
      .then((res) => {
        console.log(res.data);
        setGallery(res.data.slice(0, 4));
      })
      .catch((err) => console.log(err));
  };

  console.log(Array.from(gallery));

  return (
    <div className="destination_container">
      <div data-aos="zoom-in" className="destination_inner_container">
        <Header
          sagcyzyk={true}
          header={
            dil === "tm"
              ? "Meşhur Ýerler"
              : dil === "ru"
              ? "Популярное место назначения"
              : "Popular Destination"
          }
          text={
            dil === "tm"
              ? "BARMALY  ÝERLER"
              : dil === "ru"
              ? "МЕСТО НАЗНАЧЕНИЯ"
              : "DESTINATION"
          }
        />
        <div className="destination_photos_container">
          <div data-aos="zoom-in-right" className="destination_photo_div1">
            <img src={gallery[0]?.img} alt="surat" />
          </div>

          <div data-aos="zoom-in-left" className="destination_photo_div2">
            <img src={gallery[1]?.img} alt="surat" />
          </div>

          <div data-aos="zoom-in-up" className="destination_photo_div">
            <img src={gallery[2]?.img} alt="surat" />
          </div>

          <div data-aos="zoom-in-up" className="destination_photo_div">
            <img src={gallery[3]?.img} alt="surat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Destination);
