import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Destination.css";
import Header from "../header/Header";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";

const Destination = () => {
  const [gallery, setGallery] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getGallery();
  }, []);

  const { dil } = useContext(SebedimContext);

  const getGallery = async () => {
    await axiosInstance
      .get("guest/gallery/getAll")
      .then((res) => {
        console.log(res.data.slice(0, 4));
        setGallery(res.data.slice(0, 4));
      })
      .catch((err) => console.log(err));
  };

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

            <div className="destination_img_description">
              <h1>
                {dil === "tm"
                  ? `${gallery[0]?.name_tm}`
                  : dil === "ru"
                  ? `${gallery[0]?.name_ru}`
                  : `${gallery[0]?.name_en}`}
              </h1>
            </div>
          </div>

          <div data-aos="zoom-in-left" className="destination_photo_div2">
            <img src={gallery[1]?.img} alt="surat" />

            <div className="destination_img_description">
              <h1>
                {dil === "tm"
                  ? `${gallery[1]?.name_tm}`
                  : dil === "ru"
                  ? `${gallery[1]?.name_ru}`
                  : `${gallery[1]?.name_en}`}
              </h1>
            </div>
          </div>

          <div data-aos="zoom-in-up" className="destination_photo_div">
            <img src={gallery[2]?.img} alt="surat" />

            <div className="destination_img_description">
              <h1>
                {dil === "tm"
                  ? `${gallery[2]?.name_tm}`
                  : dil === "ru"
                  ? `${gallery[2]?.name_ru}`
                  : `${gallery[2]?.name_en}`}
              </h1>
            </div>
          </div>

          <div className="destination_photo_div">
            <img src={gallery[3]?.img} alt="surat" />

            <div className="destination_img_description">
              <h1>
                {dil === "tm"
                  ? `${gallery[3]?.name_tm}`
                  : dil === "ru"
                  ? `${gallery[3]?.name_ru}`
                  : `${gallery[3]?.name_en}`}
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center md:justify-end">
          {location.pathname !== "/gallery" && (
            <button
              onClick={() => navigate("/gallery")}
              data-aos="fade-up"
              className="destination_button"
              style={{ outline: "none" }}
            >
              {dil === "tm"
                ? "Köpräk"
                : dil === "ru"
                ? "Подробнее"
                : "Read more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Destination);
