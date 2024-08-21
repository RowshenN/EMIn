import React, { useContext } from "react";
import Header from "../components/Header";

import clock from "../images/clock.svg";
import message from "../images/messages.svg";
import lock from "../images/lock.svg";
import up from "../images/status-up.svg";
import { SebedimContext } from "../context/Context";

const Service = () => {
  const { dil } = useContext(SebedimContext);
  return (
    <div className="lg:w-[95%] w-full px-6 mx-auto">
      <Header header={dil == "en" ? "Services" : "Hyzmatlar"} visible={false} />

      <div className="w-full">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          {dil === "en"
            ? "Your Complete Chemical Solutions Provider"
            : "Doly himiki çözgütler üpjün edijiňiz"}
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          {dil === "en"
            ? "We go beyond simply supplying chemicals. Ragbat-dag offers a comprehensive suite of services designed to streamline your operations and enhance your business performance. From expert sourcing and reliable delivery to technical support and specialized solutions, we're your partner in maximizing the potential of your chemical needs."
            : "Diňe himiki maddalar bilen üpjün etmekden has ýokary. Ragbat-dag a amallaryňyzy tertipleşdirmek üçin döredilen giňişleýin toplumlaýyn hyzmatlar toplumy we iş netijäňizi ýokarlandyrmak. Hünärmen gözleginden we tehniki goldawa we ýöriteleşdirilen çözgütlere ygtybarly gowşuryş,  himiki zerurlyklaryňyzy artdyrmakda siziň hyzmatdaşyňyzdyrys."}
        </p>
      </div>

      <div className="w-full mt-[70px] mb-[120px]">
        <div className="w-full flex items-center justify-center mb-8">
          <div className="w-[310px] bg-[#ECFFF5] p-6 rounded-2xl">
            <img src={clock} alt="clock" />
            <p className="w-full my-3 font-[outfit-medium] text-[#00391A] text-[20px]">
              {dil === "en" ? "Quality Assurance" : "Hil kepilligi"}
            </p>
            <p className="font-[outfit-light] text-[#026533] text-[16px] ">
              {dil === "en"
                ? "Thorough product testing and/or working with suppliers who maintain strict quality control."
                : "Önümi düýpli barlamak we / ýa-da üpjün edijiler bilen işlemek berk hil gözegçiligini saklamaly."}
            </p>
          </div>
        </div>

        <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-8">
          <div className="w-[310px] bg-[#ECFFF5] p-6 rounded-2xl">
            <img src={up} alt="clock" />
            <p className="w-full my-3 font-[outfit-medium] text-[#00391A] text-[20px]">
              {dil === "en"
                ? "Chemical Sourcing & Procurement"
                : "Himiki gözleg we satyn alyşlar"}
            </p>
            <p className="font-[outfit-light] text-[#026533] text-[16px] ">
              {dil === "en"
                ? "Finding the right chemicals at competitive prices, handling import logistics, and navigating international regulations."
                : "Bäsdeşlik bahalarynda dogry himiki serişdeleri tapmak, işlemek logistika import etmek we halkara düzgünnamalary nawigasiýa etmek."}
            </p>
          </div>
          <div className="w-[310px] bg-[#ECFFF5] p-6 rounded-2xl">
            <img src={lock} alt="clock" />
            <p className="w-full my-3 font-[outfit-medium] text-[#00391A] text-[20px]">
              {dil === "en" ? "Inventory Management" : "Öwreniş dolandyryşy"}
            </p>
            <p className="font-[outfit-light] text-[#026533] text-[16px] ">
              {dil === "en"
                ? "Maintaining stock levels, ensuring product availability, and potentially offering just-in-time delivery services to clients."
                : "Müşderiler bir stocka derejesini saklamak, önümiň elýeterliligini üpjün etmek we wagtynda eltip bermek hyzmatlaryny hödürläp biler."}
            </p>
          </div>
          <div className="w-[310px] bg-[#ECFFF5] p-6 rounded-2xl">
            <img src={message} alt="clock" />
            <p className="w-full my-3 font-[outfit-medium] text-[#00391A] text-[20px]">
              {dil === "en" ? "Technical Support" : "Tehniki goldaw"}
            </p>
            <p className="font-[outfit-light] text-[#026533] text-[16px] ">
              {dil === "en"
                ? "Providing safety data sheets (SDS), advice on chemical usage, appropriate handling, and waste disposal."
                : "Howpsuzlyk maglumatlary sahypalaryny (SDS) bermek, himiki ulanmak boýunça maslahatlar, degişli işlemek we galyndylary zyňmak."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
