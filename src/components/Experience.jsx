import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import surat from "../images/experience-img.png";
import arrow from "../images/experi-arrow.svg";
import mesage from "../images/mesage.svg";
import line from "../images/line.svg";
import safe from "../images/safe.svg";
import price from "../images/price.svg";
import { SebedimContext } from "../context/Context";

const Experience = () => {
  const { dil } = useContext(SebedimContext);
  const navigate = useNavigate();
  return (
    <div className="w-full lg:flex-row sm:flex-col flex items-center justify-between sm:gap-[45px] md:gap-[65px] sm:mb-[50px] md:mb-[100px]">
      <div className="lg:w-[45%] sm:w-full ">
        <div className="sm:mb-6 md:mb-[55px]">
          <h1 className="sm:text-[25px] md:text-[40px] lg:text-[50px] md:text-left sm:text-center font-[poppins-semibold] ">
            {dil === "tk"
              ? "Experience The New Adventure with Emin Hyzmat"
              : dil === "ru"
              ? "Получите новый опыт с Эмином Хызмат!"
              : dil === "tr"
              ? "Emin Hyzmat sayesinde yeni maceralar keşfedin!"
              : `Experience The New Adventure with Emin Hyzmat`}
          </h1>
          <img
            className="mt-[-17px] md:block sm:hidden"
            src={line}
            alt="line"
          />
        </div>

        <p className="text-[#878787] md:text-left sm:text-center sm:text-[12px] md:text-[16px] font-[poppins-medium] mb-[33px] ">
          {dil === "tk"
            ? "Emin Hyzmat Travel Agency bilen kynçylyksyz we ýatdan çykmajak syýahat tejribesi gazanyň!"
            : dil === "ru"
            ? "Доверьтесь Emin Hyzmat Travel Agency, и мы сделаем ваше путешествие легким и незабываемым! "
            : dil === "tr"
            ? "Emin Hyzmat Travel Agency olarak, sizlere stressiz ve unutulmaz bir seyahat deneyimi sunuyoruz!"
            : "At Emin Hyzmat Travel Agency, we are committed to making every journey stress-free and memorable. Let us take care of the details so you can focus on enjoying the adventure!"}
        </p>

        <div className="flex sm:items-start md:items-center justify-start sm:gap-4 md:gap-6 mb-[35px]">
          <img src={safe} alt="safe" />
          <div>
            <p className="sm:text-[18px] md:text-[22px] font-[poppins-semibold]">
              {dil === "tk"
                ? "Howpsuz Syýahat"
                : dil === "ru"
                ? "Безопасные путешествия "
                : dil === "tr"
                ? "Güvenli yolculuklar"
                : "Safe Travelling"}
            </p>
            <p className="text-[#878787] sm:text-[12px] md:text-[16px] font-[poppins-medium]">
              {dil === "tk"
                ? "24/7 Goldaw – Dünýäniň islendik ýerinde biz size kömek etmäge taýýar."
                : dil === "ru"
                ? "Круглосуточная поддержка – Мы всегда рядом, где бы вы ни находились. "
                : dil === "tr"
                ? "7/24 Destek – Nerede olursanız olun, her zaman yanınızdayız."
                : "24/7 Support – We are always here to assist you, wherever you are."}
            </p>
          </div>
        </div>

        <div className="flex sm:items-start md:items-center justify-start sm:gap-4 md:gap-6">
          <img src={price} alt="safe" />
          <div>
            <p className="sm:text-[18px] md:text-[22px] font-[poppins-semibold]">
              {dil === "tk"
                ? "Elýeter Baha"
                : dil === "ru"
                ? "Безопасные путешествия "
                : dil === "tr"
                ? "Uygun fiyat"
                : "Affordable Price"}
            </p>
            <p className="text-[#878787] sm:text-[12px] md:text-[16px] font-[poppins-medium]">
              {dil === "tk"
                ? "Myhmanhana Bron Edilmegi – Dünýäniň islendik nokadynda rahat we amatly myhmanhanalar."
                : dil === "ru"
                ? "Бронирование отелей – Комфортное размещение в проверенных отелях. "
                : dil === "tr"
                ? "Otel Rezervasyonları – Dünyanın dört bir yanında konforlu konaklama seçenekleri."
                : "Hotel Reservations – Comfortable stays at top-rated hotels worldwide."}
            </p>
          </div>
        </div>
      </div>

      <div className="sm:w-full lg:w-[55%] relative">
        <img src={surat} className="w-full object-contain -z-10" alt="surat" />
        <div className="absolute top-1 right-1 rounded-full sm:hidden md:flex items-center justify-center cursor-pointer sm:p-3 md:p-[17px] bg-[#009833] z-10">
          <img src={mesage} alt="mesage" className="object-contain w-full" />
        </div>

        <div
          onClick={() => navigate("/about")}
          className="absolute bottom-[5%] left-[5%] backdrop-blur-[4px] cursor-pointer bg-white/50 rounded-[50px] px-5 py-[10px] flex items-center justify-center gap-[10px] "
        >
          <p className="text-white sm:text-[12px] md:text-[18px] font-[poppins-medium] ">
            {dil === "tk"
              ? "Hakymyzda"
              : dil === "ru"
              ? "О нас"
              : dil === "tr"
              ? "Haberler"
              : "About us"}
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="md:w-[36px] sm:w-[18px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
