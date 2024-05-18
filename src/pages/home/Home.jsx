import React from "react";

import "./Home.css";
import AboutMain from "../../components/aboutmain/AboutMain";
import ServiceMain from "../../components/servicemain/ServiceMain";
import Destination from "../../components/destination/Destination";
// import ThreeStep from "../../components/threestep/ThreeStep";
import Footer from "../../components/footer/Footer";
import HomeMain from "../../components/homemain/HomeMain";
import PackageMain from "../../components/packageMain/PackageMain";
import FixedIcons from "../../components/fixedIcons/FixedIcons";
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

        <FixedIcons />
      </div>
    </React.Fragment>
  );
};

export default React.memo(Home);
