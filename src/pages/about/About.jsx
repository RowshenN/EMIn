import React from "react";

import AboutMain from "../../components/aboutmain/AboutMain";
import "./About.css";
// import HomeMain from "../../components/homemain/HomeMain";
import Footer from "../../components/footer/Footer";
import Address from "../../components/address/Address";
import Navigation2 from "../../components/Navigation2/Navigation2";

const About = () => {
  return (
    <React.Fragment>
      <Address />
      <Navigation2 />
      <div className="about_main_container">
        <AboutMain />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default React.memo(About);
