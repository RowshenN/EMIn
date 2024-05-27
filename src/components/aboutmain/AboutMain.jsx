import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./AboutMain.css";
import IkiCyzyk from "../../components/ikicyzyk/IkiCyzyk";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";

const AboutMain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    getAbout();
  }, []);

  const { dil } = useContext(SebedimContext);

  const getAbout = async () => {
    await axiosInstance
      .get("guest/aboutUs")
      .then((res) => {
        setAboutUs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <div data-aos="fade-up" className="about_container">
        <div className="about_container_inner">
          {aboutUs.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <div data-aos="fade-right" className="about_img_div">
                  <img src={item.img} alt="surat" />
                </div>

                <div className="about_inner_text_container">
                  <div data-aos="fade-down" className="about_text_header_div">
                    <IkiCyzyk
                      text={
                        dil === "tm"
                          ? "BIZ BARADA"
                          : dil === "ru"
                          ? "О НАС"
                          : "ABOUT US"
                      }
                    />
                  </div>

                  <div data-aos="fade-up" className="about_text_text_div">
                    <h1>
                      <span>
                        {dil === "tm"
                          ? "Meşhur-Syýahata "
                          : dil === "ru"
                          ? ""
                          : ""}
                      </span>
                      {dil === "tm"
                        ? "Hoş Geldiňiz"
                        : dil === "ru"
                        ? "Добро пожаловать в"
                        : "Welcome to"}{" "}
                      <span>
                        {dil === "tm"
                          ? ""
                          : dil === "ru"
                          ? "Мешхур сыяхат"
                          : "Meshhur tour"}
                      </span>
                      {/* {aboutUs.name_en} */}
                    </h1>
                    <p>
                      {dil === "tm"
                        ? item?.desc_tm
                        : dil === "ru"
                        ? item?.desc_ru
                        : item?.desc_en}
                    </p>
                  </div>

                  {location.pathname !== "/about" && (
                    <button
                      onClick={() => navigate("/about")}
                      data-aos="fade-up"
                      className="about_button"
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
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(AboutMain);
