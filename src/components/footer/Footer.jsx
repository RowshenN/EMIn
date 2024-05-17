import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Footer.css";
import { FaGreaterThan } from "react-icons/fa6";

// import Address from "../address/Address";
import phone from "../../images/phone.png";
import email from "../../images/email.png";
import location from "../../images/location.png";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";

const Footer = () => {
  const [gallery, setGallery] = useState([]);
  const [aboutUs, setAboutUs] = useState([]);
  const locationUse = useLocation();
  const { dil } = useContext(SebedimContext);

  useEffect(() => {
    getGallery();
    getAbout();
  }, []);

  const getGallery = async () => {
    await axiosInstance
      .get("guest/gallery/getAll")
      .then((res) => {
        console.log(res.data);
        setGallery(res.data.slice(0, 6));
      })
      .catch((err) => console.log(err));
  };

  const getAbout = async () => {
    await axiosInstance
      .get("guest/contact")
      .then((res) => {
        console.log(res.data);
        setAboutUs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navigate = useNavigate();
  return (
    <div className="footer_container">
      <div className="footer_inner_container">
        <div className="footer_company_div">
          <h1>
            {dil === "tm" ? "Kompaniýa" : dil === "ru" ? "Компания" : "Company"}
          </h1>
          <div onClick={() => navigate("/")} className="footer_company_inner">
            <FaGreaterThan className="company_inner_icon" />
            <p>{dil === "tm" ? "Esasy" : dil === "ru" ? "Главная" : "Home"}</p>
          </div>

          <div
            onClick={() => navigate("/about")}
            className="footer_company_inner"
          >
            <FaGreaterThan className="company_inner_icon" />
            <p>
              {dil === "tm"
                ? "Biz barada"
                : dil === "ru"
                ? "О нас"
                : "About Us"}
            </p>
          </div>

          <div
            onClick={() => navigate("/service")}
            className="footer_company_inner"
          >
            <FaGreaterThan className="company_inner_icon" />
            <p>
              {dil === "tm"
                ? "Hyzmatlar"
                : dil === "ru"
                ? "Услуги"
                : "Services"}
            </p>
          </div>

          <div
            onClick={() => navigate("/packages")}
            className="footer_company_inner"
          >
            <FaGreaterThan className="company_inner_icon" />
            <p>
              {dil === "tm"
                ? "Syýahatlar"
                : dil === "ru"
                ? "Экскурсии"
                : "Tours"}
            </p>
          </div>

          <div
            onClick={() => navigate("/news")}
            className="footer_company_inner"
          >
            <FaGreaterThan className="company_inner_icon" />
            <p>
              {dil === "tm" ? "Täzelikler" : dil === "ru" ? "Новости" : "News"}
            </p>
          </div>
        </div>

        {locationUse.pathname !== "/contact" && (
          <div className="footer_contact_div">
            <h1>
              {dil === "tm"
                ? "Habarlaşmak"
                : dil === "ru"
                ? "Для Контакт"
                : "Contact"}
            </h1>
            {aboutUs.map((item) => {
              return (
                <div key={item.id} className="footer_contact_inner_div">
                  <div className="footer_contact">
                    <img src={location} alt="surat" />
                    <p>
                      {dil === "tm"
                        ? item.adress
                        : dil === "ru"
                        ? "Дом 25, Гуртлы жилой комплекс"
                        : "Gurtly residential complex 25th house"}
                    </p>
                  </div>

                  <div className="footer_contact">
                    <img src={phone} alt="surat" />
                    <p>{item.telNum}</p>
                  </div>

                  <div className="footer_contact">
                    <img src={email} alt="surat" />
                    <p>{item.email}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="footer_gallery_div">
          <h1>
            {dil === "tm" ? "Suratlar" : dil === "ru" ? "Галерея" : "Gallery"}
          </h1>
          <div
            onClick={() => navigate("/gallery")}
            className="footer_gallery_iner_div"
          >
            {gallery.map((item) => {
              return (
                <div key={item.id} className="footer_gallery_img_div">
                  <img src={item.img} alt="about" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);
