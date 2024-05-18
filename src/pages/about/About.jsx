import React from "react";

import AboutMain from "../../components/aboutmain/AboutMain";
import "./About.css";
// import HomeMain from "../../components/homemain/HomeMain";
import Footer from "../../components/footer/Footer";
import Address from "../../components/address/Address";
import Navigation2 from "../../components/Navigation2/Navigation2";
import FixedIcons from "../../components/fixedIcons/FixedIcons";

const About = () => {
  return (
    <React.Fragment>
      <Address />
      <Navigation2 />
      <div className="about_main_container">
        <AboutMain />
        <Footer />
      </div>
      <FixedIcons />
    </React.Fragment>
  );
};

export default React.memo(About);
