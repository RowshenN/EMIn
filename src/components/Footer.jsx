import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../images/footer-logo.svg";
import footer1 from "../images/footer1.svg";
import footer2 from "../images/footer2.svg";
import footer3 from "../images/footer3.svg";
import footer4 from "../images/footer4.svg";
import { SebedimContext } from "../context/Context";

const Footer = () => {
  const { dil } = useContext(SebedimContext);
  const navigate = useNavigate();
  return (
    <div className="w-[90%] mx-auto sm:px-5 md:px-[78px] sm:py-[27px] md:pt-[42px] md:pb-[33px] bg-[#F4F4F4] rounded-[20px] mb-[67px] ">
      <div className="flex md:flex-row sm:flex-col sm:items-baseline md:gap-0 sm:gap-10 md:items-center sm:justify-start md:justify-between w-full sm:pb-[60px] md:pb-[98px] border-b border-solid border-[#DADADA] ">
        <div className="flex items-baseline flex-col sm:w-[90%] md:w-[60%] justify-start gap-[19px]">
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer"
            src={logo}
            alt="logo"
          />
          <p className="sm:w-[90%] md:w-[28%] text-[#7A7A7A] sm:text-[12px] md:text-[14px] font-[poppins-regular] ">
            Lorem ipsum dolor sit amet consectetur pellentesque.{" "}
          </p>
        </div>

        <div className="flex items-start sm:gap-10 md:gap-0 flex-wrap justify-between sm:w-[80%] md:w-[40%] ">
          <div className="flex flex-col justify-start items-baseline gap-[10px]">
            <p
              onClick={() => navigate("/about")}
              className="text-[14px] cursor-pointer font-[poppins-medium] "
            >
              {dil === "tk"
                ? "Hakymyzda"
                : dil === "ru"
                ? "О нас"
                : dil === "tr"
                ? "Haberler"
                : "About us"}
            </p>
            <p
              onClick={() => navigate("/blog")}
              className="text-[#717171] text-[14px] cursor-pointer font-[poppins-regular] "
            >
              {dil === "tk"
                ? "Blog"
                : dil === "ru"
                ? "Блог"
                : dil === "tr"
                ? "Blog"
                : "Blog"}
            </p>
            <p
              onClick={() => navigate("/turkmenistan")}
              className="text-[#717171] text-[14px] cursor-pointer font-[poppins-regular]"
            >
              {dil === "tk"
                ? "Türkmenistan"
                : dil === "ru"
                ? "Туркменистан"
                : dil === "tr"
                ? "Türkmenistan"
                : "Turkmenistan"}
            </p>
            <p
              onClick={() => navigate("/contact")}
              className="text-[#717171] text-[14px] cursor-pointer font-[poppins-regular]"
            >
              {dil === "tk"
                ? "Habarlaşmak üçin"
                : dil === "ru"
                ? "Обращайтесь к нам"
                : dil === "tr"
                ? "Bizimle iletişime geçin"
                : "Contact us"}
            </p>
          </div>

          <div className="flex flex-col justify-start items-baseline gap-[10px]">
            <p
              onClick={() => navigate("/contact")}
              className="text-[14px] cursor-pointer font-[poppins-medium]"
            >
              FAQ
            </p>
            <p
              onClick={() => navigate("/tours")}
              className="text-[#717171] text-[14px] cursor-pointer font-[poppins-regular]"
            >
              {dil === "tk"
                ? "Turlar"
                : dil === "ru"
                ? "Туры"
                : dil === "tr"
                ? "Turlar"
                : "Tours"}
            </p>
            <p
              onClick={() => navigate("/hotels")}
              className="text-[#717171] text-[14px] cursor-pointer font-[poppins-regular]"
            >
              {dil === "tk"
                ? "Oteller"
                : dil === "ru"
                ? "Отели"
                : dil === "tr"
                ? "Oteller"
                : "Hotels"}
            </p>
            <p
              onClick={() => navigate("/visa")}
              className="text-[#717171] text-[14px] cursor-pointer font-[poppins-regular]"
            >
              {dil === "tk"
                ? "Visa"
                : dil === "ru"
                ? "Виза"
                : dil === "tr"
                ? "Visa"
                : "Visa"}
            </p>
          </div>

          <div className="flex flex-col justify-start items-baseline gap-[10px]">
            <p className="text-[14px] font-[poppins-medium]">
              {dil === "tk"
                ? "Ulanyş şertleri"
                : dil === "ru"
                ? "Условия использования"
                : dil === "tr"
                ? "Kullanım koşulları"
                : "Terms of use"}
            </p>
            <p className="text-[#717171] text-[14px] font-[poppins-regular]">
              {dil === "tk"
                ? "Gizlinlik syýasaty"
                : dil === "ru"
                ? "Политика конфиденциальности "
                : dil === "tr"
                ? "Gizlilik politikası"
                : "Privacy policy"}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-[30px] w-full md:flex-row sm:flex-col sm:gap-5 md:gap-0 flex items-center justify-between">
        <p className="text-[#717171] text-[14px] font-[poppins-regular]">
          Copyright 2024
        </p>

        <div className="flex items-center justify-center gap-[30px] ">
          <img src={footer1} alt="footer" />
          <img src={footer2} alt="footer" />
          <img src={footer3} alt="footer" />
          <img src={footer4} alt="footer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
