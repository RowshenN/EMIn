import React, { useState, useEffect, useContext } from "react";

import "./Address.css";

import phone from "../../images/phone.png";
import email from "../../images/email.png";
import location from "../../images/location.png";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";

const Address = () => {
  const { dil, ChangeDil } = useContext(SebedimContext);
  const [lang, setLang] = useState(false);
  const [aboutUs, setAboutUs] = useState([]);
  useEffect(() => {
    getAbout();
  }, []);

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
  return (
    <div className="address_container">
      <div className="address_big_div">
        {Array.from(aboutUs).map((item) => {
          return (
            <div key={item.id} className="address_inner">
              <div className="address_inner_div">
                <img src={location} alt="location" />
                <p>
                  {dil === "tm"
                    ? item.adress
                    : dil === "ru"
                    ? "Дом 25, Гуртлы жилой комплекс"
                    : "Gurtly residential complex 25th house"}
                </p>
              </div>

              <div className="address_inner_div">
                <img src={phone} alt="location" />
                <p>{item.telNum}</p>
              </div>

              <div className="address_inner_div">
                <img src={email} alt="location" />
                <p>{item.email}</p>
              </div>
            </div>
          );
        })}

        <div className="address_inner_icons_div">
          <div
            onClick={() => setLang(!lang)}
            className="absolute top-2 text-[18px] right-[7%] cursor-pointer h-[30px]"
          >
            {dil === "tm" ? "TM" : dil === "ru" ? "RU" : "EN"}
          </div>
          {lang && (
            <div
              // onMouseEnter={() => setLang(true)}
              onMouseLeave={() => setLang(false)}
              className={
                (lang === true ? "flex " : " hidden ") +
                "fixed text-[20px] justify-evenly top-[40px] z-[200] border-t-[1px] rounded-[4px] border-t-[#efefef] right-[10px] h-[50px] leading-[50px] cursor-pointer bg-white w-[150px] pl-2 pr-2 pt-0 pb-0"
              }
            >
              <div
                onClick={() => ChangeDil("tm")}
                className="hover:text-black"
                style={{ color: "black" }}
              >
                TM
              </div>
              <div
                onClick={() => ChangeDil("ru")}
                className="hover:text-black"
                style={{ color: "black" }}
              >
                RU
              </div>
              <div
                onClick={() => ChangeDil("en")}
                className="hover:text-black"
                style={{ color: "black" }}
              >
                EN
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Address);
