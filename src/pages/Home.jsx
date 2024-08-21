import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import NewsMain from "../components/NewsMain/NewsMain";
import HomeProductSlider from "../components/HomeProductSlider/HomeProductSlider";
import star from "../images/star.svg";
import up from "../images/status-up.svg";
import lock from "../images/lock.svg";
import message from "../images/messages.svg";
import clock from "../images/clock.svg";
import ProductsMain from "../components/ProductsMain/ProductsMain";
import ContactMain from "../components/ContactMain/ContactMain";
import { SebedimContext } from "../context/Context";

const Home = () => {
  const { dil } = useContext(SebedimContext);
  const navigate = useNavigate();
  console.log(useContext(SebedimContext));
  return (
    <div className="lg:w-[95%] w-full px-6 mx-auto">
      <div className="mt-[70px] lg:w-[55%] w-full lg:mb-[290px] mb-[100px] md:mb-[170px] ">
        <h1 className="text-white lg:text-[55px] text-[40px] font-[outfit-semibold] mb-3 leading-snug ">
          {dil == "en"
            ? "Your Trusted Source of High-Quality Chemical Solutions"
            : "Ýokary hilli himiki çözgütleriň ygtybarly çeşmesi"}
        </h1>

        <p className="text-white lg:text-[18px] text-[15px] w-[85%] font-[outfit-light] lg:mb-12 mb-8 ">
          {dil == "en"
            ? "Supplying Turkmenistan's diverse industries with essential chemicals for detergent, food, gas, paint solvents, plastics, and more"
            : "Türkmenistanyň dürli pudaklaryny zerur himiki maddalar bilen üpjün etmek ýuwujy serişdeler, iýmit, gaz, boýag erginleri, plastmassa we ş.m."}
        </p>

        <button className="lg:w-[220px] w-[190px] bg-white rounded-2xl py-4 px-5 font-[outfit-regular] text-[#00391A] text-[15px]">
          {dil == "en" ? "Explore Our Products" : "Önümlerimizi öwreniň"}
        </button>
      </div>

      <NewsMain />
      <HomeProductSlider />

      {/* stars div */}
      <div className="w-full flex flex-col lg:flex-row items-start justify-between mb-[100px]">
        <div className="lg:w-[40%] md:w-full  w-full mb-[40px] md:mb-0">
          <h1 className="text-white font-[outfit-semibold] text-[27px] md:text-[35px] mb-5">
            {dil === "en"
              ? "Your Complete Chemical Solutions Provider"
              : "Doly himiki çözgütler bilen üpjün edijiňiz"}
          </h1>
          <p className="text-white font-[outfit-light] text-[15px] mb-8">
            {dil === "en"
              ? "We go beyond simply supplying chemicals. Ragbat-dag offers a comprehensive suite of services designed to streamline your operations and enhance your business performance. From expert sourcing and reliable delivery to technical support and specialized solutions, we're your partner in maximizing the potential of your chemical needs."
              : "Diňe himiki maddalar bilen üpjün etmekden has ýokary. Ragbat-dag a tertipleşdirmek üçin döredilen giňişleýin hyzmatlar toplumy amallar we iş netijäňizi ýokarlandyrmak. Hünärmenden tehniki goldaw we ýöriteleşdirilen gözleg we ygtybarly gowşuryş çözgütler, potensialyňyzy artdyrmakda siziň hyzmatdaşyňyzdyrys himiki zerurlyklar."}
          </p>
          <button
            onClick={() => navigate("/service")}
            className="bg-white rounded-2xl py-4 px-5 font-[outfit-regular] w-[130px] text-[#00391A] text-[15px] "
          >
            More Info
          </button>
        </div>

        <div className=" flex justify-center w-full lg:w-[70%]   -z-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
            <div className="relative w-full">
              <img className="w-full" src={star} alt="star" />
              <div className="absolute px-2 top-[-12px] h-full right-1 flex items-center flex-col justify-center gap-4">
                <img src={up} alt="up" className="" />
                <p className="text-center w-[80%] text-[#00391A] font-[outfit-medium] text-[16px] ">
                  {dil === "en"
                    ? "Chemical Sourcing & Procurement"
                    : "Himiki gözleg we satyn alyşlar"}
                </p>
                <p className="text-center w-[80%] text-[#026533] font-[outfit-light] text-[14px] ">
                  {dil === "en"
                    ? "Finding the right chemicals at competitive prices, handling import logistics, and navigating international regulations."
                    : "Bäsdeşlik bahalarynda dogry himiki serişdeleri tapmak, işlemek logistika import etmek we halkara düzgünnamalary nawigasiýa etmek."}
                </p>
              </div>
            </div>

            <div className="relative w-full">
              <img className="w-full" src={star} alt="star" />
              <div className="absolute px-10 top-[-12px] h-full right-1 flex items-center flex-col justify-center gap-4">
                <img src={clock} alt="up" className="" />
                <p className="text-center w-[80%] text-[#00391A] font-[outfit-medium] text-[16px] ">
                  {dil === "en" ? "Quality Assurance" : "Hil kepilligi"}
                </p>
                <p className="text-center w-[80%] text-[#026533] font-[outfit-light] text-[14px] ">
                  {dil === "en"
                    ? "Thorough product testing and/or working with suppliers who maintain strict quality control."
                    : "Önümi düýpli barlamak we / ýa-da üpjün edijiler bilen işlemek berk hil gözegçiligini saklamaly."}
                </p>
              </div>
            </div>

            <div className="relative w-full">
              <img className="w-full" src={star} alt="star" />
              <div className="absolute px-10 top-[-12px] h-full right-1 flex items-center flex-col justify-center gap-4">
                <img src={lock} alt="up" className="" />
                <p className="text-center w-[80%] text-[#00391A] font-[outfit-medium] text-[16px] ">
                  {dil === "en"
                    ? "Inventory Management"
                    : "Öwreniş dolandyryşy"}
                </p>
                <p className="text-center w-[80%] text-[#026533] font-[outfit-light] text-[14px] ">
                  {dil === "en"
                    ? "Maintaining stock levels, ensuring product availability, and potentially offering just-in-time delivery services to clients."
                    : "Müşderiler bir stocka derejesini saklamak, önümiň elýeterliligini üpjün etmek we wagtynda eltip bermek hyzmatlaryny hödürläp biler."}
                </p>
              </div>
            </div>

            <div className="relative w-full">
              <img className="w-full" src={star} alt="star" />
              <div className="absolute px-10 top-[-12px] h-full right-1 flex items-center flex-col justify-center gap-4">
                <img src={message} alt="up" className="" />
                <p className="text-center w-[80%] text-[#00391A] font-[outfit-medium] text-[16px] ">
                  {dil === "en" ? "Technical Support" : "Tehniki goldaw"}
                </p>
                <p className="text-center w-[80%] text-[#026533] font-[outfit-light] text-[14px] ">
                  {dil === "en"
                    ? "Providing safety data sheets (SDS), advice on chemical usage, appropriate handling, and waste disposal."
                    : "Howpsuzlyk maglumatlary sahypalaryny (SDS) bermek, himiki ulanmak boýunça maslahatlar, degişli işlemek we galyndylary zyňmak."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:ml-[50px] lg:hidden grid md:hidden grid-cols-2 gap-4"></div>
      </div>

      <ProductsMain visibility={true} />
      <ContactMain />
    </div>
  );
};

export default Home;
