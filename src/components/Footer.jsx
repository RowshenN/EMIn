import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../images/footer-logo.svg";
import footer1 from "../images/footer1.svg";
import footer2 from "../images/footer2.svg";
import footer3 from "../images/footer3.svg";
import footer4 from "../images/footer4.svg";
import { SebedimContext } from "../context/Context";
import vector from "../images/Vector.svg";

const Footer = () => {
  const [tours, setTours] = useState(false);
  const { dil } = useContext(SebedimContext);
  const navigate = useNavigate();
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
  const year = currentDate.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;
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
          <p className="sm:w-[90%] md:w-[50%] text-[#7A7A7A] sm:text-[12px] md:text-[14px] font-[poppins-regular] ">
            {dil === "tk"
              ? "Emin Hyzmat syýahat agentligi bilen syýahat etmek has aňsat! Wiza kömegi, gezelençler we ygtybarly hyzmatlar bilen rahat syýahat üpjün edýäris."
              : dil === "ru"
              ? "Туристическое агентство Emin Hyzmat делает путешествия проще! Визовая поддержка, туры и надежный сервис – все, что нужно для комфортной поездки."
              : dil === "tr"
              ? "Emin Hyzmat seyahat acentesi ile seyahat etmek artık daha kolay! Vize desteği, turlar ve güvenilir hizmetlerle sorunsuz bir yolculuk sunuyoruz."
              : "Emin Hyzmat Travel Agency is here to make your travels easier. Whether you need visa support or exciting tour packages, we provide reliable and hassle-free services."}
          </p>
        </div>

        <div className="flex items-start sm:gap-10 md:gap-0 flex-wrap justify-between sm:w-[80%] md:w-[40%] ">
          <div className="flex flex-col justify-start items-baseline gap-[10px]">
            <p
              onClick={() => navigate("/about")}
              className="text-[14px] cursor-pointer font-[poppins-medium] "
            >
              {dil === "tk"
                ? "Biz barada"
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
              onMouseOver={() => setTours(true)}
              onMouseLeave={() => setTours(false)}
              className="flex relative text-[#717171] text-[14px] cursor-pointer font-[poppins-regular] w-fit flex-col items-start justify-start gap-2"
            >
              <div className="flex items-center  justify-center gap-2">
                {dil === "tk"
                  ? "Turlar"
                  : dil === "ru"
                  ? "Туры"
                  : dil === "tr"
                  ? "Turlar"
                  : "Tours"}{" "}
                <img src={vector} alt="vector" />
              </div>
              {tours && (
                <div
                  onMouseLeave={() => setTours(false)}
                  className="z-50 py-2 px-3 flex absolute bg-[#F9F9F9] bottom-5 left-0 flex-col gap-1 items-start rounded-[11px] justify-start"
                >
                  <p onClick={() => navigate(`/tours?type=${"turkmenistan"}`)}>
                    {dil === "tk"
                      ? "Türkmenistan"
                      : dil === "ru"
                      ? "Туркменистан"
                      : dil === "tr"
                      ? "Türkmenistan"
                      : "Turkmenistan"}
                  </p>
                  <p onClick={() => navigate(`/tours?type=${"others"}`)}>
                    {dil === "tk"
                      ? "Başgalar"
                      : dil === "ru"
                      ? "Другие"
                      : dil === "tr"
                      ? "Başka"
                      : "Others"}
                  </p>
                </div>
              )}
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
          {dil === "tk"
            ? "@Ähli hukuklar goralan"
            : dil === "ru"
            ? "@Все права защищены"
            : dil === "tr"
            ? "@Her hakkı saklıdır"
            : "@All rights reserved"}{" "}
          {formattedDate}
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
