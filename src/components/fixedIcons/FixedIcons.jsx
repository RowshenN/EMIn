import React, { useState, useEffect } from "react";

import "./FixedIcons.css";
import telegram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg";
import { axiosInstance } from "../../utils/axiosInstance";

const FixedIcons = () => {
  const [aboutUs, setAboutUs] = useState([]);
  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    await axiosInstance
      .get("guest/contact")
      .then((res) => {
        setAboutUs(res.data[0]);
        console.log(aboutUs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="static_icons_div">
      <a
        className="bg-[#86B817] flex pt-3 pb-3 pr-3 pl-3 rounded-full items-center justify-center h-[50px] w-[50px] md:w-[75px] md:h-[75px] fixed right-[30px] bottom-[30px] md:right-[50px] md:bottom-[50px]"
        href={`https://t.me/${aboutUs.teleNum}`}
      >
        <img className="w-full h-full" src={telegram} alt="icon" />
      </a>
      <a
        className="bg-[#86B817] flex pt-3 pb-3 pr-3 pl-3 rounded-full items-center justify-center h-[50px] w-[50px] md:w-[75px] md:h-[75px] fixed left-[30px] bottom-[30px] md:left-[50px] md:bottom-[50px]"
        href={`hhtps://wa.me/${aboutUs.whatNum}`}
      >
        <img src={whatsapp} alt="icon" />
      </a>
    </div>
  );
};

export default FixedIcons;
