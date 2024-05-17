import React from "react";

import "./Home.css";
import AboutMain from "../../components/aboutmain/AboutMain";
import ServiceMain from "../../components/servicemain/ServiceMain";
import Destination from "../../components/destination/Destination";
// import ThreeStep from "../../components/threestep/ThreeStep";
import Footer from "../../components/footer/Footer";
import HomeMain from "../../components/homemain/HomeMain";
import PackageMain from "../../components/packageMain/PackageMain";
import telegram from "../../images/telegram.png";
import whatsapp from "../../images/whatsapp.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 800, delay: 100 });

const Home = () => {
  return (
    <React.Fragment>
      <HomeMain />
      <div className="home_about_container">
        <AboutMain />
        <ServiceMain />
        <Destination />
        <PackageMain />
        {/* <ThreeStep /> */}
        <Footer />

        <div className="static_icons_div">
          <a
            className="bg-[#86B817] flex pt-3 pb-3 pr-3 pl-3 rounded-full items-center justify-center h-[50px] w-[50px] md:w-[75px] md:h-[75px] fixed right-[30px] bottom-[30px] md:right-[50px] md:bottom-[50px]"
            href="https://t.me/+993"
          >
            <img className="w-full h-full" src={telegram} alt="icon" />
          </a>
          <a
            className="bg-[#86B817] flex pt-3 pb-3 pr-3 pl-3 rounded-full items-center justify-center h-[50px] w-[50px] md:w-[75px] md:h-[75px] fixed left-[30px] bottom-[30px] md:left-[50px] md:bottom-[50px]"
            href="hhtps://wa.me/+993"
          >
            <img src={whatsapp} alt="icon" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Home);
