import React from "react";

import "./Packages.css";
import PackageMain from "../../components/packageMain/PackageMain";
// import ThreeStep from "../../components/threestep/ThreeStep";
import Footer from "../../components/footer/Footer";
import Address from "../../components/address/Address";
import Navigation2 from "../../components/Navigation2/Navigation2";
import telegram from "../../images/telegram.png";
import whatsapp from "../../images/whatsapp.png";

const Packages = () => {
  return (
    <React.Fragment>
      <Address />
      <Navigation2 />
      <PackageMain />
      {/* <ThreeStep /> */}
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
      <Footer />
    </React.Fragment>
  );
};

export default Packages;
