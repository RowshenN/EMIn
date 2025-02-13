import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import travel from "../images/bg-plane.png";
import { SebedimContext } from "../context/Context";

const AreYouReady = () => {
  const { dil } = useContext(SebedimContext);
  const navigate = useNavigate();
  return (
    <div className="w-full sm:mb-[99px] md:mb-[154px] flex items-center justify-center relative">
      <div className="z-10 flex flex-col items-center justify-center gap-[14px]">
        <h1 className="sm:text-[20px] md:text-[35px] font-[poppins-semibold] ">
          {dil === "tk"
            ? "Siz syýahata taýynmy?"
            : dil === "ru"
            ? "Вы готовы путешествовать?"
            : dil === "tr"
            ? "Seyahate hazır mısınız? "
            : "Are you ready to travel?"}
        </h1>
        <p className="sm:text-[12px] md:text-[18px] w-[80%] text-center font-[poppins-regular] ">
          {dil === "tk"
            ? "Onda biz bilen habarlaşyň, biz size iň gowy hyzmaty hödürleýäris."
            : dil === "ru"
            ? "Обращайтесь к нам, и мы с удовольствием предоставим вам лучший сервис."
            : dil === "tr"
            ? "Lütfen bizimle iletişime geçin, size en iyi hizmeti sunmaktan memnuniyet duyarız. "
            : "Then contact us, we are ready to provide you with the best service."}
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="text-white sm:text-[10px] md:text-[16px] font-[poppins-regular]  flex items-center justify-center bg-[#009833] outline-none border-none rounded-[15px] sm:px-3 md:px-5 py-[10px] "
        >
          {dil === "tk"
            ? "Habarlaşmak üçin"
            : dil === "ru"
            ? "Обращайтесь к нам"
            : dil === "tr"
            ? "Bizimle iletişime geçin"
            : "Contact us"}
        </button>
      </div>

      <div className="absolute w-full sm:top-0 md:top-0 -z-10 left-0">
        <img src={travel} alt="travel" className="w-full object-contain" />
      </div>
    </div>
  );
};

export default AreYouReady;
